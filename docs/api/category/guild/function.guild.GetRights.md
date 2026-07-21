# guild.GetRights

Возвращает права члена гильдии.

## Описание

```lua
guild.GetRights( memberId: ObjectId ): table
```

Функция возвращает таблицу с правами члена гильдии.

## Список параметров

- **`memberId`** (`ObjectId`) - Идентификатор члена гильдии.

## Возвращаемые значения

Возвращает `table` - таблицу с правами игрока, индексация [0..]. Элементы таблицы: `number` (enum `GUILD_MEMBER_RIGHT_...`) - права игрока.

## Примеры

### Получение прав члена гильдии

```lua
local rigths = guild.GetRights( memberName )
```

## Смотрите также

- [GUILD_MEMBER_RIGHT_...](#)