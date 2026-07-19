# currencyExchange.IsServiceActive

Определяет наличие и активность сервиса обмена валют на шарде.

## Описание

```lua
currencyExchange.IsServiceActive(): boolean
```

Функция возвращает индикатор наличия и активности сервиса обмена валют на шарде.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `boolean` - `true`, если сервис обмена валют имеется на шарде и активен.

## Примеры

### Проверка активности сервиса

```lua
local isServiceActive = currencyExchange.IsServiceActive()
```