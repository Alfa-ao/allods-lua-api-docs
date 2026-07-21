# hangar.GetCustomizationCurrency

Возвращает идентификатор альтернативной валюты для замены устройств.

## Описание

```lua
hangar.GetCustomizationCurrency(): CurrencyId | nil
```

Функция возвращает идентификатор альтернативной валюты, используемой для замены устройств в ангаре. Получение данных возможно только после начала процесса кастомизации.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `CurrencyId` | `nil` - идентификатор альтернативной валюты для замены устройств.

## Примеры

### Получение идентификатора валюты кастомизации

```lua
local currencyId = hangar.GetCustomizationCurrency()
if currencyId then
    local currencyInfo = avatar.GetCurrencyInfo( currencyId )
end
```

## Смотрите также

- [avatar.GetCurrencyInfo](function.avatar.GetCurrencyInfo)