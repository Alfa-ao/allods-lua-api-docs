# order.GetOrderBonus

Возвращает идентификатор бонуса от ордена.

## Описание

```lua
order.GetOrderBonus(): OrderBonusId
```

Функция возвращает идентификатор бонуса от ордена. Возвращаемые значения являются кэшированными. Для обновления данных требуется вызов `order.RequestOrderInfo`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `OrderBonusId` - идентификатор бонуса.

## Смотрите также

- [order.RequestOrderInfo](/api/category/order/function.order.RequestOrderInfo.md)