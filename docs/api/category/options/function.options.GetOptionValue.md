# options.GetOptionValue

Извлекает текущее числовое и строковое значение опции.

## Описание

::: success VERSION: [<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-options.IsOptionEnabled) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-options.IsOptionEnabled) <Badge type="warning" text="Process" />

Новая API.

```lua
options.GetOptionValue( id: ObjectId | string ): number, string
```

:::

Извлечение значений производится из массива `values` по текущему индексу `baseIndex`. Функция применяется исключительно для опций типов `UI_OPTION_DATA_DISCRETE` и `UI_OPTION_DATA_DISCRETE_FLOAT`.

::: warning Замечание
Для опций типа `UI_OPTION_DATA_BOOLEAN` необходимо использовать функцию `options.IsOptionEnabled`.
:::

## Список параметров

- **`id`** (`ObjectId` | `string`) - Уникальный идентификатор опции.

## Возвращаемые значения

Возвращает числовое и строковое представления значения опции.

- **`floatValue`** (`number`) - Числовое значение опции.

- **`stringValue`** (`string`) - Строковое значение опции.

## Примеры

### Получение значения опции
```lua
local floatValue, stringValue = options.GetOptionValue( id )
```

## Смотрите также

- [options.GetOptionInfo](/api/category/options/function.options.GetOptionInfo.md)
- [options.IsOptionEnabled](/api/category/options/function.options.IsOptionEnabled.md)
- [UI_OPTION_DATA_*](index.md)