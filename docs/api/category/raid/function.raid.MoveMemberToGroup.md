# raid.MoveMemberToGroup

Перемещает члена рейда в указанную группу.

[<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-UniqueId) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-UniqueId) <Badge type="warning" text="Process" />

## Описание

```lua
raid.MoveMemberToGroup( uniqueId: UniqueId, groupNumber: number )
```

Функция перемещает участника рейда в заданную группу. Целевая группа должна предварительно существовать, нумерация групп начинается с нуля.

## Список параметров

- **`uniqueId`** (`UniqueId`) - Уникальный постоянный идентификатор игрока-участника группы.

- **`groupNumber`** (`number`) - Номер новой группы, в которую требуется переместить игрока. Группа должна уже существовать, нумерация начинается с нуля.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Перемещение игрока в группу

```lua
raid.MoveMemberToGroup( playerId, groupNumber )
```