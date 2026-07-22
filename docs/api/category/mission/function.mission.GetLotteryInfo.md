# mission.GetLotteryInfo

Возвращает информацию о лотерее "Лото".

## Описание

```lua
mission.GetLotteryInfo(): table | nil
```

Функция возвращает информацию о лотерее "Лото". Если лотерея сейчас не проводится, возвращается `nil`. В противном случае возвращается таблица с состоянием, билетами и призами. При завершении лотереи приходит событие `EVENT_LOTTERY_END`. При изменении поля `state` приходит событие `EVENT_LOTTERY_STATE_CHANGED`.

::: warning Замечание
При завершении лотереи (mission.GetLotteryInfo() начинает возвращать nil) приходит событие EVENT_LOTTERY_END.
:::

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` | `nil`, описание о таблице: `nil`, если лотерея сейчас не проводится; иначе таблица со следующими полями:

- **`state`** (`number`) - состояние лотереи.

- **`tickets`** (`table`) - список номеров активированных билетов.

- **`winners`** (`table`) - список выигравших билетов и призов, каждый элемент - таблица с полями:

    - **`key`** (`number`) - номер выигравшего билета.

    - **`value`** (`ObjectId`) - идентификатор предмета-приза.

- **`lotteryResource`** (`table`) - общая информация о лотерее, поля:

    - **`maxWinners`** (`number`) - количество разыгрываемых призов.

    - **`prizes`** (`table`) - список возможных призов, каждый элемент - `ObjectId` предмета-приза.

    - **`ticketCounter`** (`CurrencyId`) - идентификатор альтернативной валюты-счетчика для числа активированных билетов.

    - **`ticketResource`** (`ObjectId`) - идентификатор предмета-лотерейного билета.

- **`consolationPrizes`** (`table`) - список, начинающийся с 0, с информацией об утешительных призах, поля в элементах:

    - **`positions`** (`number`) - позиция.

    - **`prizes`** (`table`) - список возможных призов, каждый элемент - `ObjectId` предмета-утешительного приза.

## Примеры

### Получение информации о лотерее

```lua
local info = mission.GetLotteryInfo()
if info then
    local maxWinners = info.lotteryResource.maxWinners
end
```

## Смотрите также

- [EVENT_LOTTERY_END](events.lottery#event-lottery-end)
- [EVENT_LOTTERY_STATE_CHANGED](events.lottery#event-lottery-state-changed)