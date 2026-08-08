# unit.GetRace

Возвращает информацию о расе юнита.

## Описание

```lua
unit.GetRace( unitId: ObjectId ): table | nil
```

Функция извлекает и возвращает таблицу с информацией о расе указанного юнита. Если данные недоступны, возвращается `nil`.

## Список параметров

- **`unitId`** (`ObjectId`) - Уникальный идентификатор юнита.

## Возвращаемые значения

Возвращает `table` | `nil` - Таблица с информацией о расе юнита или `nil`, если данные недоступны.

- **`creatureRace`** (`number`(`ENUM_CreatureRace_*`)) - Раса существа. Для игроков всегда `ENUM_CreatureRace_HUMANOID`.

- **`sysCreatureRace`** (`string`(`ENUM_CreatureRace_*`)) - Раса существа. Для игроков всегда `"ENUM_CreatureRace_HUMANOID"`.

- **`characterRace`** (`WString` | `nil`) - Локализованное имя расы игрока. Для мобов и NPC всегда `nil`.

- **`sysCharacterRaceName`** (`string` | `nil`) - Служебное имя расы игрока. Для мобов и NPC всегда `nil`.

## Примеры

### Получение расы юнита

```lua
local race = unit.GetRace( unitId )
if race then
    local creatureRace = race.creatureRace
end
```

## Смотрите также

- [ENUM_CreatureRace_*](/api/enums/enums.ENUM_CreatureRace.md)