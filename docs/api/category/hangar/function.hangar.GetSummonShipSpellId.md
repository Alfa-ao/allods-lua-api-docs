# hangar.GetSummonShipSpellId

Возвращает идентификатор спелла для призыва корабля в ангар главного игрока.

## Описание

```lua
hangar.GetSummonShipSpellId(): SpellId | nil
```

Полученный идентификатор используется исключительно для получения информации о состоянии спелла. Для непосредственного призыва корабля применяется функция `hangar.SummonShip`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `SpellId` | `nil` - идентификатор спелла призыва корабля.

## Примеры

### Получение состояния спелла призыва корабля

```lua
local spellId = hangar.GetSummonShipSpellId()
local spellState = spellId and spellLib.GetState( spellId ) or nil
local canSummonShip = spellState and spellState.enabled
```

::: info Описание примера
В примере запрашивается идентификатор спелла призыва корабля. При его наличии извлекается состояние спелла для проверки возможности использования.
:::

## Смотрите также

- [hangar.SummonShip](/api/category/hangar/function.hangar.SummonShip.md)
- [EVENT_HANGAR_SPELL_CHANGED](/api/events/events.EVENT_HANGAR_.md#event-hangar-spell-changed)
- [EVENT_HANGAR_SPELL_EFFECT](/api/events/events.EVENT_HANGAR_.md#event-hangar-spell-effect)