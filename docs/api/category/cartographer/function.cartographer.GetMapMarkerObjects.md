# cartographer.GetMapMarkerObjects
Извлекает и возвращает список глобальных координат объектов, помеченных заданным маркером на интерфейсной карте.

## Описание
```lua
cartographer.GetMapMarkerObjects( zonesMapId: ObjectId, markerId: InterfaceMapMarkerId ): table
```
Функция формирует и возвращает индексированный с нуля список таблиц, содержащих описания объектов на карте. Каждая вложенная таблица включает глобальные координаты объекта и, при наличии полученных данных, информацию о геодате соответствующей зоны.

## Список параметров
- **`zonesMapId`** (`ObjectId`)
Идентификатор интерфейсной карты.
- **`markerId`** (`InterfaceMapMarkerId`)
Идентификатор ресурса маркера.

## Возвращаемые значения
Возвращает таблицу (`table`), содержащую вложенные таблицы с описаниями объектов. Индексация элементов начинается с нуля.

Структура вложенной таблицы:
- **`pos`** (`GamePosition`)
Глобальные координаты объекта.
- **`geodata`** (`table` | `nil`)
Таблица с данными геодаты зоны, если она была получена. В противном случае возвращает `nil`.

Поля таблицы `geodata`:
- `x` (`number`) - Мировая координата X точки левого нижнего угла карты.
- `y` (`number`) - Мировая координата Y точки левого нижнего угла карты.
- `width` (`number`) - Размер зоны по оси X в мировых единицах, охватываемой картой.
- `height` (`number`) - Размер зоны по оси Y в мировых единицах, охватываемой картой.

## Примеры
### Перебор всех маркеров и получение их объектов
```lua
local markers = cartographer.GetMapMarkers( zonesMapId )
for i, markerId in pairs( markers ) do
    local markerInfo = cartographer.GetMarkerInfo( markerId )
    local markerObjects = cartographer.GetMapMarkerObjects( zonesMapId, markerId )
end
```
::: info Описание примера
В примере сначала извлекается список всех маркеров на интерфейсной карте с помощью `cartographer.GetMapMarkers`. Затем в цикле перебирается каждый идентификатор маркера. Для каждого маркера запрашивается подробная информация через `cartographer.GetMarkerInfo` и извлекается список привязанных объектов с помощью `cartographer.GetMapMarkerObjects`.
:::

## Смотрите также
- [cartographer.GetMapMarkers](function.cartographer.GetMapMarkers)
- [cartographer.GetMarkerInfo](function.cartographer.GetMarkerInfo)