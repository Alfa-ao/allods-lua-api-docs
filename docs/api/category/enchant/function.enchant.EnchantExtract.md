# enchant.EnchantExtract

Извлекает самоцвет из заданного слота предмета.

## Описание

```lua
enchant.EnchantExtract( itemId: ObjectId, slot: number )
```

Функция извлекает самоцвет из заданного слота предмета. Если ранее для этого же предмета вызывалась данная функция или функция `enchant.EnchantInsert`, извлечение не выполняется до завершения предыдущей операции. Вызов функции игнорируется до прихода события `EVENT_GAME_ITEM_CHANGED` с соответствующим `itemId` (если предыдущая операция удалась) или `EVENT_ITEM_SERVER_CMD_FINISHED` с соответствующим `itemId` и `isSuccess == false` (если предыдущая операция не удалась).

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

- **`slot`** (`number` | `ENUM_EnchantSlot_...`) - Слот предмета.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Извлечение самоцвета

```lua
enchant.EnchantExtract( itemId, slot )
```

## Смотрите также

- [ENUM_EnchantSlot_...](enums.enchant#enum_enchantslot)
- [enchant.EnchantInsert](function.enchant.EnchantInsert)
- [enchant.GetEnchants](function.enchant.GetEnchants)
- [EVENT_GAME_ITEM_CHANGED](events.game#event-game-item-changed)
- [EVENT_ITEM_SERVER_CMD_FINISHED](events.item#event-item-server-cmd-finished)