# itemLib.GetOverallStackCount
Возвращает суммарное количество всех подобных предметов у игрока в сумке и в инвентаре с учётом количеств в пачках.

## Описание
```lua
itemLib.GetOverallStackCount( itemId: ObjectId ): integer
```
Функция возвращает суммарное количество всех подобных предметов у игрока в сумке и в инвентаре с учётом количеств в пачках. Предметы идентифицируются по ресурсу.

## Список параметров
- **`itemId`** (`ObjectId`) - Идентификатор предмета-образца.

## Возвращаемые значения
Возвращает `integer` - Количество всех подобных предметов, имеющихся у игрока.

## Примеры
### Подсчёт общего количества предметов
```lua
local itemOverallStackCount = itemLib.GetOverallStackCount( itemId )
```

## Смотрите также
- [itemLib.GetStackInfo](function.itemLib.GetStackInfo)