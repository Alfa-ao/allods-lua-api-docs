# unit.GetSysRace

Возвращает расу юнита.

## Описание

```lua
unit.GetSysRace( unitId: ObjectId ): number
```

Функция возвращает расу юнита.

## Список параметров

- **`unitId`** (`ObjectId`) - Уникальный идентификатор юнита.

## Возвращаемые значения

Возвращает `number` (`ENUM_CreatureRace_*`) - Раса существа, для игроков всегда `ENUM_CreatureRace_HUMANOID`.

## Примеры

### Получение расы юнита

```lua
local race = unit.GetSysRace( unitId )
if race == ENUM_CreatureRace_HUMANOID then
    LogInfo( "Unit", unitId, "is humanoid" )
end
```

::: info Описание примера
Запрашивается раса юнита по его идентификатору. Если полученное значение соответствует гуманоидной расе, в лог выводится соответствующее сообщение.
:::

## Смотрите также

- [ENUM_CreatureRace_*](/api/enums/enums.ENUM_CreatureRace.md)