# hangar.GetSwitchShipSkinSpellId

Возвращает идентификатор спелла, используемого для смены скина корабля.

## Описание

```lua
hangar.GetSwitchShipSkinSpellId(): SpellId | nil
```

Функция возвращает идентификатор спелла, используемого для смены скина корабля. Полученный идентификатор используется исключительно для получения информации, для применения эффекта используется функция `hangar.SwitchShipSkin`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `SpellId` | `nil` - идентификатор спелла, используемого для смены скина корабля.

## Примеры

### Получение состояния спелла

```lua
local spellId = hangar.GetSwitchShipSkinSpellId()
local spellState = spellId and spellLib.GetState( spellId ) or nil
local canSwitchShipSkin = spellState and spellState.enabled
```

::: info Описание примера
В примере запрашивается идентификатор спелла для смены скина корабля. Если идентификатор получен, извлекается состояние спелла посредством вызова `spellLib.GetState`. На основе состояния определяется возможность смены скина.
:::

## Смотрите также

- [hangar.SwitchShipSkin](/api/category/hangar/function.hangar.SwitchShipSkin.md)
- [spellLib.GetState](/api/category/spellLib/function.spellLib.GetState.md)
- [EVENT_HANGAR_SPELL_CHANGED](/api/events/events.EVENT_HANGAR_.md#event-hangar-spell-changed)
- [EVENT_HANGAR_SPELL_EFFECT](/api/events/events.EVENT_HANGAR_.md#event-hangar-spell-effect)