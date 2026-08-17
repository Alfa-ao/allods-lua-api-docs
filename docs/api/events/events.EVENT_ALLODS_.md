## EVENT_ALLODS_GOAL_ADDED

### Описание

```
EVENT_ALLODS_GOAL_ADDED
```

Событие приходит при добавлении целей (смене статуса на активные).

### Список параметров

- **`goals`** (`table`) - Список `GoalId`, индексированный с 0.

---

## EVENT_ALLODS_GOAL_CHANGED

### Описание

```
EVENT_ALLODS_GOAL_CHANGED
```

Событие приходит при изменении списка текущих целей аватара. Список целей можно получить при помощи функции `common.GetAllodsGoals`.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [common.GetAllodsGoals](/api/category/common/function.common.GetAllodsGoals.md)

---

## EVENT_ALLODS_GOAL_COMPLETED

### Описание

```
EVENT_ALLODS_GOAL_COMPLETED
```

Событие приходит при завершении целей (смене статуса на завершённые).

### Список параметров

- **`goals`** (`table`) - Список `GoalId`, индексированный с 0.