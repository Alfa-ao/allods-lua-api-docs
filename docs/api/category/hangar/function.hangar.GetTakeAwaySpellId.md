# hangar.GetTakeAwaySpellId
Возвращает идентификатор спелла для отбирания ранее одолженного корабля.

## Описание
```lua
hangar.GetTakeAwaySpellId(): SpellId | nil
```
Функция возвращает идентификатор спелла, который используется исключительно для получения информации. Для непосредственного отбирания корабля необходимо использовать функцию `hangar.TakeAwayShip`. При изменении состояния спелла передается событие `EVENT_HANGAR_SPELL_CHANGED`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `SpellId` | `nil` - Идентификатор спелла, если информация доступна.

## Примеры
### Получение состояния спелла
```lua
local spellId = hangar.GetTakeAwaySpellId()
local spellState = spellId and spellLib.GetState( spellId ) or nil
local canSummonShip = spellState and spellState.enabled
```
::: info Описание примера
В примере извлекается идентификатор спелла и проверяется его состояние с помощью функции `spellLib.GetState`. Если спелл существует и его состояние разрешает действие, переменная `canSummonShip` принимает значение `true`.
:::

## Смотрите также
- [hangar.TakeAwayShip](function.hangar.TakeAwayShip)
- [EVENT_HANGAR_SPELL_CHANGED](events.hangar#event-hangar-spell-changed)
- [EVENT_HANGAR_SPELL_EFFECT](events.hangar#event-hangar-spell-effect)