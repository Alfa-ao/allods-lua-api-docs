# raid.RemoveRight

Отнимает право у члена рейда.

[<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-UniqueId) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-UniqueId) <Badge type="warning" text="Process" />

## Описание

```lua
raid.RemoveRight( uniqueId: UniqueId, right: number )
```

Функция отнимает указанное право у участника рейда.

## Список параметров

- **`uniqueId`** (`UniqueId`) - Уникальный постоянный идентификатор игрока - участника рейда.

- **`right`** (`number`(`RAID_MEMBER_RIGHT_*`)) - Отнимаемое право.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Лишение права участника рейда

```lua
raid.RemoveRight( playerId, right )
```

## Смотрите также

- [RAID_MEMBER_RIGHT_*](/api/constants/constants.RAID_MEMBER_RIGHT.md)