# itemLib.GetCountInfo

Извлекает информацию о количестве зарядов в предмете.

## Описание

```lua
itemLib.GetCountInfo( itemId: ObjectId ): table | nil
```

Функция извлекает и возвращает таблицу с информацией о количестве зарядов в указанном предмете. Если информация недоступна, возвращается `nil`.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица с информацией о зарядах предмета или `nil`, если данные недоступны.

- **`count`** (`number`) - Количество зарядов в предмете.

- **`limit`** (`number`) - Максимальное количество зарядов, возможное для предмета.

## Примеры

### Получение количества зарядов предмета

```lua
local itemCharges = itemLib.GetCountInfo( itemId )
local itemChargesCount = itemCharges and itemCharges.count
```

## Смотрите также

- [itemLib.GetStackInfo](function.itemLib.GetStackInfo)
- [itemLib.GetOverallCount](function.itemLib.GetOverallCount)