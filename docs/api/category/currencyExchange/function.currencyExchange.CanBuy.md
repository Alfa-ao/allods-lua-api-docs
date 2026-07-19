# currencyExchange.CanBuy

Проверяет возможность покупки указанного количества кристаллов за заданное количество золота в сервисе обмена валют.

## Описание

```lua
currencyExchange.CanBuy( crystalsToBuy: number, moneyToSpend: number ): boolean
```

Функция возвращает `true`, если покупка указанного количества кристаллов за заданное количество золота в сервисе обмена валют возможна. Курс и коридор дозволенного отклонения от курса постоянно изменяются в зависимости от резерва кристаллов и золота.

## Список параметров

- **`crystalsToBuy`** (`number`) - Количество кристаллов для покупки.

- **`moneyToSpend`** (`number`) - Количество золота для продажи.

## Возвращаемые значения

Возвращает `boolean` - `true`, если обмен возможен, и `false` в противном случае.

## Примеры

### Проверка возможности покупки кристаллов

```lua
if currencyExchange.IsServiceActive() then
    if currencyExchange.CanBuy( crystalsToBuy, moneyToSpend ) then
        currencyExchange.Buy( crystalsToBuy, moneyToSpend )
    end
end
```

::: info Описание примера
В примере выполняется проверка активности сервиса обмена валют. При активном сервисе оценивается возможность покупки заданного количества кристаллов за указанное количество золота. При положительном результате инициируется процесс покупки.
:::

## Смотрите также

- [currencyExchange.IsServiceActive](function.currencyExchange.IsServiceActive)
- [currencyExchange.Buy](function.currencyExchange.Buy)