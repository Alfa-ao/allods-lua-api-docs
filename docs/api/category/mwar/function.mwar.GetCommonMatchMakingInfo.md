# mwar.GetCommonMatchMakingInfo

Возвращает общие параметры матчмейкинга для Доминиона.

## Описание

```lua
mwar.GetCommonMatchMakingInfo(): table | nil
```

Функция возвращает таблицу с общими параметрами матчмейкинга для Доминиона или `nil`, если информация отсутствует.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` | `nil` - таблицу с информацией о параметрах матчмейкинга или `nil`, если информация отсутствует:

- **`raidEventResource`** (`InstancedEventResourceId` (`ResourceId`)) - идентификатор ресурса рейдового сражения.

- **`groupEventResource`** (`InstancedEventResourceId` (`ResourceId`)) - идентификатор ресурса группового сражения.

## Примеры

### Получение информации о матчмейкинге

```lua
local info = mwar.GetCommonMatchMakingInfo()
```

## Смотрите также

- [InstancedEventResourceId](InstancedEventResourceId)