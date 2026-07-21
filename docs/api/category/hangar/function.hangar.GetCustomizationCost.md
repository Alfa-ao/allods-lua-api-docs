# hangar.GetCustomizationCost
Возвращает информацию о цене текущего устройства в заданном слоте.

## Описание
```lua
hangar.GetCustomizationCost( slotId: ObjectId ): number
```
Функция возвращает информацию о цене текущего устройства в заданном слоте. Получение стоимости возможно только после начала процесса кастомизации.

## Список параметров
- **`slotId`** (`ObjectId`) - Идентификатор слота для кастомизации.

## Возвращаемые значения
Возвращает `number` - стоимость текущего устройства в заданном слоте.

## Примеры
### Получение стоимости кастомизации для всех слотов
```lua
local slots = hangar.GetCustomizationSlots()
if slots then
    for i, slotId in pairs( slots ) do
        local cost = hangar.GetCustomizationCost( slotId )
    end
end
```
::: info Описание примера
В примере извлекается список слотов для кастомизации. Если список получен, происходит итерация по нему с помощью цикла. Для каждого слота вычисляется стоимость текущего устройства.
:::

## Смотрите также
- [hangar.GetCustomizationSlots](function.hangar.GetCustomizationSlots)