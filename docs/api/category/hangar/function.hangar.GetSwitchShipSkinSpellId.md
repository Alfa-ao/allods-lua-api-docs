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

- [hangar.SwitchShipSkin](function.hangar.SwitchShipSkin)
- [spellLib.GetState](function.spellLib.GetState)
- [EVENT_HANGAR_SPELL_CHANGED](events.hangar#event-hangar-spell-changed)
- [EVENT_HANGAR_SPELL_EFFECT](events.hangar#event-hangar-spell-effect)