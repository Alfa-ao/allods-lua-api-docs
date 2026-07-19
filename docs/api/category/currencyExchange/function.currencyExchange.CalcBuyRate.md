# currencyExchange.CalcBuyRate
Возвращает текущий курс покупки кристаллов в сервисе обмена валют.

## Описание
```lua
currencyExchange.CalcBuyRate(): number
```
Функция возвращает курс покупки кристаллов в сервисе обмена валют, который постоянно изменяется в зависимости от резерва кристаллов и золота.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `number` - курс покупки кристаллов.

## Примеры
### Проверка и получение курса
```lua
if currencyExchange.IsServiceActive() then
    local buyRate = currencyExchange.CalcBuyRate()
end
```
::: info Описание примера
В примере проверяется активность сервиса обмена валют. Если сервис активен, запрашивается и сохраняется текущий курс покупки кристаллов.
:::

## Смотрите также
- [currencyExchange.IsServiceActive](function.currencyExchange.IsServiceActive)