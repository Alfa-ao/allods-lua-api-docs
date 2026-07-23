# RelatedTexturesLua:GetList

Возвращает список всех текстур в текстурной группе.

## Описание

```lua
RelatedTexturesLua:GetList(): table
```

Функция возвращает список имен всех текстур, содержащихся в текстурной группе. Результат представляет собой таблицу строк с индексацией, начинающейся с 1.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - список имен всех текстур в группе (индексация с 1, элементы типа `string`).

## Примеры

### Получение случайной текстуры из группы

```lua
wtLoadingScreen:SetBacckgroundTexture( 
    LOADING_TEXTURES:GetTexture( 
        select( -- Lua function: select( index, ... )
            2, 
            table.getrandom( LOADING_TEXTURES:GetList() ) 
        ) 
    ) 
)
```

## Смотрите также

- [RelatedTexturesLua:GetTexture](RelatedTexturesLua.GetTexture)