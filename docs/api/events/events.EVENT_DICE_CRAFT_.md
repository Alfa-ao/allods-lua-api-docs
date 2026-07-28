## EVENT_DICE_CRAFT_CANCELED

### Описание

```lua
EVENT_DICE_CRAFT_CANCELED
```

Событие приходит при выключении режима крафтинга (создания вещей).

### Список параметров

- **`skillId`** (`SkillId`) - Идентификатор умения (скила).

---

## EVENT_DICE_CRAFT_CMD_FAILED

### Описание

```lua
EVENT_DICE_CRAFT_CMD_FAILED
```

Событие присылается, когда одна из команд, используемых для крафтинга, завершается неудачей, а состояние крафтинга не изменяется.

### Список параметров

- **`skillId`** (`SkillId`) - Идентификатор умения (скила).

- **`cmdType`** (`string`(`ENUM_DiceCraftCmdType_...`)) - Какая именно команда не выполнена. Значения соответствуют перечислению `ENUM_DiceCraftCmdType_...`.

---

## EVENT_DICE_CRAFT_FINISHED

### Описание

```lua
EVENT_DICE_CRAFT_FINISHED
```

Событие приходит при завершении создания вещи, при этом режим крафтинга (создание вещей) остаётся включенным.

### Список параметров

- **`skillId`** (`SkillId`) - Идентификатор умения (скила).

---

## EVENT_DICE_CRAFT_NOT_ENOUGH_COMPONENTS

### Описание

```lua
EVENT_DICE_CRAFT_NOT_ENOUGH_COMPONENTS
```

Событие приходит, если не хватает компонентов.

### Список параметров

- **`skillId`** (`SkillId`) - Идентификатор умения (скила).

---

## EVENT_DICE_CRAFT_PREPARED

### Описание

```lua
EVENT_DICE_CRAFT_PREPARED
```

Событие присылается при включении режима выбора рецептов крафтинга (создание вещей). Событие приходит, когда включается крафтинг или мини-игра крафтинга завершается без выхода из крафтинга (если мини-игра завершилась выходом из крафтинга, приходит `EVENT_DICE_CRAFT_CANCELED`).

### Список параметров

- **`skillId`** (`SkillId`) - Идентификатор умения (скила).

- **`isInitial`** (`boolean`) - `true`, если событие пришло при включении режима крафтинга; `false` - при завершении мини-игры.

- **`tool`** (`ObjectId`) - Идентификатор инструмента, использованного для старта мини-игры.

## Смотрите также

- [EVENT_DICE_CRAFT_CANCELED](#event-dice-craft-canceled)

---

## EVENT_DICE_CRAFT_RECIPES_CHANGED

### Описание

```lua
EVENT_DICE_CRAFT_RECIPES_CHANGED
```

Событие присылается при изменении списка рецептов.

### Список параметров

- **`skillId`** (`SkillId`) - Идентификатор умения (скила).

## Смотрите также

- [craft.DiceCraftGetRecipes](/api/category/craft/function.craft.DiceCraftGetRecipes.md)

---

## EVENT_DICE_CRAFT_SCORE_CHANGED

### Описание

```lua
EVENT_DICE_CRAFT_SCORE_CHANGED
```

Событие присылается при изменении уровня умения крафтинга.

### Список параметров

- **`skillId`** (`SkillId`) - Идентификатор умения (скила).

---

## EVENT_DICE_CRAFT_SLOT_CHANGED

### Описание

```lua
EVENT_DICE_CRAFT_SLOT_CHANGED
```

Событие присылается при изменении содержимого одного из слотов (добавлен, убран или заменён предмет).

### Список параметров

- **`skillId`** (`SkillId`) - Идентификатор умения (скила).

- **`slot`** (`number`) - Номер слота.

- **`itemId`** (`ObjectId` | `nil`) - `nil`, если слот пуст; иначе идентификатор предмета.

## Смотрите также

- [craft.DiceCraftGetPlacedItems](/api/category/craft/function.craft.DiceCraftGetPlacedItems.md)

---

## EVENT_DICE_CRAFT_STATUS_CHANGED

### Описание

```lua
EVENT_DICE_CRAFT_STATUS_CHANGED
```

Событие присылается при обновлении информации о состоянии текущего сеанса крафтинга (был очередной реролл).

### Список параметров

- **`skillId`** (`SkillId`) - Идентификатор умения (скила).

- **`rerollsLeft`** (`number`) - Число оставшихся попыток реролла.

- **`dices`** (`table`) - Текущая раскладка нароллившихся дайсов, ключи таблицы - номера слотов, значения таблицы - соответствующие им нароллившиеся значения.

- **`isCursed`** (`boolean`) - `true`, если предметы будут проклятыми.