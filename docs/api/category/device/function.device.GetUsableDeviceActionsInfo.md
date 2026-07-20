# device.GetUsableDeviceActionsInfo
Возвращает информацию обо всех действиях устройства.

## Описание
```lua
device.GetUsableDeviceActionsInfo( usableDeviceId: ObjectId ): table|nil
```
Функция возвращает таблицу с информацией обо всех действиях указанного устройства. Структура таблицы с информацией о конкретном действии описана в функции `device.GetUsableDeviceActionInfo`.

## Список параметров
- **`usableDeviceId`** (`ObjectId`) - Идентификатор устройства.

## Возвращаемые значения
Возвращает `table` или `nil`.
Функция возвращает таблицу с информацией о действиях устройства или `nil`, если произошла ошибка.
- **Ключ** (`number`) - Индекс действия (начинается с `0`).
- **Значение** (`table`) - Таблица с информацией о действии.

## Примеры
### Получение списка действий устройства
```lua
local info = device.GetUsableDeviceInfo( usableDeviceId )

if info and info.actionsCount > 0 then
    LogInfo( "Action list: " )
    local actions = device.GetUsableDeviceActionsInfo( usableDeviceId )

    for i = 0, info.actionsCount do
        LogInfo( actions[i].name )
    end
else
    LogInfo( "No actions" )
end
```
::: info Описание примера
В примере запрашивается общая информация об устройстве. При наличии доступных действий извлекается список действий устройства посредством вызова `device.GetUsableDeviceActionsInfo`. Далее в цикле перебираются все действия и выводится их название в лог.
:::

## Смотрите также
- [device.GetUsableDeviceActionInfo](function.device.GetUsableDeviceActionInfo)
- [device.GetUsableDeviceInfo](function.device.GetUsableDeviceInfo)