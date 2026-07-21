# guild.EnableProgressReply

Отправляет ответ на запрос разрешения развития гильдии.

## Описание

```lua
guild.EnableProgressReply( accept: boolean )
```

Отправка ответа на запрос разрешения развития гильдии, передаваемый через событие EVENT_GUILD_ENABLE_PROGRESS_REQUEST.

## Список параметров

- **`accept`** (`boolean`) - Принимает значение true, если игрок согласен начать развитие гильдии.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Базовый вызов функции

```lua
guild.EnableProgressReply( true )
```

## Смотрите также

- [EVENT_GUILD_ENABLE_PROGRESS_REQUEST](EVENT_GUILD_ENABLE_PROGRESS_REQUEST)