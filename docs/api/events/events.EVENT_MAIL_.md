## EVENT_MAIL_CREATE_RESULT

### Описание

```
EVENT_MAIL_CREATE_RESULT
```

Событие присылается с результатом создания письма.

### Список параметров

- **`sysResult`** (`string`(`CreateMailResult_*`)) - результат создания письма, текстовый енум. Not fully implemented yet. Значения соответствуют перечислению `CreateMailResult_*`.

- **`recipientName`** (`WString`) - имя адресата.

## Смотрите также

- [EnumCreateMailResult](/api/enums/enums.ENUM_CreateMailResult.md)

---

## EVENT_MAIL_DELETE_RESULT

### Описание

```
EVENT_MAIL_DELETE_RESULT
```

Событие присылается с результатом попытки удаления письма.

### Список параметров

- **`mailId`** (`ObjectId`) - уникальный идентификатор письма.

- **`sysResult`** (`string`(`MailServiceReply_*`)) - результат операции. Значения соответствуют перечислению `MailServiceReply_*`.

---

## EVENT_MAIL_EXTRACT_ITEMS_RESULT

### Описание

```
EVENT_MAIL_EXTRACT_ITEMS_RESULT
```

Событие присылается с результатом извлечения предметов из письма.

### Список параметров

- **`mailId`** (`ObjectId`) - уникальный идентификатор письма.

- **`sysResult`** (`string`(`MailServiceReply_*`)) - результат операции. Значения соответствуют перечислению `MailServiceReply_*`.

---

## EVENT_MAIL_EXTRACT_MONEY_RESULT

### Описание

```
EVENT_MAIL_EXTRACT_MONEY_RESULT
```

Событие присылается с результатом извлечения денег из письма.

### Список параметров

- **`mailId`** (`ObjectId`) - уникальный идентификатор письма.

- **`sysResult`** (`string`(`MailServiceReply_*`)) - результат операции. Значения соответствуют перечислению `MailServiceReply_*`.

---

## EVENT_MAIL_RETURN_RESULT

### Описание

```
EVENT_MAIL_RETURN_RESULT
```

Событие присылается с результатом попытки возврата письма отправителю.

### Список параметров

- **`mailId`** (`ObjectId`) - уникальный идентификатор письма.

- **`sysResult`** (`string`(`MailServiceReply_*`)) - результат операции. Значения соответствуют перечислению `MailServiceReply_*`.