## EVENT_INVENTORY_CHANGED

### Описание

```
EVENT_INVENTORY_CHANGED
```

Событие присылается при изменении содержимого инвентаря главного персонажа.

### Список параметров

Параметры отсутствуют.

---

## EVENT_INVENTORY_GEMS_CHANGED

### Описание

```
EVENT_INVENTORY_GEMS_CHANGED
```

Событие присылается при смене гемов в дереве талантов души.

### Список параметров

Параметры отсутствуют.

---

## EVENT_INVENTORY_GEMS_SLOT_ADDED

### Описание

```
EVENT_INVENTORY_GEMS_SLOT_ADDED
```

Событие присылается при добавлении слота для гемов в дереве талантов души.

### Список параметров

- **`slot`** (`number`) - индекс слота.

---

## EVENT_INVENTORY_GEMS_SLOT_REMOVED

### Описание

```
EVENT_INVENTORY_GEMS_SLOT_REMOVED
```

Событие присылается при удалении слота для гемов в дереве талантов души.

### Список параметров

- **`slot`** (`number`) - индекс слота.

---

## EVENT_INVENTORY_OVERFLOW_CHANGED

### Описание

```
EVENT_INVENTORY_OVERFLOW_CHANGED
```

Событие присылается при изменении содержимого переполненной сумки главного персонажа.

### Список параметров

Параметры отсутствуют.

---

## EVENT_INVENTORY_OVERFLOW_SLOT_ADDED

### Описание

```
EVENT_INVENTORY_OVERFLOW_SLOT_ADDED
```

Событие присылается при появлении нового слота в переполненной сумке главного персонажа.

### Список параметров

- **`slot`** (`number`) - индекс слота в сумке.

---

## EVENT_INVENTORY_OVERFLOW_SLOT_REMOVED

### Описание

```
EVENT_INVENTORY_OVERFLOW_SLOT_REMOVED
```

Событие присылается при пропаже слота в переполненной сумке главного персонажа.

### Список параметров

- **`slot`** (`number`) - индекс слота в сумке.

---

## EVENT_INVENTORY_SIZE_CHANGED

### Описание

```
EVENT_INVENTORY_SIZE_CHANGED
```

Событие присылается при изменении размера инвентаря главного персонажа.

### Список параметров

Параметры отсутствуют.

---

## EVENT_INVENTORY_SLOT_CHANGED

### Описание

```
EVENT_INVENTORY_SLOT_CHANGED
```

Событие присылается при изменении содержимого слота инвентаря главного персонажа.

### Список параметров

- **`tabIndex`** (`number`) - индекс вкладки инвентаря.

- **`slotIndex`** (`number`) - индекс слота во вкладке.

- **`itemId`** (`ObjectId`) - идентификатор предмета.

### Смотрите также

- [avatar.InventoryGetPocketInfo](/api/category/avatar/function.avatar.InventoryGetPocketInfo.md)