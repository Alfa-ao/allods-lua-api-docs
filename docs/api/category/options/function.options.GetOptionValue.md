# options.GetOptionValue
Извлекает текущее числовое и строковое значение опции.

## Описание
```lua
options.GetOptionValue( id: ObjectId | string ): number, string
```
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
- [options.GetOptionInfo](function.options.GetOptionInfo)
- [options.IsOptionEnabled](function.options.IsOptionEnabled)
- [UI_OPTION_DATA_*](adsfasdf)