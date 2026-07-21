# hangar.GetDeviceInfo

Возвращает информацию по устройству, находящемуся в ангаре.

## Описание

```lua
hangar.GetDeviceInfo( deviceId: ObjectId ): table|nil
```

Функция возвращает таблицу с информацией об указанном устройстве, находящемся в ангаре. Если устройство не найдено, возвращается `nil`.

## Список параметров

- **`deviceId`** (`ObjectId`) - Идентификатор устройства.

## Возвращаемые значения

Возвращает `table` или `nil`.

Если устройство найдено, возвращается таблица со следующими полями:

- **`id`** (`ObjectId`) - Идентификатор устройства.
- **`name`** (`WString`) - Имя устройства.
- **`description`** (`ValuedText` | `nil`) - Описание с подставленными текущими значениями параметров.
- **`sysDebugName`** (`string` | `nil`) - Дебажный идентификатор ресурса или `nil` для финальной версии.
- **`image`** (`TextureId`) - Идентификатор иконки устройства.
- **`mass`** (`number`) - Масса устройства.
- **`count`** (`number`) - Количество таких устройств в ангаре.
- **`quality`** (`number` | `ITEM_QUALITY`) - Качество предмета.
- **`type`** (`number`(`USDEV_...`)) - Тип устройства.
- **`techLevel`** (`number`) - Технический уровень устройства.
- **`category`** (`WString` | `nil`) - Название категории устройства, если она задана.
- **`sysCategoryName`** (`string` | `nil`) - Системное уникальное название категории устройств.

## Примеры

### Получение информации об устройствах в ангаре

```lua
local devices = hangar.GetDevices()
if devices then
    for i, deviceId in pairs( devices ) do
        local deviceInfo = hangar.GetDeviceInfo( deviceId )
        if deviceInfo then
            local name = deviceInfo.name
        end
    end
end
```

::: info Описание примера
В примере запрашивается список всех устройств в ангаре. Если список получен, в цикле перебираются идентификаторы устройств, и для каждого извлекается подробная информация. Из полученной таблицы считывается имя устройства.
:::

## Смотрите также

- [hangar.GetDevices](function.hangar.GetDevices)
- [ITEM_QUALITY_...](dfsgsdfg)
- [USDEV_...](dfgssdfg)