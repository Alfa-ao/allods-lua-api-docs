# hangar.GetSwitchShipMasterHullSpellId
Возвращает идентификатор спелла, используемого для смены корпуса корабля.

## Описание
```lua
hangar.GetSwitchShipMasterHullSpellId(): SpellId|nil
```
Полученный идентификатор используется исключительно для получения информации (см. `spellLib.GetState`), вместо каста применяется функция `hangar.SwitchShipMasterHull`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `SpellId` или `nil` - идентификатор спелла, используемого для смены корпуса корабля.

## Примеры
### Получение состояния спелла смены корпуса
```lua
local spellId = hangar.GetSwitchShipMasterHullSpellId()
local spellState = spellId and spellLib.GetState( spellId ) or nil
local canSwitchShipMasterHull = spellState and spellState.enabled
```
::: info Описание примера
В примере запрашивается идентификатор спелла смены корпуса корабля. Если идентификатор получен, извлекается его состояние через `spellLib.GetState`. На основе состояния определяется возможность выполнения действия.
:::

## Смотрите также
- [hangar.SwitchShipMasterHull](function.hangar.SwitchShipMasterHull)
- [spellLib.GetState](function.spellLib.GetState)
- [EVENT_HANGAR_SPELL_CHANGED](events.hangar#event-hangar-spell-changed)
- [EVENT_HANGAR_SPELL_EFFECT](events.hangar#event-hangar-spell-effect)