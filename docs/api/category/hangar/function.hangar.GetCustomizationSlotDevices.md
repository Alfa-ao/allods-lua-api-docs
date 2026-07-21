# hangar.GetCustomizationSlotDevices
Возвращает список идентификаторов устройств для кастомизации определённого слота корабля, имеющихся в ангаре.

## Описание
```lua
hangar.GetCustomizationSlotDevices( slotId: ObjectId ): table
```
Функция возвращает индексированный с 1 список идентификаторов устройств, находящихся в ангаре и предназначенных для кастомизации указанного слота корабля.

::: warning Замечание
Получение информации по устройствам возможно только после начала процесса кастомизации.
:::

## Список параметров
- **`slotId`** (`ObjectId`) - Идентификатор слота для кастомизации.

## Возвращаемые значения
Возвращает `table` - индексированный с 1 список идентификаторов устройств, находящихся в ангаре.

## Примеры
### Получение устройств кастомизации для всех доступных слотов
```lua
if hangar.CanCustomize() then
    for i, slotId in ipairs( hangar.GetCustomizationSlots() ) do
        local devices = hangar.GetCustomizationSlotDevices( slotId )
        if devices[ 1 ] then
            local firstDeviceInfo = hangar.GetDeviceInfo( devices[ 1 ] )
        end
    end
end
```

::: info Описание примера
В примере проверяется возможность кастомизации с помощью `hangar.CanCustomize`. При положительном результате осуществляется обход всех доступных слотов, полученных через `hangar.GetCustomizationSlots`. Для каждого слота извлекается список устройств функцией `hangar.GetCustomizationSlotDevices`. При наличии хотя бы одного устройства запрашивается подробная информация о первом элементе списка посредством вызова `hangar.GetDeviceInfo`.
:::

## Смотрите также
- [hangar.CanCustomize](function.hangar.CanCustomize)
- [hangar.GetCustomizationSlots](function.hangar.GetCustomizationSlots)
- [hangar.GetDeviceInfo](function.hangar.GetDeviceInfo)