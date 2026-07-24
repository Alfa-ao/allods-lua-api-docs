# unit.GetZonePvPDanger
Возвращает информацию о PvP-опасности зоны для персонажа.

## Описание
```lua
unit.GetZonePvPDanger( unitId: ObjectId ): string
```
Функция возвращает информацию о PvP-опасности зоны для указанного персонажа.

## Список параметров
- **`unitId`** (`ObjectId`) - Идентификатор игрока.

## Возвращаемые значения
Возвращает `string` (`ENUM_ZoneDanger_*`) - PvP-опасность зоны.

## Примеры
### Получение PvP-опасности зоны
```lua
local pvpDanger = unit.GetZonePvPDanger( unitId )
```

## Смотрите также
- [ENUM_ZoneDanger_*](#)