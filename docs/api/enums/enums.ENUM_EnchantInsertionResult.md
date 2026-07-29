## ENUM_EnchantInsertionResult
Определяет причину, по которой нельзя вставить энчант в предмет.

### Описание
Текстовое перечисление.

### Список значений
- **`ENUM_EnchantInsertionResult_SUCCESS`** (`string`) - Причин, по которым нельзя вставить энчант в предмет, не обнаружено.

- **`ENUM_EnchantInsertionResult_UNKNOWN`** (`string`) - Энчант нельзя вставить в предмет, но причина неклассифицируема (например, некорректные данные).

- **`ENUM_EnchantInsertionResult_ITEM_UNBOUND`** (`string`) - Предмет, в который собираются вставить энчант, не привязан к аватару.

- **`ENUM_EnchantInsertionResult_UNFITTED_ITEM_STATS`** (`string`) - У данного предмета нет статов, которые мог бы улучшить данный энчант.

- **`ENUM_EnchantInsertionResult_UNFITTED_DRESS_SLOT_UNLOCKS`** (`string`) - Слот эквипмента, в который вставлен предмет, не позволяет вставлять предметы с качеством, соответствующим качеству данного энчанта.

### Смотрите также

- [enchant.CanInsertEnchant](/api/category/enchant/function.enchant.CanInsertEnchant.md)