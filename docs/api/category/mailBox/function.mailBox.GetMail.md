# mailBox.GetMail

Возвращает информацию о письме, предварительно полученную с сервера.

## Описание

```lua
mailBox.GetMail( mailId: ObjectId ): table | nil
```

Функция возвращает кешированную информацию о письме. При устаревании данных приходит событие `EVENT_MAILBOX_CHANGED_ON_SERVER`, после чего требуется повторный запрос с сервера.

## Список параметров

- **`mailId`** (`ObjectId`) - Идентификатор письма.

## Возвращаемые значения

Возвращает `table` | `nil` - Таблица с полями, аналогичными полям функции `mailBox.GetMails()`, или `nil`, если информация о письме с указанным идентификатором ещё не получена с сервера.

## Примеры

### Получение информации о письме

```lua
local mail = mailBox.GetMail( mailId )
```

## Смотрите также

- [mailBox.GetMails](function.mailBox.GetMails)
- [mailBox.RequestMail](function.mailBox.RequestMail)
- [mailBox.RequestMails](function.mailBox.RequestMails)
- [EVENT_MAILBOX_CHANGED_ON_SERVER](events.mailBox#event-mailbox-changed-on-server)