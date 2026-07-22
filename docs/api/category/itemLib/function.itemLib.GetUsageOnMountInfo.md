# itemLib.GetUsageOnMountInfo
Возвращает информацию об использовании предмета на маунте.

## Описание
```lua
itemLib.GetUsageOnMountInfo( itemId: ObjectId, mountId: ObjectId ): table
```
Функция возвращает таблицу с информацией об использовании предмета на маунте.

## Список параметров
- **`itemId`** (`ObjectId`) - идентификатор предмета.

- **`mountId`** (`ObjectId`) - идентификатор маунта.

## Возвращаемые значения
Возвращает `table` - таблица с полями:

- **`consumeUsedItem`** (`number` | `nil`) - количество потребляемых используемых предметов.

- **`sysName`** (`string` | `nil`) - служебное название действия.

- **`warningUseText`** (`WString` | `nil`) - предупреждение об использовании.

## Примеры
### Получение информации об использовании
```lua
local itemUsageOnMountInfo = itemLib.GetUsageOnMountInfo( itemId, mountId )
```