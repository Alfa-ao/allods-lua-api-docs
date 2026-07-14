# avatar.GetActiveUsableDevice
Возвращает идентификатор текущего используемого устройства, например, корабельного (управление, орудия и т.д.).

## Описание
```lua
avatar.GetActiveUsableDevice(): ObjectId | nil
```
Функция извлекает и возвращает уникальный идентификатор устройства, которое в данный момент используется персонажем. В качестве примера таких устройств выступают корабельные модули, такие как системы управления или орудия.

При изменении состояния доступности какого-либо действия, связанного с устройством, передается событие `EVENT_DEVICE_COOLDOWNS_ENABLE_CHANGED`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `ObjectId` — уникальный идентификатор используемого устройства, или `nil`, если в данный момент ни одно устройство не активно.

## Примеры
### Получение информации об активном устройстве и его действиях
```lua
local deviceId = avatar.GetActiveUsableDevice()
local info = avatar.GetUsableDeviceInfo( deviceId )

if info then
    local actions = info.actions
    common.LogInfo( "common", "name: " .. userMods.FromWString( info.name ) .. ", actions count: " .. GetTableSize( actions ) )

    for i = 0, GetTableSize( actions ) - 1 do
        local action = actions[i]
        common.LogInfo( "common", " action: " .. i )
        common.LogInfo( "common", "  name: " .. userMods.FromWString( action.name ) )
    end
end
```
::: info Описание примера
В примере сначала запрашивается идентификатор текущего активного устройства. Если устройство найдено, извлекается подробная информация о нем с помощью `avatar.GetUsableDeviceInfo`. Далее в лог выводится название устройства и количество доступных действий, после чего в цикле перебираются и логируются названия всех действий, связанных с данным устройством.
:::

## Смотрите также
- [EVENT_DEVICE_COOLDOWNS_ENABLE_CHANGED](events.device#event-device-cooldowns-enable-changed)