# raid.GetMemberRights

Возвращает список прав участника рейда.

[<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-UniqueId) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-UniqueId) <Badge type="warning" text="Process" />

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

- [RAID_MEMBER_RIGHT_*](/api/constants/constants.RAID_MEMBER_RIGHT.md)