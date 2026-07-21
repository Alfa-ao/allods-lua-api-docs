# hangar.ReplaceDevice

Заменяет корабельное устройство, находясь в ангаре в режиме замены.

## Описание

```lua
hangar.ReplaceDevice( deviceId: ObjectId )
```

Функция заменяет корабельное устройство, находясь в ангаре в режиме замены. Идентификатор устройства должен быть одним из значений, возвращенных функцией `hangar.GetSlotDevices()`.

## Список параметров

- **`deviceId`** (`ObjectId`) - Идентификатор устройства, один из возвращенных функцией `hangar.GetSlotDevices()`.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Замена устройства в ангаре

```lua
local devices = hangar.GetSlotDevices()
if devices and devices[0] then
    hangar.ReplaceDevice( devices[0] )
end
```

::: info Описание примера

В примере запрашивается список устройств в текущем слоте. При наличии хотя бы одного устройства выполняется его замена путем передачи идентификатора нулевого элемента массива в функцию `hangar.ReplaceDevice()`.

:::

## Смотрите также

- [hangar.GetSlotDevices](function.hangar.GetSlotDevices)