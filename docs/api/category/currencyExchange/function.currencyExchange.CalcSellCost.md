# currencyExchange.CalcSellCost

Возвращает количество золота за продажу кристаллов в сервисе обмена валют.

## Описание

```lua
currencyExchange.CalcSellCost( crystalsToSell: number ): number
```

Функция вычисляет и возвращает количество золота, которое будет получено за продажу заданного количества кристаллов. Курс обмена постоянно изменяется в зависимости от текущего резерва кристаллов и золота в сервисе.

## Список параметров

- **`crystalsToSell`** (`number`) - Количество кристаллов для продажи.

## Возвращаемые значения

Возвращает количество золота за продажу кристаллов.

- **`number`** - Количество золота, получаемое за продажу.

## Примеры

### Проверка активности сервиса и расчет стоимости

```lua
if currencyExchange.IsServiceActive() then
    local gold = currencyExchange.CalcSellCost( crystalsToSell )
end
```

::: info Описание примера
В примере проверяется активность сервиса обмена валют с помощью функции `currencyExchange.IsServiceActive`. Если сервис активен, вычисляется стоимость продажи кристаллов в золоте посредством вызова `currencyExchange.CalcSellCost`.
:::

## Смотрите также

- [currencyExchange.IsServiceActive](function.currencyExchange.IsServiceActive)