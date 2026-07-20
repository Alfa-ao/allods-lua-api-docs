# device.GetCannonTarget
Возвращает цель пушки.

## Описание
```lua
device.GetCannonTarget( cannonDeviceId: ObjectId ): ObjectId|nil
```
Цель становится известна в момент выстрела и доступна только во время полета снаряда до цели. В остальное время цель не известна и функция возвращает `nil`.

## Список параметров
- **`cannonDeviceId`** (`ObjectId`) - Идентификатор устройства.

## Возвращаемые значения
Возвращает `ObjectId` или `nil`.
- **`result`** (`ObjectId` | `nil`) - Идентификатор цели (интерактивный объект).

## Примеры
### Получение цели пушки
```lua
local id = device.GetCannonTarget( deviceId )
```