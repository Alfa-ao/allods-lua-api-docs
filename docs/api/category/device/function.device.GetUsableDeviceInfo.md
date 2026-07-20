# device.GetUsableDeviceInfo
Возвращает информацию об устройстве, например корабельном.

## Описание

```lua
device.GetUsableDeviceInfo( usableDeviceId: ObjectId ): table|nil
```

Функция возвращает таблицу с информацией об устройстве или `nil`, если произошла ошибка.

## Список параметров

- **`usableDeviceId`** (`ObjectId`) - Идентификатор устройства. Не может быть `nil`.

## Возвращаемые значения

Возвращает `table` или `nil`.

Если информация успешно получена, возвращается таблица со следующими полями:

- **`id`** (`ObjectId`) - Идентификатор объекта устройства.

- **`type`** (`number`) - Тип устройства (перечисление `USDEV_*`).

- **`name`** (`WString`) - Название устройства.

- **`hasCrosshair`** (`boolean`) - Флаг необходимости показа прицела при использовании устройства.

- **`actionsCount`** (`number`) - Количество действий у устройства.

## Примеры

### Получение информации и списка действий устройства

```lua
local info = device.GetUsableDeviceInfo( usableDeviceId )

if info and info.actionsCount > 0 then
    LogInfo( "Action list:" )
    local actions = device.GetUsableDeviceActionsInfo( usableDeviceId )

    for i = 0, info.actionsCount do
        LogInfo( actions[i].name )
    end
else
    LogInfo( "No actions" )
end
```

::: info Описание примера
В примере запрашивается информация об устройстве по его идентификатору. Если устройство найдено и имеет доступные действия, выводится заголовок списка, извлекается информация о действиях посредством вызова `device.GetUsableDeviceActionsInfo`, и в цикле выводятся их названия. В противном случае выводится сообщение об отсутствии действий.
:::

## Смотрите также
- [device.GetUsableDeviceActionsInfo](function.device.GetUsableDeviceActionsInfo)