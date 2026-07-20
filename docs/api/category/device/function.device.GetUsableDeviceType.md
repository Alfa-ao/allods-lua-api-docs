# device.GetUsableDeviceType

Возвращает тип используемого устройства.

## Описание

```lua
device.GetUsableDeviceType( usableDeviceId: ObjectId ): number
```

Функция возвращает тип используемого устройства (например, пушку на корабле). Если устройство не найдено или оно не используемое, функция возвращает `USDEV_NOT_USABLE_DEVICE`.

## Список параметров

- **`usableDeviceId`** (`ObjectId`) - Идентификатор устройства.

## Возвращаемые значения

- **`deviceType`** (`number`) - Тип используемого устройства. Перечисление `USDEV_...`.

## Примеры

### Получение типа устройства

```lua
local type = device.GetUsableDeviceType( usableDeviceId )
```

## Смотрите также

- [USDEV_*](sdfsdf)