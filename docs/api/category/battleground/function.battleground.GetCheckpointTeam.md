# battleground.GetCheckpointTeam
Возвращает идентификатор команды, которой принадлежит указанная контрольная точка на поле боя.

## Описание
```lua
battleground.GetCheckpointTeam( checkpointId: ObjectId ): BattlegroundMarkId | nil
```
Функция извлекает и возвращает идентификатор команды, владеющей заданной контрольной точкой на поле боя. Если контрольная точка не захвачена ни одной из команд или точка с указанным идентификатором не существует, функция возвращает `nil`.

## Список параметров
- **`checkpointId`** (`ObjectId`)
Уникальный идентификатор контрольной точки на поле боя.

## Возвращаемые значения
Возвращает `BattlegroundMarkId` — идентификатор команды, которой принадлежит контрольная точка, или `nil`, если контрольная точка не принадлежит ни одной команде либо не найдена.

## Примеры
### Получение идентификатора команды контрольной точки
```lua
local teamId = battleground.GetCheckpointTeam( checkpointId )
```

## Смотрите также
- [battleground.GetCheckpointInfo](battleground.GetCheckpointInfo)
- [battleground.GetLinkedCheckpoint](battleground.GetLinkedCheckpoint)