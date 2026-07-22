# mwar.ReplicateLadder
Запрашивает у сервера трансляцию или прекращение трансляции информации о рейтинге гильдий для Доминиона.

## Описание

```lua
mwar.ReplicateLadder( isReplicate: boolean )
```

При начале или прекращении трансляции присылается событие `EVENT_MWAR_LADDER_CHANGED`. Информация извлекается посредством `mwar.GetLadderInfo()`.

## Список параметров

- **`isReplicate`** (`boolean`) - Если `true`, то начать трансляцию; если `false` - прекратить.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Запуск трансляции рейтинга

```lua
mwar.ReplicateLadder( true )
```

## Смотрите также

- [EVENT_MWAR_LADDER_CHANGED](events#event-mwar-ladder-changed)
- [mwar.GetLadderInfo()](function.mwar.GetLadderInfo)