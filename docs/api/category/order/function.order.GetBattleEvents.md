# order.GetBattleEvents

Возвращает информацию о сражениях, относящихся к ордену.

## Описание

```lua
order.GetBattleEvents(): table | nil
```

Функция возвращает информацию о сражениях, относящихся к ордену.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица с информацией о сражениях, или `nil`, если данные отсутствуют.

- **`trainingEvent`** (`ObjectId` | `nil`) - идентификатор тренировочного сражения.

- **`ratingEvent`** (`ObjectId` | `nil`) - идентификатор рейтингового сражения.

## Примеры

### Получение информации о сражениях

```lua
local battleEvents = order.GetBattleEvents()
```

## Смотрите также

- [matchMaking.GetEventInfo](../matchMaking/function.matchMaking.GetEventInfo)