# unit.GetFairyPowerBonus

Возвращает величину прибавки к Могуществу от уровня покровителя.

## Описание

```lua
unit.GetFairyPowerBonus( unitId: ObjectId ): number | nil
```

Функция возвращает величину прибавки к Могуществу от уровня покровителя.

::: warning Замечание
При изменении приходит событие `EVENT_UNIT_FAIRY_CHANGED`.
:::

## Список параметров

- **`unitId`** (`ObjectId`) - идентификатор юнита.

## Возвращаемые значения

Возвращает `number` | `nil` - величина бонуса от уровня покровителя, если информация найдена, иначе `nil`.

## Примеры

### Получение прибавки к Могуществу

```lua
local powerBonus = unit.GetFairyPowerBonus( unitId )
```

## Смотрите также

- [EVENT_UNIT_FAIRY_CHANGED](../events#event-unit-fairy-changed)