# cartographer.GetMarkerInfo
Возвращает описание типа маркера, которым помечаются перманентные объекты на интерфейсной карте.

## Описание
```lua
cartographer.GetMarkerInfo( markerId: InterfaceMapMarkerId ): table | nil
```
Функция извлекает и возвращает детальную информацию о типе маркера по его идентификатору. Если маркер с указанным идентификатором не найден, функция возвращает `nil`.

## Список параметров
- **`markerId`** (`InterfaceMapMarkerId`)
Идентификатор ресурса маркера.

## Возвращаемые значения
Возвращает таблицу (`table`) с описанием типа маркера или `nil`, если тип маркера не найден.

Структура возвращаемой таблицы:
- **`name`** (`WString`) — название типа маркера.
- **`sysName`** (`string`) — системное имя типа маркера для специальной обработки в скриптах.
- **`description`** (`WString`) — описание типа маркера.
- **`priority`** (`number`) — приоритет типа маркера. Используется, если для одного объекта обнаружено несколько типов маркеров. Минимальный приоритет равен `0`.
- **`image`** (`TextureId`) — идентификатор текстуры иконки типа маркера.

## Примеры
### Получение информации о маркерах на карте зоны
```lua
local markers = cartographer.GetMapMarkers( zonesMapId )
for i, markerId in pairs( markers ) do
    local markerInfo = cartographer.GetMarkerInfo( markerId )
    local markerObjects = cartographer.GetMapMarkerObjects( zonesMapId, markerId )
end
```
::: info Описание примера
В примере извлекается список идентификаторов маркеров для указанной зоны с помощью функции `cartographer.GetMapMarkers`. Затем в цикле перебирается каждый идентификатор. Для каждого маркера запрашивается подробная информация о его типе через `cartographer.GetMarkerInfo` и список привязанных объектов через `cartographer.GetMapMarkerObjects`.
:::

## Смотрите также
- [cartographer.GetMapMarkers](cartographer.GetMapMarkers)
- [cartographer.GetMapMarkerObjects](cartographer.GetMapMarkerObjects)