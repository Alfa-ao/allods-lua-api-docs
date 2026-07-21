# itemLib.GetAlternativePriceInfo
Извлекает информацию об альтернативной цене предмета.

## Описание
```lua
itemLib.GetAlternativePriceInfo( itemId: ObjectId ): table|nil
```
Функция возвращает индексированную таблицу с ценами в альтернативных валютах, если предмет имеет стоимость не только в деньгах. Если альтернативная цена отсутствует, функция возвращает `nil`.

## Список параметров
- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения
Возвращает `table` | `nil` - индексированная с `0` таблица цен в альтернативных валютах или `nil`, если альтернативная цена отсутствует.

Каждая цена представлена таблицей со следующими полями:

- **`currencyId`** (`CurrencyId`) - Идентификатор ресурса альтернативной валюты.

- **`value`** (`number`) - Цена в этой валюте.

## Примеры
### Получение альтернативной цены
```lua
local alternativePriceInfo = itemLib.GetAlternativePriceInfo( itemId )
local value = alternativePriceInfo and alternativePriceInfo[0] and alternativePriceInfo[0].value
```

## Смотрите также
- [CurrencyId:GetInfo()](CurrencyId:GetInfo)