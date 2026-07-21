# hangar.GetUnsummonShipSpellId

Возвращает идентификатор спелла для отзыва корабля из ангара.

## Описание

```lua
hangar.GetUnsummonShipSpellId(): SpellId|nil
```

Функция возвращает идентификатор спелла, предназначенный исключительно для получения информации о состоянии через `spellLib.GetState`. Для непосредственного отзыва корабля требуется использование функции `hangar.UnsummonShip`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `SpellId` | `nil` - Идентификатор спелла, используемого для отзыва корабля из ангара.

## Примеры

### Проверка возможности отзыва корабля

```lua
local spellId = hangar.GetUnsummonShipSpellId()
local spellState = spellId and spellLib.GetState( spellId ) or nil
local canUnsummonShip = spellState and spellState.enabled
```

::: info Описание примера
В примере извлекается идентификатор спелла отзыва корабля. При его наличии запрашивается состояние спелла через `spellLib.GetState`. На основе полученного состояния определяется возможность выполнения отзыва.
:::

## Смотрите также

- [hangar.UnsummonShip](function.hangar.UnsummonShip)
- [EVENT_HANGAR_SPELL_CHANGED](events.hangar#event-hangar-spell-changed)
- [EVENT_HANGAR_SPELL_EFFECT](events.hangar#event-hangar-spell-effect)