# hangar.GetAvailableSkins

Возвращает список идентификаторов скинов, которые можно задать активному корпусу активного корабля главного игрока.

## Описание

```lua
hangar.GetAvailableSkins(): table|nil
```

Функция возвращает список (индексированная числами от 1 таблица) идентификаторов скинов, доступных для активного корпуса активного корабля. Если активного корабля нет, функция возвращает `nil`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` или `nil` - список (индексированная числами от 1 таблица) идентификаторов скинов, доступных для активного корпуса активного корабля; если активного корабля нет, то `nil`.

## Примеры

### Получение информации о первом доступном скине

```lua
local skins = hangar.GetAvailableSkins()
if skins and skins[1] then
    local skinInfo = hangar.GetSkinInfo( skins[1] )
end
```

::: info Описание примера
В примере запрашивается список доступных скинов. При наличии хотя бы одного скина в списке извлекается информация о первом доступном скине с помощью функции `hangar.GetSkinInfo`.
:::

## Смотрите также

- [hangar.GetSkinInfo](function.hangar.GetSkinInfo)
- [hangar.GetActiveShipSkin](function.hangar.GetActiveShipSkin)
- [hangar.SwitchShipSkin](function.hangar.SwitchShipSkin)
- [EVENT_HANGAR_ACTIVE_SHIP_SKINS_CHANGED](events.hangar#event-hangar-active-ship-skins-changed)