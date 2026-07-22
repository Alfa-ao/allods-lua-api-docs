# mission.GetLoginLotteryInfo
Извлекает общую информацию о вознаграждениях за вход в игру.

## Описание
```lua
mission.GetLoginLotteryInfo(): table|nil
```
Функция возвращает таблицу, содержащую только неизменные в рамках одного календарного ивента параметры, тогда как информация об изменяемых параметрах передается через механизм альтернативных валют.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` | `nil` - `nil`, если информация отсутствует, иначе таблица со следующими полями:

- **`comboCounter`** (`CurrencyId`(`ResourceId`)) - валюта, которая используется как счетчик количества дней, которые аватар заходил в игру подряд.

- **`prizes`** (`table` of `tables`) - список описаний призов, индексированная целыми числами (начиная с 0) таблица, каждое значение которой представляет собой таблицу с полями:

    - **`daysToReceive`** (`number`(`integer`)) - количество последовательных входов, за которые нужно выдавать валюту.

    - **`prizes`** (`table`) - список призов, таблица, индексированная целыми числами (начиная от 0), значения - `ItemId` предметов, аналогичных призовым.

    - **`counter`** (`CurrencyId`(`ResourceId`)) - валюта, выдаваемая за вход в игру `daysToReceive` дней подряд; за каждую единицу этой валюты можно получить все предметы, указанные в `prizes`.

## Примеры
### Получение информации о вознаграждениях
```lua
local info = mission.GetLoginLotteryInfo()
```

## Смотрите также
- [mission.LoginLotteryReceivePrizes](function.mission.LoginLotteryReceivePrizes)
- [itemLib.GetItemInfo](function.itemLib.GetItemInfo)
- [itemLib.GetStackInfo](function.itemLib.GetStackInfo)
- [CurrencyId:GetInfo](function.CurrencyId.GetInfo)