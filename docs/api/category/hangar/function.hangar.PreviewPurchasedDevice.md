# hangar.PreviewPurchasedDevice
Запускает предпросмотр устройства в ангаре в режиме замены.

## Описание
```lua
hangar.PreviewPurchasedDevice( deviceId: ObjectId )
```
Функция инициирует отображение выбранного устройства в ангаре перед его покупкой, находясь в режиме замены. Идентификатор устройства должен быть получен из списка, возвращаемого функцией `hangar.GetAllowedDeviceTypes()`.

## Список параметров
- **`deviceId`** (`ObjectId`) - Уникальный идентификатор устройства, доступного для замены.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Предпросмотр доступного устройства
```lua
local allowedDeviceTypes = hangar.GetAllowedDeviceTypes()
if allowedDeviceTypes and #allowedDeviceTypes > 0 then
    hangar.PreviewPurchasedDevice( allowedDeviceTypes[1] )
end
```
::: info Описание примера
В примере запрашивается список доступных для замены устройств. Если список не пуст, производится предпросмотр первого устройства из полученного массива.
:::

## Смотрите также
- [hangar.GetAllowedDeviceTypes](function.hangar.GetAllowedDeviceTypes)