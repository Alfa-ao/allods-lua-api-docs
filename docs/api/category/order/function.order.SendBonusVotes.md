# order.SendBonusVotes
Отправляет голоса за бонусы.

## Описание
```lua
order.SendBonusVotes( bonusIds: table )
```
Функция отправляет запрос на голосование за бонусы. Результат голосования передается через событие `EVENT_ORDER_VOTE_ANSWER`.

## Список параметров

- **`bonusIds`** (`table`)

  - `OrderBonusId` (`number`) - Идентификатор запрашиваемого бонуса.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Отправка голосов за бонусы
```lua
local bonusIds = { 1, 2, 3 }
order.SendBonusVotes( bonusIds )
```

## Смотрите также

- [EVENT_ORDER_VOTE_ANSWER](events.order#event-order-vote-answer)