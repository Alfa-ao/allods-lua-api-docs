# options.GetOptionsByCustomType

Возвращает таблицу с идентификаторами всех опций для заданного пользовательского типа.

## Описание

::: danger Deprecated

VERSION: [<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-options.GetOptionsByCustom) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-options.GetOptionsByCustom) <Badge type="warning" text="Process" />

```lua
options.GetOptionsByCustomType( sysCustomType: string ): table
```
:::

Функция возвращает таблицу с идентификаторами всех опций для заданного пользовательского типа.

## Список параметров

- **`sysCustomType`** (`string`) - пользовательский идентификатор для типа опций.

## Возвращаемые значения

Возвращает `table` - таблица с идентификаторами опций. Индексация начинается с `0`, тип значений: `ObjectId`.

## Примеры

### Получение и обработка опций

```lua
local ids = options.GetOptionsByCustomType("some_option")
for i = 0, GetTableSize(ids) - 1 do
    local info = options.GetOptionInfo(ids[i])
    LogInfo("", info)
end
```