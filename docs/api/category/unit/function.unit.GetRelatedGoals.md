# unit.GetRelatedGoals
Возвращает список целей процедурного данжа, которые связаны с указанным мобом.

## Описание

```lua
unit.GetRelatedGoals( unitId: ObjectId ): table|nil
```
Извлекает и возвращает список целей процедурного данжа, связанных с указанным мобом. Если такие цели заданий имеются у игрока, возвращается индексированный с единицы список идентификаторов целей заданий, иначе возвращается `nil`.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор моба.

## Возвращаемые значения

Возвращает `table` | `nil` - возвращается индексированный с единицы список идентификаторов целей заданий (`ObjectId`).

## Примеры

### Получение и обработка связанных целей

```lua
local goals = unit.GetRelatedGoals( unitId )
if goals and goals[ 1 ] then
    local info = proceduralDungeonLib.GetGoalInfo( goals[ 1 ] )
    if info then
        LogInfo( info.title )
    end
end
```

## Смотрите также

- [proceduralDungeonLib.GetGoalInfo](../proceduralDungeonLib/function.proceduralDungeonLib.GetGoalInfo)
- [unit.GetRelatedQuestObjectives](function.unit.GetRelatedQuestObjectives)