# guild.GetMemberDescription

Возвращает описание игрока из гильдии по его идентификатору.

## Описание

```lua
guild.GetMemberDescription( memberId: ObjectId ): WString
```

Извлечение описания игрока из гильдии по его идентификатору.

## Список параметров

- **`memberId`** (`ObjectId`)
Идентификатор члена гильдии.

## Возвращаемые значения

Возвращает `WString` - описание игрока в гильдии.

## Примеры

### Получение описания участника гильдии

```lua
local memberDescription = guild.GetMemberDescription( memberId )
```