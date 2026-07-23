# options.SetOptionIndex

Задает новое значение для опции.

## Описание

```lua
options.SetOptionIndex( id: ObjectId | string, index: number, apply: boolean | nil )
```

Новое значение используется при выполнении команды Apply. Возможно немедленное применение при `apply = true`.

::: warning Замечание
Функция применяется только для опций типов `UI_OPTION_DATA_ACTION`, `UI_OPTION_DATA_DISCRETE` и `UI_OPTION_DATA_DISCRETE_FLOAT`. Для опций типа `UI_OPTION_DATA_BOOLEAN` необходимо использовать функцию `options.SetOptionEnabled`.
:::

## Список параметров

- **`id`** (`ObjectId` | `string`) - Идентификатор опции.

- **`index`** (`number`) - Новое значение для опции.

- **`apply`** (`boolean` | `nil`) - Флаг немедленного применения значения. Если `true`, значение применяется немедленно.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Установка значения опции

```lua
options.SetOptionIndex( id, index, false )
```

## Смотрите также

- [options.SetOptionEnabled](function.options.SetOptionEnabled)
- [UI_OPTION_DATA_*](dsgdsf)