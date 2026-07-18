# cartographer.GetQuestObjectiveGeodata
Возвращает таблицу геодат для проецирования реальных координат точек цели задания в координаты текстуры интерфейсной карты.

## Описание
```lua
cartographer.GetQuestObjectiveGeodata( objectiveId: QuestId, zonesMapId: ObjectId ): table | nil
```
Функция извлекает и возвращает индексированную с нуля таблицу геодат, необходимых для проецирования реальных координат точек заданной цели задания в координаты заданной текстуры интерфейсной карты. Индекс каждой возвращаемой геодаты строго соответствует индексам точек из таблицы `locations`, получаемой через метод `avatar.GetQuestObjectiveInfo`. Если для определенных точек геодата отсутствует, по соответствующим индексам в возвращаемой таблице записывается значение `nil`. В случае, если геодата не найдена ни для одной точки, возвращается пустая таблица. При возникновении ошибки функция возвращает `nil`.

## Список параметров
- **`objectiveId`** (`QuestId`)
Идентификатор цели задания.
- **`zonesMapId`** (`ObjectId`)
Идентификатор интерфейсной карты зоны, для которой требуется получить геодату.

## Возвращаемые значения
Возвращает таблицу (`table`), индексированную с нуля, содержащую геодаты, соответствующие точкам из `avatar.GetQuestObjectiveInfo( objectiveId ).locations`, или `nil` в случае возникновения ошибки.

## Примеры
### Проецирование координат точек цели задания на текстуру карты
```lua
local function GetTexturePos( pos, geodata )
    local pixelsPerMeterX = ( MAP_TEXTURE_X / geodata.width )
    local pixelsPerMeterY = ( MAP_TEXTURE_Y / geodata.height )
    local mapCenterX = geodata.x + ( geodata.width / 2 )
    local mapCenterY = geodata.y + ( geodata.height / 2 )

    local texturePosX = math.ceil( ( pos.posX - mapCenterX ) * pixelsPerMeterX )
    local texturePosY = math.ceil( ( mapCenterY - pos.posY ) * pixelsPerMeterY )

    return { x = texturePosX, y = texturePosY }
end

local objectiveId = 12345 -- Идентификатор цели задания
local currentZonesMapId = 67890 -- Идентификатор интерфейсной карты зоны

local questObjective = avatar.GetQuestObjectiveInfo( objectiveId )
local geodatas = cartographer.GetQuestObjectiveGeodata( objectiveId, currentZonesMapId )

if geodatas and questObjective then
    for index = 0, GetTableSize( questObjective.locations ) - 1 do
        local location = questObjective.locations[ index ]
        local geodata = geodatas[ index ]
        
        if geodata then
            local texturePos = GetTexturePos( location.position, geodata )
            -- Дальнейшее использование texturePos.x и texturePos.y для отрисовки
        else
            LogInfo( "Нет такой точки на текущей карте" )
        end
    end
end
```
::: info Описание примера
В примере определяется вспомогательная функция `GetTexturePos` для математического перевода реальных координат в пиксельные координаты текстуры. Далее запрашивается информация о цели задания через `avatar.GetQuestObjectiveInfo` и таблица геодат через `cartographer.GetQuestObjectiveGeodata`. При успешном получении данных происходит перебор точек цели, и для каждой точки, имеющей соответствующую геодату, вычисляются итоговые координаты на текстуре карты.
:::

## Смотрите также
- [Geodata](Geodata)
- [avatar.GetQuestObjectiveInfo](../avatar/function.avatar.GetQuestObjectiveInfo)