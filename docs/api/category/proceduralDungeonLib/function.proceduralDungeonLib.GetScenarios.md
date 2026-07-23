# proceduralDungeonLib.GetScenarios

Возвращает список сценариев для процедурного данжа.

## Описание

```lua
proceduralDungeonLib.GetScenarios(): table | nil
```

Функция возвращает таблицу с идентификаторами сценариев для процедурного данжа, индексация которой начинается с единицы.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` | `nil` - список идентификаторов сценариев.

- `1..N` (`ObjectId`) - уникальный идентификатор сценария.

## Примеры

### Получение списка сценариев

```lua
local scenariosList = proceduralDungeonLib.GetScenarios()
```

## Смотрите также

- [proceduralDungeonLib.GetScenarioInfo](function.proceduralDungeonLib.GetScenarioInfo)