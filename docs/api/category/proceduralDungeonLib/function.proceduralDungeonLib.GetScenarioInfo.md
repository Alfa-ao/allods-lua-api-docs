# proceduralDungeonLib.GetScenarioInfo
Возвращает информацию о сценарии.

## Описание
```lua
proceduralDungeonLib.GetScenarioInfo( scenarioId: ObjectId ): table | nil
```
Функция извлекает и возвращает детальную информацию о заданном сценарии, включая его текущее состояние, название, описание и список связанных заданий.

## Список параметров
- **`scenarioId`** (`ObjectId`) - Идентификатор сценария.

## Возвращаемые значения
Возвращает `table` | `nil` - таблица с информацией о сценарии или `nil`, если сценарий не найден.

- **`scenarioId`** (`ObjectId`) - Идентификатор сценария.

- **`state`** (`number` (`ENUM_EventGoalState`)) - Текущее состояние сценария.

- **`name`** (`WString`) - Название сценария.

- **`description`** (`WString`) - Описание сценария.

- **`goals`** (`table`) - Список идентификаторов заданий (`ObjectId`), относящихся к данному сценарию.

## Примеры
### Получение информации о сценарии
```lua
local scenarioInfo = proceduralDungeonLib.GetScenarioInfo( scenarioId )
```

## Смотрите также
- [proceduralDungeonLib.GetScenarios](function.proceduralDungeonLib.GetScenarios)
- [proceduralDungeonLib.GetGoalInfo](function.proceduralDungeonLib.GetGoalInfo)
- [ENUM_EventGoalState](../constants#enum-eventgoalstate)