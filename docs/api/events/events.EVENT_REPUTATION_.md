## EVENT_REPUTATION_DISAPPEARED

### Описание

```lua
EVENT_REPUTATION_DISAPPEARED
```

Событие присылается при удалении открытой репутации.

### Список параметров

- **`factionId`** (`FactionId`) - Идентификатор фракции.

---

## EVENT_REPUTATION_LEVEL_CHANGED

### Описание

```
EVENT_REPUTATION_LEVEL_CHANGED
```

Событие присылается при изменении уровня репутации.

### Список параметров

- **`factionId`** (`FactionId`) - Фракция.

---

## EVENT_REPUTATION_VALUE_CHANGED

### Описание

```
EVENT_REPUTATION_VALUE_CHANGED
```

Событие присылается при изменении значения репутации.

### Список параметров

- **`factionId`** (`FactionId`) - Фракция.

- **`delta`** (`number`) - Числовое изменение репутации (может быть как положительным, так и отрицательным числом).