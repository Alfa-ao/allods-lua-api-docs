# device.NavigatorGetTarget
Возвращает цель устройства-навигатора корабля главного игрока.

## Описание
```lua
device.NavigatorGetTarget(): ObjectId | nil
```
Функция возвращает идентификатор транспорта или астрального юнита, или `nil`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения

Возвращает `ObjectId` идентификатор транспорта или астрального юнита, или `nil`.

## Примеры
### Получение цели навигатора
```lua
local targetId = device.NavigatorGetTarget()
```

## Смотрите также
- [device.NavigatorSetTarget](function.device.NavigatorSetTarget)
- [EVENT_TRANSPORT_OBSERVING_STARTED](events.transport#event-transport-observing-started)
- [EVENT_TRANSPORT_OBSERVING_FINISHED](events.transport#event-transport-observing-finished)