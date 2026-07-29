## ENUM_BoxOperationResult

Определяет результат операции с сундуком.

### Описание

Текстовое перечисление. Префикс для автоматической проверки - `ENUM_BoxOperationResult`.

### Список значений

- **`ENUM_BoxOperationResult_SlotNumberOutOfBounds`** (`string`) - Номер слота выходит за пределы допустимого диапазона.

- **`ENUM_BoxOperationResult_SlotIsEmpty`** (`string`) - Слот пуст.

- **`ENUM_BoxOperationResult_NoFreeSpace`** (`string`) - Отсутствие свободного места.

- **`ENUM_BoxOperationResult_ItemIsNotBox`** (`string`) - Предмет не является сундуком.

- **`ENUM_BoxOperationResult_ItemIsNotKey`** (`string`) - Предмет не является ключом.

- **`ENUM_BoxOperationResult_BoxLocked`** (`string`) - Сундук заблокирован.

- **`ENUM_BoxOperationResult_BoxUnlocked`** (`string`) - Сундук разблокирован.

- **`ENUM_BoxOperationResult_KeyDoesNotMatch`** (`string`) - Ключ не подходит.

- **`ENUM_BoxOperationResult_OperationSuccess`** (`string`) - Операция успешно завершена.

- **`ENUM_BoxOperationResult_TransactionFailed`** (`string`) - Транзакция не удалась.

- **`ENUM_BoxOperationResult_WrongStackCount`** (`string`) - Некорректное количество предметов в стаке.