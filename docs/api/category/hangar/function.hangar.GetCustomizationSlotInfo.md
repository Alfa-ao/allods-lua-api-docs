# hangar.GetCustomizationSlotInfo

Возвращает информацию о слоте для визуальной кастомизации корабля в ангаре главного игрока.

## Описание

```lua
hangar.GetCustomizationSlotInfo( slotId: ObjectId ): table|nil
```

Функция возвращает информацию о слоте, доступную только после начала процесса кастомизации. Информацию по устройствам можно получить посредством вызова `hangar.GetDeviceInfo`.

::: info Перечисление
- `ENUM_Slot_Sails_01`
- `ENUM_Slot_Emblem_01`
- `ENUM_Slot_Decor_01`
- `ENUM_Slot_HullColor_01`
:::

## Список параметров

- **`slotId`** (`ObjectId`) - Идентификатор слота для кастомизации.

## Возвращаемые значения

Возвращает `table` или `nil`.

Если слот найден, возвращается таблица со следующими полями:

- **`id`** (`ObjectId`) - Идентификатор слота для кастомизации.

- **`sysName`** (`string`(`ENUM_Slot_*`)) - Системное имя слота.

- **`currentDeviceId`** (`ObjectId` | `nil`) - Идентификатор текущего поставленного в этот слот устройства в процессе кастомизации, находящегося в ангаре.

- **`initialDeviceId`** (`ObjectId` | `nil`) - Идентификатор действительного поставленного в этот слот устройства на реальном корабле, находящегося в ангаре.

## Примеры

### Получение информации о слотах кастомизации

```lua
local slots = hangar.GetCustomizationSlots()
if slots then
    for i, slotId in pairs( slots ) do
        local slotInfo = hangar.GetCustomizationSlotInfo( slotId )
        if slotInfo and slotInfo.currentDeviceId then
            local currentDeviceInfo = hangar.GetDeviceInfo( slotInfo.currentDeviceId )
        end
    end
end
```

::: info Описание примера

В примере извлекается список идентификаторов слотов кастомизации. Для каждого слота запрашивается подробная информация. Если слот содержит текущее устройство, извлекаются данные об этом устройстве посредством вызова `hangar.GetDeviceInfo`.

:::

## Смотрите также

- [hangar.GetDeviceInfo](function.hangar.GetDeviceInfo)
- [hangar.GetCustomizationSlots](function.hangar.GetCustomizationSlots)