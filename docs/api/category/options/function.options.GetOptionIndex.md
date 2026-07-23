# options.GetOptionIndex

Возвращает номер варианта опции (baseIndex).

## Описание

```lua
options.GetOptionIndex( id: ObjectId | string ): number
```

Функция возвращает номер варианта опции (baseIndex).

::: warning Замечание
Функция предназначена только для опций типов `UI_OPTION_DATA_DISCRETE` и `UI_OPTION_DATA_DISCRETE_FLOAT`. Для опций типа `UI_OPTION_DATA_BOOLEAN` необходимо использовать функцию `options.IsOptionEnabled`.
:::

## Список параметров

- **`id`** (`ObjectId` | `string`) - Идентификатор опции.

## Возвращаемые значения

Возвращает `number` - номер варианта опции.

## Примеры

### Проверка номера варианта опции

```lua
if options.GetOptionIndex( id ) == 2 then
    -- ...
end
```

## Смотрите также

- [options.IsOptionEnabled](function.options.IsOptionEnabled)
- [UI_OPTION_DATA_*](dfgsdfg)
- [options.GetOptionInfo](function.options.GetOptionInfo)