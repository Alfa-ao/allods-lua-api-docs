# avatar.GetObservedAstralUnit
Возвращает идентификатор астрального юнита, просматриваемого через навигационное устройство корабля.

## Описание
```lua
avatar.GetObservedAstralUnit(): ObjectId | nil
```
Функция возвращает идентификатор астрального моба, на который наведен курсор навигационного устройства корабля главного игрока. Если навигатор не просматривает астрального моба или он не найден, возвращается `nil`. Навигатор может одновременно просматривать либо транспорт, либо астрального моба.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `ObjectId` — идентификатор просматриваемого астрального моба, или `nil`, если астральный моб не просматривается или не найден.

## Примеры
### Проверка просматриваемого объекта навигатором
```lua
local unitId = avatar.GetObservedAstralUnit()
local transportId = avatar.GetObservedTransport()
if unitId then
    local name = object.GetName( unitId )
elseif transportId then
    local name = object.GetName( transportId )
end
```
::: info Описание примера
В примере сначала извлекаются идентификаторы просматриваемого астрального моба и транспорта с помощью функций `avatar.GetObservedAstralUnit` и `avatar.GetObservedTransport`. Затем проверяется наличие идентификатора астрального моба. Если он существует, извлекается его имя через `object.GetName`. В противном случае проверяется наличие идентификатора транспорта и аналогичным образом извлекается его имя.
:::

## Смотрите также
- [avatar.GetObservedTransport](avatar.GetObservedTransport)
- [EVENT_TRANSPORT_OBSERVING_STARTED](events.transport#event-transport-observing-started)
- [EVENT_TRANSPORT_OBSERVING_FINISHED](events.transport#event-transport-observing-finished)