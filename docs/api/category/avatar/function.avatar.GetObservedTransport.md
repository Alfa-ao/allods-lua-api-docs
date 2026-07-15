# avatar.GetObservedTransport

Возвращает идентификатор транспортного средства, просматриваемого через навигационное устройство корабля.

## Описание

```lua
avatar.GetObservedTransport(): ObjectId | nil
```

Функция возвращает идентификатор (`ObjectId`) транспортного средства, на которое навигатор корабля главного игрока сфокусировался с помощью навигационного устройства, или `nil`, если просмотр не осуществляется. У просматриваемого транспорта становится доступна информация по его устройствам. При начале и завершении процесса просмотра транспорта передаются события `EVENT_TRANSPORT_OBSERVING_STARTED` и `EVENT_TRANSPORT_OBSERVING_FINISHED` соответственно. Навигатор может одновременно просматривать либо транспорт, либо астрального моба.

::: warning Замечание
Навигатор может одновременно просматривать либо транспорт, либо астрального моба. Для получения информации об астральном мобе используется функция `avatar.GetObservedAstralUnit`.
:::

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения

- **`ObjectId`** | **`nil`** — идентификатор просматриваемого транспортного средства. Если навигатор не просматривает транспорт или транспорт не найден, возвращается `nil`.

## Примеры

### Получение информации о просматриваемом транспорте

```lua
local transportId = avatar.GetObservedTransport()
if transportId then
    local energy = object.GetTransportEnergy( transportId )
end
```

::: info Описание примера
В примере извлекается идентификатор просматриваемого транспортного средства. При успешном получении идентификатора вызывается функция `object.GetTransportEnergy` для определения уровня энергии транспорта.
:::

## Смотрите также

- [avatar.GetObservedAstralUnit](avatar.GetObservedAstralUnit)
- [EVENT_TRANSPORT_OBSERVING_STARTED](events.transport#event-transport-observing-started)
- [EVENT_TRANSPORT_OBSERVING_FINISHED](events.transport#event-transport-observing-finished)