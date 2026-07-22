# itemLib.GetStackInfo
Извлекает информацию о стеке предмета.

## Описание
```lua
itemLib.GetStackInfo( itemId: ObjectId ): table | nil
```
Функция извлекает и возвращает таблицу с информацией о количестве и максимальном лимите предметов в стеке. Если предмет не найден, функция возвращает `nil`.

## Список параметров

- **`itemId`** (`ObjectId`) - уникальный идентификатор предмета.

## Возвращаемые значения
Возвращает `table` | `nil` - таблицу с информацией о стеке:

- **`count`** (`number`) - количество предметов в пачке.

- **`limit`** (`number`) - максимальное количество предметов в пачке.

или `nil`, если предмет не найден.

## Примеры
### Получение количества предметов в стеке
```lua
local itemStack = itemLib.GetStackInfo( itemId )
local itemStackCount = itemStack and itemStack.count
```

## Смотрите также
- [itemLib.GetOverallStackCount](function.itemLib.GetOverallStackCount)