# hangar.GetLendShipSpellId
Возвращает идентификатор спелла, используемого для передачи корабля.

## Описание
```lua
hangar.GetLendShipSpellId(): SpellId | nil
```
Функция возвращает идентификатор спелла, используемого для передачи корабля. Для каста спеллу требуется цель - аватар, которому передается корабль.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `SpellId` | `nil` - `nil`, если информация отсутствует, иначе идентификатор спелла, используемого для передачи корабля.

## Примеры
### Проверка возможности передачи корабля
```lua
local spellId = hangar.GetLendShipSpellId()
local spellState = spellId and spellLib.GetState( spellId ) or nil
local canLend = spellState and spellState.enabled
```
::: info Описание примера
В примере получается идентификатор спелла для передачи корабля. Если идентификатор существует, запрашивается его состояние через `spellLib.GetState`. На основе состояния определяется возможность передачи корабля.
:::

## Смотрите также
- [spellLib.GetState](function.spellLib.GetState)
- [EVENT_HANGAR_SPELL_CHANGED](events.hangar#event-hangar-spell-changed)
- [EVENT_HANGAR_SPELL_EFFECT](events.hangar#event-hangar-spell-effect)
- [hangar.GetReturnLendedShipSpellId](function.hangar.GetReturnLendedShipSpellId)