# cartographer.GetZonesMapId
Возвращает идентификатор интерфейсной карты зоны по уникальному имени.

## Описание
```lua
cartographer.GetZonesMapId( sysName: string ): ObjectId | nil
```
Функция извлекает и возвращает идентификатор интерфейсной карты зоны, используя её уникальное системное имя. Если карта с указанным именем не найдена, функция возвращает `nil`.

## Список параметров
- **`sysName`** (`string`)
Уникальное системное имя карты зоны.

## Возвращаемые значения
Возвращает `ObjectId` — идентификатор интерфейсной карты, если она найдена, или `nil`, если карта с указанным именем не существует.

## Примеры
### Получение и установка текстуры карты зоны
```lua
local zonesMapId = cartographer.GetZonesMapId( "ZoneLeague1" )
if zonesMapId then
    local zonesMapInfo = cartographer.GetZonesMapInfo( zonesMapId )
    if zonesMapInfo then
        wtMap:SetBackgroundTexture( zonesMapInfo.texture )
    end
end
```
::: info Описание примера
В примере запрашивается идентификатор интерфейсной карты для зоны "ZoneLeague1". Если карта найдена, извлекается подробная информация о ней с помощью `cartographer.GetZonesMapInfo`. При успешном получении информации, текстура карты устанавливается в качестве фона для виджета через метод `SetBackgroundTexture`.
:::

## Смотрите также
- [cartographer.GetZonesMapInfo](cartographer.GetZonesMapInfo)