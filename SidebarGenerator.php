<?php

class SidebarGenerator
{

    /**
     * @param string $rootDir Корневая папка (example, 'docs')
     * @param array $config Конфигурация:
     *   [
     *     'rename' => ['text' => ['api' => 'Lua Api']],
     *     'ignore' => ['.vitepress', 'node_modules', 'api/deprecated']
     *   ]
     */
    public function __construct(
        private string $rootDir = 'docs', 
        private array $config = []
    )
    {
        $this->rootDir = rtrim($rootDir, '/\\');
        $this->config = $config;
    }

    public function generate(): array
    {
        $dirIterator = new RecursiveDirectoryIterator(
            $this->rootDir, 
            RecursiveDirectoryIterator::SKIP_DOTS
        );
        
        // Фильтр для игнорирования папок на уровне итератора
        $ignoreList = $this->config['ignore'] ?? [];
        
        $filterIterator = new RecursiveCallbackFilterIterator($dirIterator, function ($current, $key, $iterator) use ($ignoreList) {
            // Файлы всегда пропускаем через фильтр
            if (!$current->isDir()) {
                return true;
            }
            
            $name = $current->getFilename();
            
            // Игнорирование по имени папки ('.vitepress')
            if (in_array($name, $ignoreList, true)) {
                return false; // Не показывать и не заходить внутрь
            }
            
            // Игнорирование по относительному пути ('api/old_category')
            $subPath = $iterator->getSubPath();
            $relativePath = $subPath === '' ? $name : $subPath . '/' . $name;
            
            if (in_array($relativePath, $ignoreList, true)) {
                return false; // Не показывать и не заходить внутрь
            }
            
            return true;
        });
        
        $iterator = new RecursiveIteratorIterator(
            $filterIterator, 
            RecursiveIteratorIterator::SELF_FIRST
        );

        $tree = [];
        $stack = [];
        $stack[0] = &$tree;

        foreach ($iterator as $file) {
            $depth = $iterator->getDepth();
            $filename = $file->getFilename();
            $subPath = method_exists($iterator, 'getSubPath') ? $iterator->getSubPath() : '';
            
            $context = &$stack[$depth];
            
            if ($file->isDir()) {
                $hasIndex = file_exists($file->getPathname() . '/index.md');
                
                $item = [];
                
                $item['text'] = $this->resolveText($filename);
                if ( $depth !== 0 ) $item['collapsed'] = true;
                $item['items'] = [];
                
                if ($hasIndex) {
                    $linkPath = $subPath === '' ? $filename : $subPath . '/' . $filename;
                    $item['link'] = $this->normalizeLink($linkPath . '/index');
                }
                
                $context[] = $item;
                $lastIndex = count($context) - 1;
                
                $stack[$depth + 1] = &$context[$lastIndex]['items'];
                
            } elseif ($file->isFile() && $file->getExtension() === 'md') {
                if ($filename === 'index.md') {
                    continue;
                }
                
                $baseName = $file->getBasename('.md');
                $parts = explode('.', $baseName);
                $text = end($parts);
                /* $text = $partFirst = array_first ( $parts );
                
                if ( ! in_array ( $partFirst, [ 'events', 'constants', 'enums', 'index' ] ) )
                {
                    $text = end($parts);
                } */
                
                $linkPath = $subPath === '' ? $baseName : $subPath . '/' . $baseName;
                
                $context[] = [
                    'text' => $this->resolveText($text),
                    'link' => $this->normalizeLink($linkPath)
                ];
            }
        }

        return $tree;
    }

    private function resolveText(string $text): string
    {
        $renameRules = $this->config['rename']['text'] ?? [];
        
        if (isset($renameRules[$text])) {
            return $renameRules[$text];
        }
        
        return ucfirst($text);
    }

    private function normalizeLink(string $path): string
    {
        $path = ltrim($path, '/\\');
        $path = str_replace('\\', '/', $path);
        $path = preg_replace('#/+#', '/', '/' . $path);
        return $path;
    }

    public function saveAsTsConfig(string $filePath): void
    {
        $data = $this->generate();
        $json = json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        
        $tsObject = strtr($json, [
            '"text"' => 'text',
            '"collapsed"' => 'collapsed',
            '"items"' => 'items',
            '"link"' => 'link',
        ]);
        
        $tsContent = "export default " . $tsObject . ";\n";
        
        file_put_contents($filePath, $tsContent);
    }
}



$generator = new SidebarGenerator('docs', [
    'ignore' => [
        '.vitepress',
        'classes',
        'public',
    ],
    'rename' => [
        'text' => [
            'api' => 'Lua Api',
            'events' => 'События (Events)', 
            'constants' => 'Константы (Consts)', 
            'enums' => 'Перечисления (Enums)',
            //'index' => 'Оглавление',
        ]
    ]
]);


// $sidebarArray = $generator->generate();
// print_r($sidebarArray);

$generator->saveAsTsConfig('sidebar.config.ts');

echo "Генерация завершена.";