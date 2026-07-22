# itemLib.GetUsageOnItemInfo

Возвращает информацию об использовании предмета на другой предмет.

## Описание

```lua
itemLib.GetUsageOnItemInfo( itemId: ObjectId, targetItemId: ObjectId ): table | nil
```

Функция возвращает таблицу с данными о расходе предметов при использовании одного предмета на другой.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

- **`targetItemId`** (`ObjectId`) - Идентификатор целевого предмета.

## Возвращаемые значения

Возвращает `table` | `nil`, описание о таблице:

- **`consumeUsedItem`** (`number` | `nil`) - Количество потребляемых используемых предметов.

- **`consumeTargetItem`** (`number` | `nil`) - Количество потребляемых предметов, на которых используется.

## Примеры

### Получение информации об использовании предмета

```lua
local itemUsageOnItemInfo = itemLib.GetUsageOnItemInfo( itemId, targetItemId )
```