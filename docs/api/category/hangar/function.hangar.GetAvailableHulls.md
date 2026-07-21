# hangar.GetAvailableHulls
Возвращает список идентификаторов корпусов, которые можно задать активному кораблю главного игрока.

## Описание
```lua
hangar.GetAvailableHulls(): table|nil
```
Функция возвращает индексированную числами от 1 таблицу идентификаторов корпусов, доступных для активного корабля. Если активный корабль отсутствует, функция возвращает `nil`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` или `nil`.
Возвращает индексированную числами от 1 таблицу идентификаторов (`VisualShipId`) корпусов, доступных для активного корабля. Если активного корабля нет, возвращается `nil`.

## Примеры
### Получение списка доступных корпусов
```lua
local hulls = hangar.GetAvailableHulls()
if hulls and hulls[1] then
    local hullInfo = hangar.GetHullInfo( hulls[1] )
end
```
::: info Описание примера
В примере запрашивается список доступных корпусов. Если таблица не пуста, извлекается информация о первом корпусе с помощью функции `hangar.GetHullInfo`.
:::

## Смотрите также
- [hangar.GetActiveShipHull](function.hangar.GetActiveShipHull)
- [hangar.GetHullInfo](function.hangar.GetHullInfo)
- [hangar.SwitchShipMasterHull](function.hangar.SwitchShipMasterHull)
- [EVENT_HANGAR_ACTIVE_SHIP_HULLS_CHANGED](events.hangar#event-hangar-active-ship-hulls-changed)