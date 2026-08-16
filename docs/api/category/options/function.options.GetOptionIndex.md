# options.GetOptionIndex

Возвращает номер варианта опции (baseIndex).

## Описание

::: success VERSION: <Badge type="warning" text="^17.1.*" /> <Badge type="warning" text="^18.0.0" /> <Badge type="warning" text="Process" />

Новая функция.

```lua
options.GetOptionIndex( id: ObjectId | string ): number
```

:::

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

- [options.IsOptionEnabled](/api/category/options/function.options.IsOptionEnabled.md)
- [UI_OPTION_DATA_*](index.md)
- [options.GetOptionInfo](/api/category/options/function.options.GetOptionInfo.md)