# guild.CanCreateGuildHereRequest

Функция отправляет запрос на проверку возможности создания гильдии в текущем месте с использованием заданного предмета.

## Описание

```lua
guild.CanCreateGuildHereRequest( itemId: ObjectId )
```

Функция инициирует проверку возможности создания гильдии в текущем месте с помощью предмета с указанным идентификатором. Результат выполнения операции передается через событие `EVENT_CAN_CREATE_GUILD_HERE_RESPONSE` с флагом `success`. В случае неподходящего места присылается событие `EVENT_GENERAL_ERROR` с причиной `GuildCreateWrongPlace`.

## Список параметров

- **`itemId`** (`ObjectId`) - идентификатор предмета для создания гильдии.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Проверка возможности создания гильдии

```lua
guild.CanCreateGuildHereRequest( itemId )
```

## Смотрите также

- [EVENT_CAN_CREATE_GUILD_HERE_RESPONSE](events.guild#event-can-create-guild-here-response)
- [EVENT_GENERAL_ERROR](events.general#event-general-error)