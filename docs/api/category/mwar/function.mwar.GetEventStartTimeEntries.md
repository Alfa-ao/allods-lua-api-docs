# mwar.GetEventStartTimeEntries

Возвращает список времён старта события.

## Описание

```lua
mwar.GetEventStartTimeEntries( eventResourceId: InstancedEventResourceId ): table
```

Функция возвращает таблицу, содержащую записи о времени старта события.

## Список параметров

- **`eventResourceId`** (`InstancedEventResourceId`(`ResourceId`)) - Идентификатор события.

## Возвращаемые значения

Возвращает `table` - таблицу, содержащую элементы типа `TimeEntry`.

## Примеры

### Получение списка времён старта

```lua
local times = mwar.GetEventStartTimeEntries( eventId )
```

## Смотрите также

- [TimeEntry](#)
- [InstancedEventResourceId](#)