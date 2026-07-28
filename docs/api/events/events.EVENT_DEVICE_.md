---
outline: deep
---
## EVENT_DEVICES_CHANGED

### Описание

```
EVENT_DEVICES_CHANGED
```

Событие посылается раз в кадр, если за этот кадр в зоне действия аватара появляется или исчезает устройство (например улей или доска объявлений).

### Список параметров

- **`spawned`** (`table`) - Индексированная с 1 таблица идентификаторов (`ObjectId`) появившихся устройств.

- **`despawned`** (`table`) - Индексированная с 1 таблица идентификаторов (`ObjectId`) исчезнувших устройств.

---

## EVENT_DICE_CRAFT_CANCELED

### Описание

```
EVENT_DICE_CRAFT_CANCELED
```

Выключён режим крафтинга (создания вещей).

### Список параметров

- **`skillId`** (`SkillId`) - Id умения (скила).

---

## EVENT_DICE_CRAFT_CMD_FAILED

### Описание

```
EVENT_DICE_CRAFT_CMD_FAILED
```

Одна из команд, используемых для крафтинга, завершилась неудачей, состояние крафтинга не изменилось.

### Список параметров

- **`skillId`** (`SkillId`) - Id умения (скила).

- **`cmdType`** (`string`(`ENUM_DiceCraftCmdType_...`)) - Какая именно команда не выполнена. Значения соответствуют перечислению `ENUM_DiceCraftCmdType_...`.

---

## EVENT_DICE_CRAFT_FINISHED

### Описание

```
EVENT_DICE_CRAFT_FINISHED
```

Завершено создание вещи, режим крафтинга (создание вещей) остаётся включенным.

### Список параметров

- **`skillId`** (`SkillId`) - Id умения (скила).

---

## EVENT_DICE_CRAFT_NOT_ENOUGH_COMPONENTS

### Описание

```
EVENT_DICE_CRAFT_NOT_ENOUGH_COMPONENTS
```

Событие приходит, если не хватает компонентов.

### Список параметров

- **`skillId`** (`SkillId`) - Id умения (скила).

---

## EVENT_DICE_CRAFT_PREPARED

### Описание

```
EVENT_DICE_CRAFT_PREPARED
```

Включён режим выбора рецептов крафтинга (создание вещей) - приходит, когда включается крафтинг или мини-игра крафтинга завершилась без выхода из крафтинга (если мини-игра завершилась выходом из крафтинга - приходит `EVENT_DICE_CRAFT_CANCELED`).

### Список параметров

- **`skillId`** (`SkillId`) - Id умения (скила).

- **`isInitial`** (`boolean`) - `true`, если событие пришло при включении режима крафтинга; `false` - при завершении мини-игры.

- **`tool`** (`ObjectId`) - Id инструмента, использованного для старта мини-игры.

## Смотрите также

- [EVENT_DICE_CRAFT_CANCELED](#event-dice-craft-canceled)

---

## EVENT_DICE_CRAFT_RECIPES_CHANGED

### Описание

```
EVENT_DICE_CRAFT_RECIPES_CHANGED
```

Изменился список рецептов.

### Список параметров

- **`skillId`** (`SkillId`) - Id умения (скила).

## Смотрите также

- [craft.DiceCraftGetRecipes](/api/category/craft/function.craft.DiceCraftGetRecipes.md)

---

## EVENT_DICE_CRAFT_SCORE_CHANGED

### Описание

```
EVENT_DICE_CRAFT_SCORE_CHANGED
```

Изменился уровень умения крафтинга.

### Список параметров

- **`skillId`** (`SkillId`) - Id умения (скила).

---

## EVENT_DICE_CRAFT_SLOT_CHANGED

### Описание

```
EVENT_DICE_CRAFT_SLOT_CHANGED
```

Изменилось содержимое одного из слотов (добавлен/убран/заменён предмет).

### Список параметров

- **`skillId`** (`SkillId`) - Id умения (скила).

- **`slot`** (`number`) - Номер слота.

- **`itemId`** (`ObjectId` | `nil`) - `nil`, если слот пуст; иначе идентификатор предмета.

## Смотрите также

- [craft.DiceCraftGetPlacedItems](/api/category/craft/function.craft.DiceCraftGetPlacedItems.md)

---

## EVENT_DICE_CRAFT_STATUS_CHANGED

### Описание

```
EVENT_DICE_CRAFT_STATUS_CHANGED
```

Обновилась информация о состоянии текущего сеанса крафтинга (был очередной реролл).

### Список параметров

- **`skillId`** (`SkillId`) - Id умения (скила).

- **`rerollsLeft`** (`number`) - Число оставшихся попыток реролла.

- **`dices`** (`table`) - Текущая раскладка нароллившихся дайсов, ключи таблицы - номера слотов, значения таблицы - соответствующие им нароллившиеся значения.

- **`isCurced`** (`boolean`) - `true`, если предметы будут проклятыми.