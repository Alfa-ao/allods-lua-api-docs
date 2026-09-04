# RelatedTextsLua:GetList

Возвращает список всех текстов в текстовой группе.

## Описание

```lua
RelatedTextsLua:GetList(): table
```

Функция возвращает таблицу со списком имен всех текстов в группе.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - список имен всех текстов в группе. Индексация начинается с `1`.

## Примеры

### Извлечение случайного текста из группы

```lua
wtLoadingScreenTipText:SetVal(
    "text",
    LOADING_TIPS:GetText(
        select( -- Lua function: select( index, ... )
            2,
            table.getrandom(
                LOADING_TIPS:GetList()
            )
        )
    )
)
```