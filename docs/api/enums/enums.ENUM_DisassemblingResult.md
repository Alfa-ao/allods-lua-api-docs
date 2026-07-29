## ENUM_DisassemblingResult

Определяет результат операции разбора предмета.

### Описание

Текстовое перечисление. Префикс для проверки - `ENUM_DisassemblingResult`. Состоит из клиентской и серверной частей.

### Список значений

- **`ENUM_DisassemblingFailCause_NoFail`** (`string`) - Ошибки отсутствуют.

- **`ENUM_DisassemblingFailCause_ItemType`** (`string`) - Некорректный тип предмета.

- **`ENUM_DisassemblingFailCause_ItemLevel`** (`string`) - Некорректный уровень предмета.

- **`ENUM_DisassemblingFailCause_System`** (`string`) - Системная ошибка.

- **`ENUM_DisassemblingFailCause_NotDisassembler`** (`string`) - Инструмент не является разборщиком.

- **`ENUM_DisassemblingFailCause_NoSkill`** (`string`) - Отсутствие необходимого навыка.

- **`ENUM_DisassemblingOperationResult_SlotNumberOutOfBounds`** (`string`) - Номер слота выходит за пределы допустимого диапазона.

- **`ENUM_DisassemblingOperationResult_SlotIsEmpty`** (`string`) - Слот пуст.

- **`ENUM_DisassemblingOperationResult_ItemIsNotDisassembler`** (`string`) - Предмет не является разборщиком.

- **`ENUM_DisassemblingOperationResult_CannotDisassembleThis`** (`string`) - Невозможно разобрать данный предмет.

- **`ENUM_DisassemblingOperationResult_AvatarBusy`** (`string`) - Аватар занят.

- **`ENUM_DisassemblingOperationResult_Success`** (`string`) - Операция успешно завершена.