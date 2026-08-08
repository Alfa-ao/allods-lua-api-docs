## EVENT_MAILBOX_ACTIVATED

### Описание

```
EVENT_MAILBOX_ACTIVATED
```

Событие приходит при открытии (активации) почтового ящика.

### Список параметров

Параметры отсутствуют.

---

## EVENT_MAILBOX_CHANGED

### Описание

```
EVENT_MAILBOX_CHANGED
```

Событие присылается об изменении состояния почтового ящика. Например, при изменении статуса готовности или списка писем в нем.

### Список параметров

Параметры отсутствуют.

---

## EVENT_MAILBOX_CHANGED_ON_SERVER

### Описание

```
EVENT_MAILBOX_CHANGED_ON_SERVER
```

Событие присылается об изменении состояния почтового ящика на сервере. Означает, что данные на клиенте устарели и должны быть обновлены, до обновления функции `mailBox.GetMails()` и `mailBox.GetMail()` будут возвращать nil.

### Список параметров

Параметры отсутствуют.

## Смотрите также

- [mailBox.RequestMails](/api/category/mailBox/function.mailBox.RequestMails.md)

---

## EVENT_MAILBOX_CLOSED

### Описание

```
EVENT_MAILBOX_CLOSED
```

Событие приходит при закрытии (деактивации) почтового ящика.

### Список параметров

Параметры отсутствуют.

---

## EVENT_MAILBOX_NEW_MAIL_ARRIVED

### Описание

```
EVENT_MAILBOX_NEW_MAIL_ARRIVED
```

Событие приходит при попадании письма в почтовый ящик.

### Список параметров

- **`totalCount`** (`number`) - общее количество писем в почтовом ящике.

- **`unreadCount`** (`number`) - количество непрочтённых писем в почтовом ящике.

---

## EVENT_MAILBOX_NEW_UNREAD_MESSAGE

### Описание

```
EVENT_MAILBOX_NEW_UNREAD_MESSAGE
```

Событие присылается о непрочитанных письмах. Присылается при входе в игру и при добавлении новых непрочитанных писем.

### Список параметров

- **`oldUnreadMessages`** (`number`) - прежнее количество непрочитанных писем.

- **`unreadMessages`** (`number`) - текущее количество непрочитанных писем.

---

## EVENT_MAILBOX_SERVER_OPERATION_RESULT

### Описание

```
EVENT_MAILBOX_SERVER_OPERATION_RESULT
```

Событие присылается о статусе исполнения команды, касающейся почтового ящика на сервере. Содержит в себе код ошибки или удачного завершения. Использовать только для сообщений об ошибках, для других целей есть `EVENT_MAILBOX_CHANGED_ON_SERVER`.

### Список параметров

- **`sysResult`** (`string`(`MailServiceReply_*` | `ENUM_CreateMailResult_*`)) - статус завершения операции. Значения соответствуют перечислению `MailServiceReply_*` или `ENUM_CreateMailResult_*`.

## Смотрите также

- [EVENT_MAILBOX_CHANGED_ON_SERVER](/api/events/events.EVENT_MAILBOX_.md#event-mailbox-changed-on-server)