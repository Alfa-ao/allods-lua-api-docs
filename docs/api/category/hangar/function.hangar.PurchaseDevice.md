# hangar.PurchaseDevice
Покупает корабельное устройство, находясь в ангаре в режиме замены.

## Описание
```lua
hangar.PurchaseDevice( deviceId: ObjectId )
```
Функция покупает корабельное устройство, находясь в ангаре в режиме замены. Идентификатор устройства должен быть одним из значений, возвращенных функцией `hangar.GetAllowedDeviceTypes`.

## Список параметров
- **`deviceId`** (`ObjectId`) - Идентификатор устройства, один из возвращенных `hangar.GetAllowedDeviceTypes`.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Покупка корабельного устройства
```lua
hangar.PurchaseDevice( allowedDeviceId )
```

## Смотрите также
- [hangar.GetAllowedDeviceTypes](function.hangar.GetAllowedDeviceTypes)