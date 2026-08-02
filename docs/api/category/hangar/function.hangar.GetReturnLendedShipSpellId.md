# hangar.GetReturnLendedShipSpellId

Возвращает идентификатор спелла, используемого для возврата одолженного корабля его хозяину.

## Описание

```lua
hangar.GetReturnLendedShipSpellId(): number | nil
```

Функция возвращает идентификатор спелла, используемого для возврата одолженного корабля его хозяину.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `number` - `SpellId` идентификатор спелла, используемого для возврата корабля, или `nil`.

## Примеры

### Проверка возможности возврата корабля

```lua
local spellId = hangar.GetReturnLendedShipSpellId()
local spellState = spellId and spellLib.GetState( spellId ) or nil
local canReturn = spellState and spellState.enabled
```

::: info Описание примера
В примере запрашивается идентификатор спелла для возврата корабля. Если идентификатор получен, проверяется состояние спелла с помощью `spellLib.GetState`. На основе состояния определяется возможность возврата.
:::

## Смотрите также

- [spellLib.GetState](/api/category/spellLib/function.spellLib.GetState.md)
- [avatar.RunSpell](/api/category/avatar/function.avatar.RunSpell.md)
- [EVENT_HANGAR_SPELL_CHANGED](/api/events/events.EVENT_HANGAR_.md#event-hangar-spell-changed)
- [EVENT_HANGAR_SPELL_EFFECT](/api/events/events.EVENT_HANGAR_.md#event-hangar-spell-effect)
- [hangar.GetLendShipSpellId](/api/category/hangar/function.hangar.GetLendShipSpellId.md)