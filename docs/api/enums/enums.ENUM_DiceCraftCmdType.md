## ENUM_DiceCraftCmdType

Определяет тип команды крафтинга в кости.

### Описание

Текстовое перечисление. Используется в сообщении о неудачном завершении команд крафтинга (`EVENT_DICE_CRAFT_CMD_FAILED`).

### Список значений

- **`ENUM_DiceCraftCmdType_PutItem`** (`string`) - Соответствует `craft.DiceCraftPutItem(itemId, slot, count)`.

- **`ENUM_DiceCraftCmdType_EmptySlot`** (`string`) - Соответствует `craft.DiceCraftEmptySlot(slot)`.

- **`ENUM_DiceCraftCmdType_StartGame`** (`string`) - Соответствует `protectedCraft.DiceCraftStartGame(recipeId)`.

- **`ENUM_DiceCraftCmdType_Reroll`** (`string`) - Соответствует `protectedCraft.DiceCraftReroll()`.

- **`ENUM_DiceCraftCmdType_FinishGame`** (`string`) - Соответствует `protectedCraft.DiceCraftFinishGame()`.

- **`ENUM_DiceCraftCmdType_CancelGame`** (`string`) - Соответствует `protectedCraft.DiceCraftCancelGame()`.

- **`ENUM_DiceCraftCmdType_UseInspiration`** (`string`) - Соответствует `craft.DiceCraftUseInspiration()`.

- **`ENUM_DiceCraftCmdType_IncQualification`** (`string`) - Соответствует `craft.IncreaseQualification()`.

### Смотрите также

- [EVENT_DICE_CRAFT_CMD_FAILED](/api/events/events.EVENT_DICE_CRAFT_.md#event-dice-craft-cmd-failed)