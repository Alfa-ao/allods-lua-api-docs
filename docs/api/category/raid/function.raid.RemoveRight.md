# raid.RemoveRight

Отнимает право у члена рейда.

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

- [RAID_MEMBER_RIGHT_*](../enums/raid-member-right)