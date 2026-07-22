# mission.LoginLotteryReceivePrizes

Получает вознаграждения за входы в игру.

## Описание

```lua
mission.LoginLotteryReceivePrizes( currencyId: CurrencyId ): table | nil
```

Функция получает вознаграждения за входы в игру.

## Список параметров

- **`currencyId`** (`CurrencyId`(`ResourceId`)) - идентификатор валюты, служащей счётчиком полученных призов (см. `mission.LoginLotteryReceivePrizes`, поле `counter`).

## Возвращаемые значения

Возвращает `table` | `nil` - `nil`, если нет информации; иначе таблица со следующими полями:

- **`comboCounter`** (`CurrencyId`(`ResourceId`)) - валюта, которая используется как счетчик количества дней, которые аватар заходил в игру подряд.

- **`prizes`** (`table`) - список описаний призов, индексированная целыми числами (начиная с 0) таблица, каждое значение которой представляет собой таблицу со следующими полями:
    - **`daysToReceive`** (`number`(`integer`)) - количество последовательных входов, за которые нужно выдавать валюту.
    - **`counter`** (`CurrencyId`(`ResourceId`)) - валюта, выдаваемая за вход в игру; за каждую единицу можно получить все предметы, указанные в `prizes`.
    - **`prizes`** (`table`) - список призов, таблица, индексированная целыми числами (начиная от 0), значения - `ItemId` предметов, аналогичных призовым (см. `itemLib.GetItemInfo`).

## Примеры

### Получение вознаграждений

```lua
mission.LoginLotteryReceivePrizes( currencyId )
```

## Смотрите также

- [mission.GetLoginLotteryInfo](function.mission.GetLoginLotteryInfo)
- [itemLib.GetItemInfo](dsfsdfdsa)