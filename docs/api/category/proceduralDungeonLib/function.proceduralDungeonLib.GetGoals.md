# proceduralDungeonLib.GetGoals

Возвращает список заданий для процедурного данжа.

## Описание

```lua
proceduralDungeonLib.GetGoals(): table | nil
```

Функция возвращает список идентификаторов заданий для процедурного данжа.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` | `nil` - список идентификаторов заданий. Индексация начинается с 1.

## Примеры

### Получение списка заданий

```lua
local goalList = proceduralDungeonLib.GetGoals()
```

## Смотрите также

- [proceduralDungeonLib.GetGoalInfo](function.proceduralDungeonLib.GetGoalInfo)