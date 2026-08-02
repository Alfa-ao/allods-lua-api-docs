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

- [device.NavigatorSetTarget](/api/category/device/function.device.NavigatorSetTarget.md)
- [EVENT_TRANSPORT_OBSERVING_STARTED](/api/events/events.EVENT_TRANSPORT_.md#event-transport-observing-started)
- [EVENT_TRANSPORT_OBSERVING_FINISHED](/api/events/events.EVENT_TRANSPORT_.md#event-transport-observing-finished)