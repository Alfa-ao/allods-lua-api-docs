# guild.Create

Создает гильдию.

## Описание

```lua
guild.Create( itemId: ObjectId, guildName: WString )
```

Функция создает гильдию с использованием предмета из сумки и заданного имени.

::: warning Замечание
В случае ошибки приходит событие `EVENT_GENERAL_ERROR` с причинами `GuildCreateWrongPlace` (неподходящее место), `GuildCreateMemberBusy` (один из членов группы уже участвует в создании гильдии) или `GuildCreateAlreadyInGuild` (один из членов группы уже состоит в другой гильдии). Либо приходит типизированное сообщение `EVENT_GUILD_NAME_NOT_AVAILABLE`, в котором передается уже занятое имя.
:::

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета для создания гильдии. Предмет должен находиться в сумке.

- **`guildName`** (`WString`) - Желаемое имя.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Создание гильдии

```lua
guild.Create( itemId, guildName )
```

## Смотрите также

- [EVENT_GENERAL_ERROR](../events#event-general-error)
- [EVENT_GUILD_NAME_NOT_AVAILABLE](../events#event-guild-name-not-available)