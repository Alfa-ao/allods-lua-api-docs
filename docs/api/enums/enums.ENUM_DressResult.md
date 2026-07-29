## ENUM_DressResult

Определяет результат экипировки предмета.

### Описание

Текстовое перечисление. Префикс для автоматической проверки - `ENUM_DressResult`.

### Список значений
- **`ENUM_DressResult_Success`** (`string`) - Успешная экипировка.

- **`ENUM_DressResult_FailureVoid`** (`string`) - Пустая ошибка.

- **`ENUM_DressResult_Undressable`** (`string`) - Предмет нельзя снять или экипировать.

- **`ENUM_DressResult_WrongSlot`** (`string`) - Некорректный слот.

- **`ENUM_DressResult_WrongCharacterClass`** (`string`) - Некорректный класс персонажа.

- **`ENUM_DressResult_WrongCreatureLevel`** (`string`) - Некорректный уровень существа.

- **`ENUM_DressResult_NoSpace`** (`string`) - Отсутствие свободного места.

- **`ENUM_DressResult_TooSmallBag`** (`string`) - Сумка слишком мала.

- **`ENUM_DressResult_NotProficient`** (`string`) - Отсутствие навыка использования.

- **`ENUM_DressResult_InCombat`** (`string`) - Действие заблокировано во время боя.

- **`ENUM_DressResult_WrongDress`** (`string`) - Некорректная экипировка.

- **`ENUM_DressResult_SecondaryDressLocked`** (`string`) - Вторичная экипировка заблокирована.

- **`ENUM_DressResult_SlotLocked`** (`string`) - Предмет нельзя экипировать в заданный слот из-за того, что качество предмета выше, чем разрешено для этого слота.

- **`ENUM_DressResult_SmallerBag`** (`string`) - Требуется сумка большего размера.

- **`ENUM_DressResult_SmallerDepositBox`** (`string`) - Требуется банк большего размера.

- **`ENUM_DressResult_EnchantLocked`** (`string`) - Предмет нельзя экипировать в заданный слот из-за того, что качество одного или более самоцветов, вставленных в предмет, выше, чем разрешено для этого слота.

- **`ENUM_DressResult_DuplicateItem`** (`string`) - В гардеробе предмет уже есть.