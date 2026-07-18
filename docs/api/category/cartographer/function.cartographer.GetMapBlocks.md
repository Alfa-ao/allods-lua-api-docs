# cartographer.GetMapBlocks
Возвращает список идентификаторов блоков интерфейсных карт.

## Описание
```lua
cartographer.GetMapBlocks(): table
```
Функция возвращает индексированную с нуля таблицу, содержащую идентификаторы блоков интерфейсных карт (например, Кания, Хадаган, Карты мира). Каждый блок включает в себя одну или несколько интерфейсных карт зон.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает таблицу (`table`), содержащую идентификаторы (`ObjectId`) блоков карт. Индексация элементов в таблице начинается с нуля.

## Примеры
### Получение и перебор списка блоков карт
```lua
local mapBlocks = cartographer.GetMapBlocks()
for i = 0, GetTableSize( mapBlocks ) - 1 do
    local mapBlockInfo = cartographer.GetMapBlockInfo( mapBlocks[ i ] )
end
```

## Смотрите также
- [cartographer.GetMapBlockInfo](cartographer.GetMapBlockInfo)