# dominationLib.GetObjectiveInfo
Возвращает информацию о состоянии боевой цели режима Domination.

## Описание
```lua
dominationLib.GetObjectiveInfo( id: ObjectId ): table|nil
```
Функция извлекает и возвращает таблицу с информацией о состоянии указанной боевой цели режима Domination. Если цель не найдена или данные недоступны, функция возвращает `nil`.

## Список параметров
- **`id`** (`ObjectId`) - Идентификатор цели.

## Возвращаемые значения
Возвращает `table` или `nil`.

Если информация успешно получена, возвращается таблица со следующими полями:
- **`id`** (`ObjectId`) - Идентификатор цели.

- **`firstTeam`** (`table` | `nil`) - Список идентификаторов (`ObjectId`) персонажей первой команды, находящихся вблизи данной цели. Индексация начинается с `0`.
- **`secondTeam`** (`table` | `nil`) - Список идентификаторов (`ObjectId`) персонажей второй команды, находящихся вблизи данной цели. Индексация начинается с `0`.
- **`disabled`** (`boolean`) - Состояние активности цели.
- **`radius`** (`number`) - Радиус окрестности, в которой необходимо находиться для захвата цели.
- **`owner`** (`number` (`ENUM_DominationFightTeam`)) - Доминирующая команда.
- **`actualOwner`** (`number` (`ENUM_DominationFightTeam`)) - Команда, контролирующая данную цель.
- **`state`** (`number` (`ENUM_DominationAreaState`)) - Текущее состояние цели.
- **`progress`** (`number`) - Прогресс захвата цели.
- **`progressToCapture`** (`number`) - Количество очков, необходимых для захвата цели.
- **`timeSwitched`** (`number` (`int64`)) - Время последнего обновления данных.
- **`timeToCapture`** (`number` (`int64`)) - Прогнозируемое время захвата в текущих условиях.

## Примеры
### Получение информации о первой доступной цели
```lua
local objectives = dominationLib.GetObjectives()
if objectives then
    local objectiveInfo = dominationLib.GetObjectiveInfo( objectives[ 0 ] )
end
```
::: info Описание примера
В примере извлекается список всех доступных целей режима Domination. При наличии хотя бы одной цели выполняется запрос детальной информации о нулевом (первом) элементе списка.
:::

## Смотрите также
- [ENUM_DominationFightTeam](enums.domination#enum-dominationfightteam)
- [ENUM_DominationAreaState](enums.domination#enum-dominationareastate)
- [dominationLib.GetObjectives()](function.dominationLib.GetObjectives)