# raid.GetMemberRights

Возвращает список прав участника рейда.

## Описание

```lua
raid.GetMemberRights( uniqueId: UniqueId ): table
```

Функция возвращает таблицу, содержащую список прав указанного участника рейда.

## Список параметров

- **`uniqueId`** (`UniqueId`) - Идентификатор участника рейда.

## Возвращаемые значения

Возвращает `table` - список прав участника рейда, который может быть пустым.

- **`key`** (`number`(`RAID_MEMBER_RIGHT_*`)) - Тип права.

- **`value`** (`boolean`) - `true`, если такое право есть.

## Примеры

### Получение прав участника рейда

```lua
local rights = raid.GetMemberRights( playerId )
```

## Смотрите также

- [RAID_MEMBER_RIGHT_*](../constants#raid-member-right)