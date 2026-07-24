# unit.HasRelatedQuestObjectives

Проверяет наличие целей заданий игрока, которые связаны с указанным юнитом.

## Описание

```lua
unit.HasRelatedQuestObjectives( unitId: ObjectId, object: QuestId | ObjectId | nil ): boolean
```

Выполняется проверка наличия целей заданий игрока, связанных с указанным юнитом.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор юнита.

- **`object`** (`QuestId` | `ObjectId` | `nil`) - Определяет вариант проверки: `nil` - проверить наличие связанных целей заданий в целом; `QuestId` - связь с конкретным заданием; `ObjectId` (`QuestObjective`) - связь с конкретной целью задания.

## Возвращаемые значения

Возвращает `boolean` - `true`, если такие цели заданий имеются у игрока.

## Примеры

### Базовый вызов функции

```lua
local hasQuestObjectives = unit.HasRelatedQuestObjectives( unitId )
```