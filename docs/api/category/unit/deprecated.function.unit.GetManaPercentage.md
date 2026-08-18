# unit.GetManaPercentage

Возвращает информацию о мане персонажа в процентах.

## Описание

::: danger VERSION: [<Badge type="warning" text="17.0.01.43" />](/index.md#17.0.0-UNIT_MANA)

Функция удалена.

```lua
unit.GetManaPercentage( unitId: ObjectId ): number | nil
```
:::

Если значение маны неизвестно, возвращается `nil`.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор юнита.

## Возвращаемые значения

Возвращает `number` | `nil` - процент текущей маны от максимальной.