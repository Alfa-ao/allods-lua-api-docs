# cartographer.GetObjectGeodata
Возвращает геодату для проецирования координат интерактивного объекта в координаты текстуры интерфейсной карты.

## Описание
```lua
cartographer.GetObjectGeodata( objectId: ObjectId, zonesMapId: ObjectId|nil ): table|nil
```
Функция извлекает и возвращает геодату, если интерактивный объект с заданным идентификатором находится в зоне, принадлежащей указанной интерфейсной карте. Если объект не находится в этих зонах, геодата не может быть получена и возвращается `nil`. Получение данных доступно только для главного игрока, членов его группы и рейда, а также для объектов, обнаруженных детекторами.

::: tip Совет
Подробнее о структуре возвращаемых данных см. в описании Geodata.
:::

## Список параметров
- **`objectId`** (`ObjectId`)
Идентификатор интерактивного объекта.
- **`zonesMapId`** (`ObjectId` | `nil`)
Идентификатор интерфейсной карты зоны, для которой требуется получить геодату. Если передано значение `nil`, используется зона, в которой находится объект.

## Возвращаемые значения
Возвращает таблицу (`table`) с геодатой или `nil`, если объект не находится в заданных зонах.

## Примеры
### Вычисление позиции объекта на текстуре карты
```lua
local geodata = cartographer.GetObjectGeodata( objectId, currentZonesMapId )
if geodata then
    local pos = object.GetPos( unitId )
    if pos then
        local pixelsPerMeterX = ( MAP_TEXTURE_X / geodata.width )
        local pixelsPerMeterY = ( MAP_TEXTURE_Y / geodata.height )
        local mapCenterX = geodata.x + ( geodata.width / 2 )
        local mapCenterY = geodata.y + ( geodata.height / 2 )

        texturePosX = math.ceil( ( pos.posX - mapCenterX ) * pixelsPerMeterX )
        texturePosY = math.ceil( ( mapCenterY - pos.posY ) * pixelsPerMeterY )
    end
end
```
::: info Описание примера
В примере сначала извлекается геодата для указанного объекта. Если данные успешно получены, запрашивается мировая позиция объекта через `object.GetPos`. Далее вычисляются координаты на текстуре карты относительно её центра с использованием математических функций и масштаба пикселей на метр.
:::

## Смотрите также
- [Geodata](Geodata)