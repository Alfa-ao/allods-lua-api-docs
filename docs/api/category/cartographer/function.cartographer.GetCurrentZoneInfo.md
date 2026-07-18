# cartographer.GetCurrentZoneInfo
Возвращает описание текущей зоны, в которой находится главный персонаж.

## Описание
```lua
cartographer.GetCurrentZoneInfo(): table
```
Функция извлекает и возвращает детальную информацию о текущей зоне, в которой в данный момент находится главный персонаж. Возвращаемые данные включают названия аллода, зоны и подзоны, их служебные идентификаторы, а также идентификатор интерфейсной карты зон.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает таблицу (`table`), содержащую следующие поля:
- **`allod`** (`WString`) — название аллода.
- **`zoneName`** (`WString`) — название зоны.
- **`sysZoneName`** (`string`) — служебное название зоны.
- **`subZoneName`** (`WString`) — название подзоны. Возвращает пустую строку, если главный персонаж не находится в подзоне.
- **`sysSubZoneName`** (`string`) — служебное название подзоны.
- **`zonesMapId`** (`ObjectId` | `nil`) — идентификатор интерфейсной карты зон, на которой находится главный игрок в данный момент. Возвращает `nil`, если такая карта не найдена в ресурсах.

## Примеры
### Получение и вывод информации о текущей зоне
```lua
local zoneInfo = cartographer.GetCurrentZoneInfo()
LogInfo( userMods.FromWString( zoneInfo.allod ) )
LogInfo( userMods.FromWString( zoneInfo.zoneName ) )
LogInfo( userMods.FromWString( zoneInfo.subZoneName ) )

if zoneInfo.zonesMapId then
    local zonesMapInfo = cartographer.GetZonesMapInfo( zoneInfo.zonesMapId )
end
```

## Смотрите также
- [cartographer.GetCurrentMapInfo](cartographer.GetCurrentMapInfo)
- [cartographer.GetZonesMapInfo](cartographer.GetZonesMapInfo)