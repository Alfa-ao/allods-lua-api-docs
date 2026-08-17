## EVENT_BATTLEGROUND_CHECKPOINT_ADDED

### Описание

```
EVENT_BATTLEGROUND_CHECKPOINT_ADDED
```

Событие присылается каждый раз, когда появляется информация о новой контрольной точке баттлграунда.

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор появившейся контрольной точки.

---

## EVENT_BATTLEGROUND_CHECKPOINT_REMOVED

### Описание

```
EVENT_BATTLEGROUND_CHECKPOINT_REMOVED
```

Событие присылается каждый раз, когда информация о контрольной точке баттлграунда становится недоступной (контрольная точка по каким-либо причинам удаляется).

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор контрольной точки.

---

## EVENT_BATTLEGROUND_CHECKPOINTS_CHANGED

### Описание

```
EVENT_BATTLEGROUND_CHECKPOINTS_CHANGED
```

Событие присылается каждый раз, когда изменяется информация о контрольных точках баттлграунда (добавляются-удаляются, меняется состояние и т.п.).

### Список параметров

Параметры отсутствуют.

---

## EVENT_BATTLEGROUND_CHECKPOINT_STATE_CHANGED

### Описание

```
EVENT_BATTLEGROUND_CHECKPOINT_STATE_CHANGED
```

Событие присылается каждый раз, когда меняется состояние контрольной точки баттлграунда.

### Список параметров

- **`checkpointId`** (`ObjectId`) - Идентификатор контрольной точки, чьё состояние изменилось.

### Смотрите также

- [battleground.GetCheckpointInfo](/api/category/battleground/function.battleground.GetCheckpointInfo.md)