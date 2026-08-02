# hangar.TakeAwayShip

Отбирает ранее одолженный корабль обратно.

## Описание

```lua
hangar.TakeAwayShip( shipId: ObjectId )
```

Возможность действия определяется состоянием спелла, получаемого через `hangar.GetTakeAwaySpellId()` (поле `enabled` у `spellLib.GetState( id )`). При изменении состояния присылается событие `EVENT_HANGAR_SPELL_CHANGED`.

## Список параметров

- **`shipId`** (`ObjectId`) - Идентификатор корабля.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Изъятие первого доступного корабля

```lua
local ships = hangar.GetShips()
if ships and ships[0] then
    hangar.TakeAwayShip( ships[0] )
end
```

::: info Описание примера
В примере запрашивается список доступных кораблей. При наличии хотя бы одного корабля в списке, первый корабль изымается обратно с помощью вызова `hangar.TakeAwayShip`.
:::

## Смотрите также

- [hangar.GetShips](/api/category/hangar/function.hangar.GetShips.md)
- [hangar.GetTakeAwaySpellId](/api/category/hangar/function.hangar.GetTakeAwaySpellId.md)
- [EVENT_HANGAR_SPELL_CHANGED](/api/events/events.EVENT_HANGAR_.md#event-hangar-spell-changed)
- [EVENT_HANGAR_SPELL_EFFECT](/api/events/events.EVENT_HANGAR_.md#event-hangar-spell-effect)