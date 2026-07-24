# soulProgressLib.GetInfo

Возвращает общую информацию о талантах.

## Описание

```lua
soulProgressLib.GetInfo(): table
```

Функция возвращает общую информацию о талантах.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - таблица с информацией о талантах:

- **`talentCurrency`** (`CurrencyId` | `nil`) - идентификатор ресурса альтернативной валюты количества доступных вех для изучения.

- **`minSoulExpLevel`** (`number`) - минимальный уровень на котором становится доступен soulProgress.

## Примеры

### Получение информации о талантах

```lua
local soulTalentInfo = soulProgressLib.GetInfo()
if soulTalentInfo then
    LogInfo( soulTalentInfo )
end
```