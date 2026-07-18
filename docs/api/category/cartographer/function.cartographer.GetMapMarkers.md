# cartographer.GetMapMarkers
Возвращает список идентификаторов ресурсов типов маркеров, присутствующих на заданной интерфейсной карте.

## Описание
```lua
cartographer.GetMapMarkers( zonesMapId: ObjectId ): table
```
Функция извлекает и возвращает таблицу с идентификаторами ресурсов типов маркеров, которые размещены на указанной интерфейсной карте. Индексация элементов в возвращаемой таблице начинается с нуля.

## Список параметров
- **`zonesMapId`** (`ObjectId`)
Уникальный идентификатор интерфейсной карты, для которой необходимо получить список маркеров.

## Возвращаемые значения
Возвращает таблицу (`table`), содержащую идентификаторы (`InterfaceMapMarkerId`) ресурсов типов маркеров. Индексация элементов в таблице начинается с нуля.

## Примеры
### Получение и перебор списка маркеров на карте
```lua
local markers = cartographer.GetMapMarkers( zonesMapId )
for i, markerId in pairs( markers ) do
    local markerInfo = cartographer.GetMarkerInfo( markerId )
    local markerObjects = cartographer.GetMapMarkerObjects( zonesMapId, markerId )
end
```
::: info Описание примера
В примере извлекается таблица идентификаторов маркеров для заданной интерфейсной карты. Затем в цикле перебирается каждый идентификатор. Для каждого маркера запрашивается подробная информация через `cartographer.GetMarkerInfo` и список объектов маркера на карте через `cartographer.GetMapMarkerObjects`.
:::

## Смотрите также
- [cartographer.GetMarkerInfo](cartographer.GetMarkerInfo)
- [cartographer.GetMapMarkerObjects](cartographer.GetMapMarkerObjects)