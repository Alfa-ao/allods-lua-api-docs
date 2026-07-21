# hangar.SwitchShipMasterHull
Меняет корпус активному кораблю главного игрока на заданный.

## Описание
```lua
hangar.SwitchShipMasterHull( hullId: VisualShipId )
```
Функция меняет корпус активному кораблю главного игрока на заданный. Корпус должен присутствовать в списке, возвращаемом `hangar.GetAvailableHulls()`.

## Список параметров
- **`hullId`** (`VisualShipId`) - Идентификатор корпуса корабля.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Смена корпуса активного корабля
```lua
local hulls = hangar.GetAvailableHulls()
if hulls and hulls[0] then
    local hullInfo = hangar.SwitchShipMasterHull( hulls[0] ) -- (HELP) Возвращаемое значение отсутствует.
end
```

::: info Описание примера
В примере запрашивается список доступных корпусов. Если список не пуст и содержит хотя бы один элемент, происходит попытка смены корпуса активного корабля на первый доступный из списка.
:::

## Смотрите также
- [hangar.GetActiveShip](function.hangar.GetActiveShip)
- [hangar.GetActiveShipHull](function.hangar.GetActiveShipHull)
- [hangar.GetAvailableHulls](function.hangar.GetAvailableHulls)