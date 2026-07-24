# unit.GetZonePvPType

Возвращает информацию о PvP-типе зоны для персонажа.

## Описание

```lua
unit.GetZonePvPType( unitId: ObjectId ): number
```

Функция возвращает информацию о PvP-состоянии зоны для указанного юнита.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор юнита.

## Возвращаемые значения

Возвращает `number` (`ZONE_TYPE_*`) - PvP состояние.

::: info Перечисление
Имеющиеся типы зон:
- `ZONE_TYPE_ASTRAL`
- `ZONE_TYPE_ARENA`
- `ZONE_TYPE_CONTESTED`
- `ZONE_TYPE_FREE_PVP`
- `ZONE_TYPE_GRAVEYARD`
- `ZONE_TYPE_GUILD_BATTLEGROUND`
- `ZONE_TYPE_HOMELAND`
- `ZONE_TYPE_SANCTUARY`
:::

## Примеры

### Пример использования

```lua
local pvp = unit.GetZonePvPType( unitId )
```