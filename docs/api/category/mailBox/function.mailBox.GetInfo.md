# mailBox.GetInfo

Выдаёт общую информацию о состоянии почтового ящика.

## Описание

```lua
mailBox.GetInfo(): table
```

Информация о состоянии почтового ящика обновляется автоматически, запрос на сервер не требуется. При изменении состояния приходит событие `EVENT_MAILBOX_CHANGED_ON_SERVER`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - информацию о состоянии почтового ящика:

- **`totalMessages`** (`number`) - общее количество писем в почтовом ящике.

- **`unreadMessages`** (`number`) - количество непрочитанных писем в почтовом ящике.

## Примеры

### Получение общего количества писем

```lua
local mailCount = mailBox.GetInfo().totalMessages
```

## Смотрите также

- [EVENT_MAILBOX_CHANGED_ON_SERVER](events.mailbox#event-mailbox-changed-on-server)