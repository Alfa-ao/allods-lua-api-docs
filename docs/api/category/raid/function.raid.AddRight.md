# raid.AddRight
Добавляет право члену рейда.

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
- [RAID_MEMBER_RIGHT_*](../constants#raid-member-right)