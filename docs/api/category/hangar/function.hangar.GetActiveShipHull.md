# hangar.GetActiveShipHull

Возвращает идентификатор корпуса активного корабля главного игрока.

## Описание

```lua
hangar.GetActiveShipHull(): VisualShipId|nil
```

Функция возвращает идентификатор корпуса активного корабля главного игрока. Если активный корабль отсутствует, возвращается `nil`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `VisualShipId` или `nil` - идентификатор корпуса активного корабля; если активного корабля нет, то `nil`.

## Примеры

### Получение информации об активном корпусе

```lua
local hullId = hangar.GetActiveShipHull()
if hullId then
    local activeHullInfo = hangar.GetHullInfo( hullId )
end
```

::: info Описание примера
В примере запрашивается идентификатор корпуса активного корабля. При успешном получении идентификатора вызывается функция для извлечения подробной информации о корпусе.
:::

## Смотрите также

- [hangar.GetAvailableHulls](function.hangar.GetAvailableHulls)
- [hangar.GetHullInfo](function.hangar.GetHullInfo)
- [hangar.SwitchShipMasterHull](function.hangar.SwitchShipMasterHull)
- [EVENT_HANGAR_ACTIVE_HULL_CHANGED](events.hangar#event-hangar-active-hull-changed)