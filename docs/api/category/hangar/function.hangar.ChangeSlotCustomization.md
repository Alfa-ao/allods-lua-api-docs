# hangar.ChangeSlotCustomization
Устанавливает устройство в слот визуальной кастомизации корабля главного игрока в ангаре.

## Описание

```lua
hangar.ChangeSlotCustomization( slotId: ObjectId, deviceId: ObjectId | nil )
```

Осуществляет установку устройства в слот визуальной кастомизации корабля главного игрока в ангаре.

## Список параметров

- **`slotId`** (`ObjectId`) - Идентификатор слота для кастомизации.

- **`deviceId`** (`ObjectId` | `nil`) - Идентификатор устройства для кастомизации или `nil`, если необходимо снять устройство с данного слота.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Установка и снятие устройства кастомизации

```lua
local slots = hangar.GetCustomizationSlots()

if slots and slots[ 0 ] then
    local devices = hangar.GetCustomizationSlotDevices( slots[ 0 ] )
    if devices[ 0 ] then
        hangar.ChangeSlotCustomization( slots[ 0 ], devices[ 0 ] )
    end
end

if slots and slots[ 1 ] then
    hangar.ChangeSlotCustomization( slots[ 1 ], nil )
end
```

::: info Описание примера
В примере выполняется получение списка слотов кастомизации. Для первого слота извлекаются доступные устройства, и при их наличии устанавливается первое устройство. Для второго слота выполняется снятие устройства путем передачи значения `nil`.
:::

## Смотрите также
- [hangar.GetCustomizationSlots](function.hangar.GetCustomizationSlots)
- [hangar.GetCustomizationSlotDevices](function.hangar.GetCustomizationSlotDevices)