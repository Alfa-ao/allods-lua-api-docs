# hangar.GetHullInfo
Извлекает информацию о корпусе корабля.

## Описание
```lua
hangar.GetHullInfo( hullId: VisualShipId ): table|nil
```
Функция извлекает и возвращает таблицу с информацией о корпусе корабля по заданному идентификатору. Если идентификатор некорректен, возвращается `nil`.

## Список параметров
- **`hullId`** (`VisualShipId`) - Идентификатор корпуса корабля.

## Возвращаемые значения
Возвращает `table` или `nil`.

Если идентификатор корректен, возвращается таблица со следующими полями:

- **`name`** (`WString`) - Локализованное название корпуса.

- **`description`** (`WString`) - Локализованное описание корпуса.

- **`image`** (`TextureId`) - Иконка корпуса (только для UIState).

## Примеры
### Получение информации о первом доступном корпусе
```lua
local hulls = hangar.GetAvailableHulls()
if hulls and hulls[0] then
    local hullInfo = hangar.GetHullInfo( hulls[0] )
end
```
::: info Описание примера
В примере извлекается список доступных корпусов. При наличии хотя бы одного элемента в списке, запрашивается подробная информация о первом корпусе (с индексом 0) с помощью функции `hangar.GetHullInfo`.
:::

## Смотрите также
- [hangar.GetActiveShipHull](function.hangar.GetActiveShipHull)
- [hangar.GetAvailableHulls](function.hangar.GetAvailableHulls)