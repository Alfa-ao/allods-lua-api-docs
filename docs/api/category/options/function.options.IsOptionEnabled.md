# options.IsOptionEnabled

Возвращает значение логической опции.

## Описание

::: success VERSION: [<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-options.IsOptionEnabled) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-options.IsOptionEnabled) <Badge type="warning" text="Process" />

Новая API.

```lua
options.IsOptionEnabled( id: ObjectId | string ): boolean
```

:::

Функция извлекает и возвращает текущее состояние опции, предназначенной для хранения логических значений.

::: warning Замечание
Функция применяется исключительно для опций типа `UI_OPTION_DATA_BOOLEAN`. Для опций типов `UI_OPTION_DATA_DISCRETE` и `UI_OPTION_DATA_DISCRETE_FLOAT` необходимо использовать функции `options.GetOptionIndex` или `options.GetOptionValue`.
:::

## Список параметров

- **`id`** (`ObjectId` | `string`) - Уникальный идентификатор или строковое имя опции.

## Возвращаемые значения

Возвращает `boolean` - Значение опции.

## Примеры

### Проверка состояния опции

```lua
if options.IsOptionEnabled( id ) then
    -- Действие при включенной опции
end
```

## Смотрите также

- [options.GetOptionIndex](/api/category/options/function.options.GetOptionIndex.md)
- [options.GetOptionValue](/api/category/options/function.options.GetOptionValue.md)
- [UI_OPTION_DATA_*](index.md)