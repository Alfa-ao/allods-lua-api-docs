# mailBox.RequestMailGroupOperation

Запрашивает у сервера исполнение операции над заданными письмами.

## Описание

```lua
mailBox.RequestMailGroupOperation( operation: number, mailList: table )
```

Удачное исполнение операции передается в событии `EVENT_MAILBOX_CHANGED_ON_SERVER`. Статус исполнения запроса (удачно или ошибка) приходит в событии `EVENT_MAILBOX_SERVER_OPERATION_RESULT`. Максимальное количество обрабатываемых за раз писем равно `20`.

## Список параметров

- **`operation`** (`number`(`CmdMailGroupOperationOperationType_*`)) - тип операции (`MARKREAD`, `GETATTACHMENT`, `DELETE`, `GETATTACHMENT_DELETE`)
- **`mailList`** (`table`) - Список идентификаторов писем. Индексируется целыми числами от 0. Максимально допустимый размер - 20.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Базовый вызов

```lua
mailBox.RequestMailGroupOperation( CmdMailGroupOperationOperationType_MARKREAD, { [0] = mailId } )
```

## Смотрите также

- [mailBox.GetMails](/api/category/mailBox/function.mailBox.GetMails.md)
- [EVENT_MAILBOX_*](/api/events/events.EVENT_MAILBOX_.md)
