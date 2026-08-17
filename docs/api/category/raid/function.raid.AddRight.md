# raid.AddRight

Добавляет право члену рейда.

[<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-UniqueId) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-UniqueId) <Badge type="warning" text="Process" />

## Описание

```lua
raid.AddRight( uniqueId: UniqueId, right: number )
```

Функция выполняет добавление указанного права члену рейда.

## Список параметров

- **`uniqueId`** (`UniqueId`) - Идентификатор участника отряда.

- **`right`** (`number`(`RAID_MEMBER_RIGHT_*`)) - Добавляемое право.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Добавление права участнику
```lua
raid.AddRight( playerId, right )
```

## Смотрите также

- [RAID_MEMBER_RIGHT_*](/api/constants/constants.RAID_MEMBER_RIGHT.md)