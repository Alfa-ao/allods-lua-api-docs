# itemLib.GetClassInfo
Извлекает информацию о классе предмета по идентификатору класса.

## Описание
```lua
itemLib.GetClassInfo( itemClassId: ItemClassId ): table|nil
```
Функция извлекает и возвращает таблицу с информацией о классе предмета по его идентификатору. Если класс не найден, возвращается `nil`.

## Список параметров
- **`itemClassId`** (`ItemClassId`) - Идентификатор класса предмета.

## Возвращаемые значения
Возвращает `table` | `nil`.
При успешном получении информации возвращается таблица со следующими полями:
- **`name`** (`WString`) - Имя класса предмета.

- **`sysName`** (`string` | `nil`) - Системное имя (если есть).

- **`debugName`** (`string` | `nil`) - Путь к файлу описания класса предмета (отладочная информация).

## Примеры
### Получение информации о классе предмета
```lua
local itemClassId = itemLib.GetClass( itemId )
if itemClassId then
    local itemClassInfo = itemLib.GetClassInfo( itemClassId )
    if itemClassInfo then
        local itemClassName = itemClassInfo.name
    end
end
```
::: info Описание примера
В примере сначала извлекается идентификатор класса предмета по его `itemId` с помощью функции `itemLib.GetClass`. Если идентификатор успешно получен, вызывается функция `itemLib.GetClassInfo` для получения таблицы с информацией о классе. При успешном возврате таблицы из неё извлекается имя класса.
:::

## Смотрите также
- [itemLib.GetClass](function.itemLib.GetClass)