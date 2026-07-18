# cartographer.GetQuestGeodata
Извлекает и возвращает геодату, необходимую для проецирования реальных координат точки возвращения задания в координаты текстуры интерфейсной карты.

## Описание
```lua
cartographer.GetQuestGeodata( questId: QuestId, zonesMapId: ObjectId ): table | nil
```
Функция извлекает геодату, необходимую для проецирования реальных координат точки возвращения задания в координаты текстуры интерфейсной карты. Возвращает таблицу с данными геодаты или `nil` в случае возникновения ошибки. Дополнительные сведения о структуре геодаты см. в разделе Geodata.

## Список параметров
- **`questId`** (`QuestId`)
Уникальный идентификатор задания.
- **`zonesMapId`** (`ObjectId`)
Идентификатор интерфейсной карты зоны, для которой необходимо получить геодату.

## Возвращаемые значения
Возвращает `table` с информацией о геодате или `nil` в случае возникновения ошибки.
Структура возвращаемой таблицы:
- **`returnGeodata`** (`Geodata` | `nil`)
Геодата точки возвращения.

## Примеры
### Вычисление координат текстуры для точки возвращения задания
```lua
function GetTexturePos( pos, geoData )
    local pixelsPerMeterX = ( MAP_TEXTURE_X / geoData.width )
    local pixelsPerMeterY = ( MAP_TEXTURE_Y / geoData.height )
    local mapCenterX = geoData.x + ( geoData.width / 2 )
    local mapCenterY = geoData.y + ( geoData.height / 2 )

    local texturePosX = math.ceil( ( pos.posX - mapCenterX ) * pixelsPerMeterX )
    local texturePosY = math.ceil( ( mapCenterY - pos.posY ) * pixelsPerMeterY )

    return { x = texturePosX, y = texturePosY }
end

local geodata = cartographer.GetQuestGeodata( questId, currentZonesMapId )
if geodata then
    local goalPos = object.GetPos( unitId )
    if goalPos then
        local texturePos = GetTexturePos( goalPos, geodata.returnGeodata )
        -- Дальнейшее использование texturePos
    end
end
```
::: info Описание примера
В примере определяется вспомогательная функция `GetTexturePos` для перевода мировых координат в координаты текстуры. Затем запрашивается геодата точки возвращения задания через `cartographer.GetQuestGeodata`. Если геодата успешно получена, извлекаются мировые координаты цели с помощью `object.GetPos` и вычисляются итоговые координаты на текстуре карты.
:::

## Смотрите также
- [Geodata](Geodata)
- [object.GetPos](../object/function.object.GetPos)