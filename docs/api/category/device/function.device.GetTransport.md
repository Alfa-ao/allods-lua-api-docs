# device.GetTransport

Возвращает id транспорта(корабля), на котором расположено используемое устройство.

## Описание

```lua
device.GetTransport( usableDeviceId: ObjectId ): ObjectId | nil
```

Если устройство не найдено или не является UsableDevice, то бросается исключение и возвращается nil. Если устройство не находится на корабле, то возвращается nil без каких-либо ошибок.

## Список параметров

- **`usableDeviceId`** (`ObjectId`) - Идентификатор устройства. Не может быть `nil`.

## Возвращаемые значения

Возвращает `ObjectId` или `nil` - идентификатор транспорта.

## Примеры

### Получение здоровья транспорта

```lua
local transportId = device.GetTransport( usableDeviceId )
if transportId then
    local health = transport.GetHealth( transportId )
end
```

::: info Описание примера
В примере запрашивается идентификатор транспорта для указанного устройства. Если транспорт успешно найден, извлекается значение его здоровья с помощью функции `transport.GetHealth`.
:::

## Смотрите также

- [transport.GetHealth](function.transport.GetHealth)