# itemLib.GetIncludedMob

Извлекает информацию о существе, которое появляется при использовании предмета из бестиария на личном острове.

## Описание

```lua
itemLib.GetIncludedMob( itemId: ObjectId ): table | nil
```

Функция возвращает таблицу с описанием существа, появляющегося при размещении предмета из бестиария на личном острове, или `nil`, если предмет не предусматривает появление существа.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения

Возвращает `table` | `nil` - Таблица с описанием существа или `nil`, если предмет не дает существа.

- **`type`** (`number`(`ENUM_BeastType_*`)) - Тип существа в личном приключении.

- **`sysType`** (`string`(`ENUM_BeastType_*`)) - Системный тип существа в личном приключении.

- **`mob`** (`table`) - Таблица с полями:

- **`name`** (`WString`) - Название существа.

- **`title`** (`WString`) - Титул существа.

- **`description`** (`WString`) - Описание существа.

- **`kind`** (`table`) - Таблица с описанием вида существа:

- **`race`** (`number`(`ENUM_CreatureRace_*`)) - Раса существа.

- **`sysRace`** (`string`(`ENUM_CreatureRace_*`)) - Системная раса существа.

## Примеры

### Получение информации о существе

```lua
local mob = itemLib.GetIncludedMob( itemId )
if mob then
    LogInfo( mob.name )
end
```

## Смотрите также

- [ENUM_BeastType_*](#enum-beasttype)
- [ENUM_CreatureRace_*](#enum-creaturerace)