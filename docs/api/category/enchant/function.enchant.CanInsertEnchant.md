# enchant.CanInsertEnchant

Проверяет возможность вставки данного энчанта в предмет.

## Описание

```lua
enchant.CanInsertEnchant( enchantItemId: ObjectId, itemId: ObjectId ): table|nil
```

Функция возвращает таблицу с результатами проверки или `nil`, если информация отсутствует.

## Список параметров

- **`enchantItemId`** (`ObjectId`) - Идентификатор энчанта.

- **`itemId`** (`ObjectId`) - Идентификатор проверяемого предмета.

## Возвращаемые значения

Возвращает `table` или `nil`.

Значение `nil` возвращается при отсутствии информации. В противном случае возвращается таблица со следующими полями:

- **`success`** (`boolean`) - Флаг успешности. Значение `true` указывает на возможность вставки энчанта в предмет.

- **`cause`** (`string` | `ENUM_EnchantInsertionResult`) - Причина, по которой нельзя вставить энчант.

## Примеры

### Базовая проверка возможности вставки

```lua
local canDo = enchant.CanInsertEnchant( enchantItemId, itemId )
```

## Смотрите также

- [ENUM_EnchantInsertionResult](enums.enchant#enum-enchantinsertionresult)
- [enchant.EnchantInsert](function.enchant.EnchantInsert)
- [enchant.CanInsertEnchants](function.enchant.CanInsertEnchants)