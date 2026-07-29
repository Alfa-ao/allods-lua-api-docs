## ENUM_ExchangeResult
Определяет результат операции обмена предметами.

### Описание
Текстовое перечисление. Префикс для проверки - `ENUM_ExchangeResult`. Состоит из двух частей.

### Список значений
- **`ENUM_MsgStartExchangeResultResult_SUCCESS`** (`string`) - Обмен успешно начат.

- **`ENUM_MsgStartExchangeResultResult_ERROR`** (`string`) - Общая ошибка начала обмена.

- **`ENUM_MsgStartExchangeResultResult_INVITEDAVATARISBUSY`** (`string`) - Приглашенный аватар занят.

- **`ENUM_MsgStartExchangeResultResult_INVITERAVATARISBUSY`** (`string`) - Приглашающий аватар занят.

- **`ENUM_MsgStartExchangeResultResult_INVITEDAVATARNOTFOUND`** (`string`) - Приглашенный аватар не найден.

- **`ENUM_MsgStartExchangeResultResult_TOOFAR`** (`string`) - Аватары находятся слишком далеко друг от друга.

- **`ENUM_MsgStartExchangeResultResult_INVITEDAVATARISDEAD`** (`string`) - Приглашенный аватар мертв.

- **`ENUM_MsgStartExchangeResultResult_INVITERAVATARISDEAD`** (`string`) - Приглашающий аватар мертв.

- **`ENUM_MsgStartExchangeResultResult_YOUAREINVISIBLE`** (`string`) - Вы находитесь в режиме невидимости.

- **`ENUM_MsgExchangeErrorErrorType_MONEYNOTENOUGH`** (`string`) - Недостаточно денег.

- **`ENUM_MsgExchangeErrorErrorType_PRIMARYCONFIRMATIONREQUIRED`** (`string`) - Требуется первичное подтверждение.

- **`ENUM_MsgExchangeErrorErrorType_ITEMNOTFOUND`** (`string`) - Предмет не найден.

- **`ENUM_MsgExchangeErrorErrorType_SLOTISUSED`** (`string`) - Слот уже используется.

- **`ENUM_MsgExchangeErrorErrorType_ITEMISUSED`** (`string`) - Предмет уже используется.

- **`ENUM_MsgExchangeErrorErrorType_ITEMISBOUND`** (`string`) - Предмет привязан к персонажу.