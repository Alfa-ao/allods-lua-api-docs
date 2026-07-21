# hangar.GetCustomizationSlots
Возвращает список слотов для визуальной кастомизации корабля в ангаре главного игрока.

## Описание
```lua
hangar.GetCustomizationSlots(): table
```
Функция возвращает индексированную с 1 таблицу идентификаторов слотов для визуальной кастомизации. Получение данных возможно только после начала процесса кастомизации.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` - индексированная с 1 таблица идентификаторов слотов (`ObjectId`).

## Примеры
### Итерация по доступным слотам кастомизации
```lua
if hangar.CanCustomize() then
    for i, slotId in ipairs( hangar.GetCustomizationSlots() ) do
        local slotInfo = hangar.GetCustomizationSlotInfo( slotId )
    end
end
```
::: info Описание примера
В примере проверяется возможность кастомизации корабля. Если процесс доступен, выполняется итерация по списку идентификаторов слотов. Для каждого слота запрашивается подробная информация.
:::

## Смотрите также
- [hangar.CanCustomize](function.hangar.CanCustomize)
- [hangar.GetCustomizationSlotInfo](function.hangar.GetCustomizationSlotInfo)