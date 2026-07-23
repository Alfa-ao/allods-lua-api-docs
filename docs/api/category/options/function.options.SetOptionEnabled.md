# options.SetOptionEnabled

Задает новое значение для опции.

## Описание

```lua
options.SetOptionEnabled( id: ObjectId | string, value: boolean, apply: boolean | nil )
```

Функция задает новое значение для опции, которое используется при выполнении команды Apply. При передаче `true` в параметре `apply` значение применяется немедленно.

::: warning Замечание
Функция предназначена только для опций типа `UI_OPTION_DATA_BOOLEAN`. Для опций типов `UI_OPTION_DATA_ACTION`, `UI_OPTION_DATA_DISCRETE`, `UI_OPTION_DATA_DISCRETE_FLOAT` необходимо использовать функцию `options.SetOptionIndex`.
:::

## Список параметров

- **`id`** (`ObjectId` | `string`) - Идентификатор опции.

- **`value`** (`boolean`) - Новое значение для опции.

- **`apply`** (`boolean` | `nil`) - Если `true`, значение применяется немедленно.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Установка значения опции

```lua
options.SetOptionEnabled( id, value, false )
```

## Смотрите также

- [options.SetOptionIndex](function.options.SetOptionIndex)