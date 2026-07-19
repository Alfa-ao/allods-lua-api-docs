# currencyExchange.CalcSellRate
Возвращает курс продажи кристаллов в сервисе обмена валют.

## Описание
```lua
currencyExchange.CalcSellRate(): number
```

Функция возвращает курс продажи кристаллов в сервисе обмена валют. Данный курс постоянно изменяется в зависимости от резерва кристаллов и золота.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `number` - курс продажи кристаллов.

## Примеры
### Расчет курса продажи
```lua
if currencyExchange.IsServiceActive() then
    local sellRate = currencyExchange.CalcSellRate()
end
```

::: info Описание примера
В примере проверяется активность сервиса обмена валют. Если сервис активен, запрашивается текущий курс продажи кристаллов.
:::

## Смотрите также
- [currencyExchange.IsServiceActive](function.currencyExchange.IsServiceActive)