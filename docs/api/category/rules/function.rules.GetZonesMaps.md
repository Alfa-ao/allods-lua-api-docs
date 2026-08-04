# rules.GetZonesMaps

Извлекает список идентификаторов интерфейсных карт, доступных в календаре.

## Описание

```lua
rules.GetZonesMaps(): table
```

Функция возвращает индексированную с 0 таблицу идентификаторов описателей интерфейсных карт зон, которые доступны в календаре.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - индексированная с 0 таблица идентификаторов (`ObjectId`) описателей интерфейсных карт зон.

## Примеры

### Получение информации о карте зон

```lua
local zonesMaps = rules.GetZonesMaps()
if zonesMaps[ 0 ] then
    local mapInfo = cartographer.GetZonesMapInfo( zonesMaps[ 0 ] )
end
```

::: info Описание примера
В примере запрашивается список идентификаторов интерфейсных карт. При наличии нулевого элемента в полученной таблице вызывается функция `cartographer.GetZonesMapInfo` для получения подробной информации о карте зон.
:::

## Смотрите также

- [cartographer.GetZonesMapInfo](/api/category/cartographer/function.cartographer.GetZonesMapInfo.md)