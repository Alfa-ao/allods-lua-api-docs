# enchant.EnchantInsert

Вставляет самоцвет в предмет.

## Описание

```lua
enchant.EnchantInsert( enchantItemId: ObjectId, itemId: ObjectId )
```

Функция вставляет самоцвет в указанный предмет. Если для этого же предмета ранее вызывалась данная функция или `enchant.EnchantExtract`, вставка не выполняется до завершения предыдущей операции. Вызов игнорируется до прихода события `EVENT_GAME_ITEM_CHANGED` с соответствующим `itemId` при успешной операции, либо до прихода события `EVENT_ITEM_SERVER_CMD_FINISHED` с соответствующим `itemId` и `isSuccess == false` при неудачной операции.

## Список параметров

- **`enchantItemId`** (`ObjectId`) - Идентификатор самоцвета.

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Вставка самоцвета

```lua
enchant.EnchantInsert( enchantItemId, itemId )
```

## Смотрите также

- [enchant.EnchantExtract](/api/category/enchant/function.enchant.EnchantExtract.md)
- [enchant.CanInsertEnchant](/api/category/enchant/function.enchant.CanInsertEnchant.md)
- [EVENT_GAME_ITEM_CHANGED](/api/events/events.EVENT_GAME_.md#event-game-item-changed)
- [EVENT_ITEM_SERVER_CMD_FINISHED](/api/events/events.EVENT_ITEM_.md#event-item-server-cmd-finished)