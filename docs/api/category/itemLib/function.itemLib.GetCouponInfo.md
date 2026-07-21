# itemLib.GetCouponInfo
Возвращает информацию о предмете-купоне.

## Описание
```lua
itemLib.GetCouponInfo( itemResourceId: ItemId ): table
```
Функция извлекает и возвращает таблицу с информацией о предмете-купоне.

## Список параметров
- **`itemResourceId`** (`ItemId`) - Идентификатор ресурса предмета.

## Возвращаемые значения
Возвращает `table` - таблица с информацией о купоне:

- **`isCoupon`** (`boolean`) - Флаг, указывающий, является ли предмет купоном (`true`) или нет (`false`).

- **`items`** (`table` | `nil`) - Список идентификаторов (`ItemId`) предметов, которые можно купить при наличии данного купона в сумке. Если `isCoupon` равен `false`, поле равно `nil`. Список индексирован с 1.

## Примеры
### Получение информации о купоне
```lua
local couponInfo = itemLib.GetCouponInfo( itemResourceId )
```

## Смотрите также
- [ItemId](ItemId)
- [itemLib.GetResourceId](function.itemLib.GetResourceId)