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

- [hangar.SummonShip](function.hangar.SummonShip)
- [EVENT_HANGAR_SPELL_CHANGED](events.hangar#event-hangar-spell-changed)
- [EVENT_HANGAR_SPELL_EFFECT](events.hangar#event-hangar-spell-effect)