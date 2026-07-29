## ENUM_CreateRevivalRollResultStatus

Определяет результат попытки пригласить игрока вернуться в игру.

### Описание

Текстовое перечисление. Префикс для автоматической проверки - `ENUM_CreateRevivalRollResultStatus`.

### Список значений

- **`ENUM_CreateRevivalRollResultStatus_Success`** (`string`) - Приглашение успешно отправлено.

- **`ENUM_CreateRevivalRollResultStatus_InternalError`** (`string`) - Внутренняя ошибка системы.

- **`ENUM_CreateRevivalRollResultStatus_AccountNotFound`** (`string`) - Аккаунт не найден.

- **`ENUM_CreateRevivalRollResultStatus_WrongReferOwner`** (`string`) - Некорректный владелец реферала.

- **`ENUM_CreateRevivalRollResultStatus_ActiveAccount`** (`string`) - Аккаунт уже активен.

- **`ENUM_CreateRevivalRollResultStatus_AlreadySent`** (`string`) - Приглашение уже отправлено.

- **`ENUM_CreateRevivalRollResultStatus_LimitExceeded`** (`string`) - Превышен лимит отправленных приглашений.

- **`ENUM_CreateRevivalRollResultStatus_WrongAvatarLevel`** (`string`) - Некорректный уровень аватара.

- **`ENUM_CreateRevivalRollResultStatus_NoContentKey`** (`string`) - Отсутствует ключ контента.