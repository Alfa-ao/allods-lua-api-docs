## EVENT_BULLETIN_BOARD_CHANGED

Событие присылается, если изменился известный набор объявлений на доске.

### Описание

```
EVENT_BULLETIN_BOARD_CHANGED
```

### Список параметров

Параметры отсутствуют.

---

## EVENT_BULLETIN_BOARD_OPERATION_IN_PROGRESS_CHANGED

Событие присылается, если изменилось состояние операции с доской объявлений.

### Описание

```
EVENT_BULLETIN_BOARD_OPERATION_IN_PROGRESS_CHANGED
```

### Список параметров

- **`postId`** (`number`) - идентификатор объявления.

---

## EVENT_BULLETIN_BOARD_POST_ADDED

Событие присылается, если на доске объявлений появилось объявление.

### Описание

```
EVENT_BULLETIN_BOARD_POST_ADDED
```

### Список параметров

- **`id`** (`number`) - идентификатор объявления.

---

## EVENT_BULLETIN_BOARD_POST_CHANGED

Событие присылается, если на доске объявлений изменилось поле объявление (уровень, онлайн, зона, время).

### Описание

```
EVENT_BULLETIN_BOARD_POST_CHANGED
```

### Список параметров

- **`id`** (`number`) - идентификатор объявления.