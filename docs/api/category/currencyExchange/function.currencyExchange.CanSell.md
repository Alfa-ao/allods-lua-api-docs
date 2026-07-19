# currencyExchange.CanSell

Проверяет возможность продажи кристаллов за золото в сервисе обмена валют.

## Описание

```lua
currencyExchange.CanSell( crystalsToSell: number, moneyToGet: number ): boolean
```

Функция проверяет возможность продажи указанного количества кристаллов за заданное количество золота, учитывая текущий курс и коридор дозволенного отклонения, которые постоянно изменяются в зависимости от резерва кристаллов и золота.

## Список параметров

- **`crystalsToSell`** (`number`) - Количество кристаллов для продажи.

- **`moneyToGet`** (`number`) - Количество золота, которое планируется получить.

## Возвращаемые значения

Возвращает `boolean` - `true`, если продажа возможна, и `false` в противном случае.

## Примеры

### Проверка и выполнение продажи кристаллов

```lua
local crystalsToSell = 100
local moneyToGet = 500

if currencyExchange.IsServiceActive() then
    if currencyExchange.CanSell( crystalsToSell, moneyToGet ) then
        currencyExchange.Sell( crystalsToSell, moneyToGet )
    end
end
```

::: info Описание примера
В примере проверяется активность сервиса обмена валют. Если сервис активен, выполняется проверка возможности продажи заданного количества кристаллов за указанную сумму золота. При успешной проверке инициируется процесс продажи.
:::

## Смотрите также

- [currencyExchange.IsServiceActive](function.currencyExchange.IsServiceActive)
- [currencyExchange.Sell](function.currencyExchange.Sell)