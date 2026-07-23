# proceduralDungeonLib.GetGoalInfo

Возвращает информацию о задании.

## Описание

```lua
proceduralDungeonLib.GetGoalInfo( goalId: ObjectId ): table | nil
```

Функция возвращает таблицу с детальной информацией о задании по его идентификатору.

## Список параметров

- **`goalId`** (`ObjectId`) - Идентификатор задания.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица с информацией о задании, или `nil` если задание не найдено.

- **`goalId`** (`ObjectId`) - Идентификатор задания.

- **`scenarioId`** (`ObjectId`) - Идентификатор сценария; позволяет определить принадлежность голов одному и тому же сценарию.

- **`objective`** (`WString`) - Суть задания.

- **`description`** (`WString`) - Описание задание.

- **`hasTimer`** (`boolean`) - Есть ли таймер у задания.

- **`duration`** (`number`) - Продолжительность задания в мс.

- **`startTime`** (`LuaFullDateTime`) - Дата начала задания.

- **`state`** (`number`(`ENUM_EventGoalState`)) - Текущее состояние задания.

- **`type`** (`number`(`ENUM_EventGoalType`) | `nil`) - Тип задания; `nil` если неизвестный тип.

- **`count`** (`number` | `nil`) - Текущее количество убитых квестовых мобов / элементов. Присутствует для типов `ENUM_EventGoalType_KillMobs` и `ENUM_EventGoalType_ElementProgress`.

- **`total`** (`number` | `nil`) - Целевое количество убитых квестовых мобов / элементов. Присутствует для типов `ENUM_EventGoalType_KillMobs` и `ENUM_EventGoalType_ElementProgress`.

- **`isEscort`** (`boolean` | `nil`) - Если `true` цель - сопровождать моба, если `false` - защищать моба. Присутствует для типа `ENUM_EventGoalType_DefenceMobs`.

## Примеры

### Получение информации о задании

```lua
local goalInfo = proceduralDungeonLib.GetGoalInfo( goalId )
```

## Смотрите также

- [proceduralDungeonLib.GetGoals](function.proceduralDungeonLib.GetGoals)
- [ENUM_EventGoalState](../constants#enum-eventgoalstate)
- [ENUM_EventGoalType](../constants#enum-eventgoaltype)