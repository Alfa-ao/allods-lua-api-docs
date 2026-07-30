## EVENT_PLAYER_ASTRAL_UNLOCK_CHANGED

### Описание

```
EVENT_PLAYER_ASTRAL_UNLOCK_CHANGED
```

Событие присылается при изменении уровня астральной разблокировки игрока.

### Список параметров

- **`playerId`** (`ObjectId`) - идентификатор игрока.

---

## EVENT_PLAYER_GEAR_SCORE_CHANGED

### Описание

```
EVENT_PLAYER_GEAR_SCORE_CHANGED
```

Приходит, если изменился текущий рейтинг экипировки персонажа. Приходит только для главного и инспектируемого игроков.

### Список параметров

- **`playerId`** (`ObjectId`) - идентификатор игрока.

---

## EVENT_PLAYER_GREAT_CHANGED

### Описание

```
EVENT_PLAYER_GREAT_CHANGED
```

Приходит, если изменилось состояние величия игрока.

### Список параметров

- **`playerId`** (`ObjectId`) - идентификатор игрока.

---

## EVENT_PLAYER_TITLE_CHANGED

### Описание

```
EVENT_PLAYER_TITLE_CHANGED
```

Событие присылается при изменении титула основного игрока или любого игрока, находящегося в области видимости.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор юнита.

## Смотрите также

- [unit.GetPlayerTitle](/api/category/unit/function.unit.GetPlayerTitle.md)

---

## EVENT_PLAYER_TITLES_CHANGED

### Описание

```
EVENT_PLAYER_TITLES_CHANGED
```

Событие присылается при изменении списка доступных титулов персонажа, находящегося в области видимости.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор персонажа.

## Смотрите также

- [unit.GetPlayerTitle](/api/category/unit/function.unit.GetPlayerTitle.md)