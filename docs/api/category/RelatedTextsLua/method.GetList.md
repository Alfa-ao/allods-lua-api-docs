# RelatedTextsLua:GetList

Возвращает список всех текстов в текстовой группе.

## Описание

```lua
RelatedTextsLua:GetList(): table
```

Функция возвращает таблицу со списком имен всех текстов в группе.

## Список параметров

- **`self`** (`RelatedTextsLua`) - группа текстов.

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

::: info Описание примера
В примере извлекается случайный текст из группы загрузочных подсказок и устанавливается в качестве значения для текстового элемента.
:::

## Смотрите также

- [LOADING_TIPS:GetText](LOADING_TIPS:GetText)
- [wtLoadingScreenTipText:SetVal](wtLoadingScreenTipText:SetVal)