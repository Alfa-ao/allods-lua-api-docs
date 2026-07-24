# transport.GetDevices

Возвращает список идентификаторов используемых устройств транспортного средства.

## Описание

```lua
transport.GetDevices( transportId: ObjectId ): table
```

Функция извлекает и возвращает список идентификаторов используемых устройств транспортного средства. В случае если транспортное средство не найдено, возвращается пустая таблица.

## Список параметров

- **`transportId`** (`ObjectId`) - Идентификатор транспортного средства.

## Возвращаемые значения

Возвращает `table` - таблица, индексированная с 1, содержащая идентификаторы (`ObjectId`) используемых устройств. В случае ошибки или если транспорт не найден, возвращается пустая таблица.

## Примеры

### Получение и перебор устройств транспорта

```lua
local transportId = unit.GetTransport( avatar.GetId() )
if transportId then
    for _, deviceId in ipairs( transport.GetDevices( transportId ) ) do
        local name = device.GetName( deviceId )
    end
end
```

::: info Описание примера
В примере сначала получается идентификатор транспортного средства, на котором находится главный персонаж. Если транспорт существует, выполняется перебор всех его устройств с помощью цикла. Для каждого устройства извлекается его название.
:::

## Смотрите также

- [unit.GetTransport](../unit/function.unit.GetTransport)
- [avatar.GetId](../avatar/function.avatar.GetId)
- [device.GetName](../device/function.device.GetName)