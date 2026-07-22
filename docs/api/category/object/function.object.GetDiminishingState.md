# object.GetDiminishingState
Возвращает информацию о диминишинге (сопротивлении контролю) объекта.

## Описание
```lua
object.GetDiminishingState( objectId: ObjectId ): table
```
Функция извлекает и возвращает таблицу, в которой ключом является группа диминишинга, а значением - уровень диминишинга (от 0 до 3).

## Список параметров
- **`objectId`** (`ObjectId`) - идентификатор объекта.

## Возвращаемые значения
Возвращает `table` - таблица, в которой ключом является группа `ENUM_DiminishingGroup`, а значением - уровень диминишинга (от 0 до 3).

## Примеры
### Получение состояния диминишинга
```lua
local diminishingState = object.GetDiminishingState( avatar.GetId() )
```

## Смотрите также
- [EVENT_OBJECT_DIMINISHING_GROUP_CHANGED](../events#event-object-diminishing-group-changed)
- [EVENT_OBJECT_DIMINISHING_CHANGED](../events#event-object-diminishing-changed)
- [ENUM_DiminishingGroup](../constants#enum-diminishinggroup)