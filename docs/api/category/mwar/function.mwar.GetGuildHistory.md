# mwar.GetGuildHistory
Извлекает информацию об истории недавних сражений.

## Описание
```lua
mwar.GetGuildHistory(): table | nil
```
Данные становятся доступными только после применения `mwar.ReplicateLadder`. При изменении состояния трансляции или обновлении данных передается событие `EVENT_MWAR_LADDER_CHANGED`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` | `nil` - таблицу с информацией об истории сражений или `nil`, если данные отсутствуют.

- **`combats`** (`table`) - список таблиц с полями:
  - `time` (`LuaFullDateTime`) - время сражения
  - `winnerId` (`ObjectId`) - id выигравшей гильдии
  - `winnerScore` (`number`) - счет выигравшей стороны при завершении сражения
  - `winLeadName` (`WString`) - имя лидера выигравшей стороны
  - `loserId` (`ObjectId`) - id проигравшей гильдии
  - `loserScore` (`number`) - счет побежденной стороны при завершении сражения
  - `lossLeadName` (`WString`) - имя лидера побежденной стороны
  - `isRatingBattle` (`boolean`) - признак рейтингового боя

## Примеры
### Получение истории сражений
```lua
local history = mwar.GetGuildHistory()
LogInfo( history.winLeadName )
```

## Смотрите также
- [EVENT_MWAR_LADDER_CHANGED](#event-mwar-ladder-changed)
- [mwar.ReplicateLadder](function.mwar.ReplicateLadder)
- [LuaFullDateTime](../types/LuaFullDateTime)