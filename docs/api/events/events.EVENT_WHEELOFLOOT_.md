## EVENT_WHEELOFLOOT_ADDED

### Описание
```
EVENT_WHEELOFLOOT_ADDED
```
Событие присылается при добавлении нового колеса лута.

### Список параметров
- **`wheelId`** (`number`) - идентификатор колеса лута.

---

## EVENT_WHEELOFLOOT_CHANGED

### Описание
```
EVENT_WHEELOFLOOT_CHANGED
```
Событие присылается при изменении колеса лута.

### Список параметров
- **`wheelId`** (`number`) - идентификатор колеса лута.

---

## EVENT_WHEELOFLOOT_ITEMS

### Описание
```
EVENT_WHEELOFLOOT_ITEMS
```
Событие присылается в ответ на запрос предметов колеса лута.

### Список параметров
- **`wheelId`** (`number`) - идентификатор колеса лута.

- **`slots`** (`table`) - предметы в слотах разрола (`GameId`).

- **`prizes`** (`table`) - предметы призов (`GameId`).
(HELP)
---

## EVENT_WHEELOFLOOT_REMOVED

### Описание
```
EVENT_WHEELOFLOOT_REMOVED
```
Событие присылается при удалении колеса лута.

### Список параметров
- **`wheelId`** (`number`) - идентификатор колеса лута.