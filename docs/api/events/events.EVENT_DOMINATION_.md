## EVENT_DOMINATION_OBJECTIVE_ADDED

### Описание

```
EVENT_DOMINATION_OBJECTIVE_ADDED
```

Событие присылается при появлении новой цели в режиме Domination.

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор цели.

### Смотрите также

- [dominationLib.GetObjectiveInfo](/api/category/dominationLib/function.dominationLib.GetObjectiveInfo.md)

---

## EVENT_DOMINATION_OBJECTIVE_DISABLED

### Описание

```
EVENT_DOMINATION_OBJECTIVE_DISABLED
```

Событие присылается при изменении состояния активности цели в режиме Domination.

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор цели.
- **`disabled`** (`boolean`) - Состояние активности цели.

---

## EVENT_DOMINATION_OBJECTIVE_OWNER_CHANGED

### Описание

```
EVENT_DOMINATION_OBJECTIVE_OWNER_CHANGED
```

Событие присылается при изменении владельца цели в режиме Domination.

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор цели.
- **`owner`** (`number`(`ENUM_DominationFightTeam`)) - Команда, доминирующая над данной целью. Значения соответствуют перечислению `ENUM_DominationFightTeam`.
- **`actualOwner`** (`number`(`ENUM_DominationFightTeam`)) - Команда, контролирующая данную цель. Значения соответствуют перечислению `ENUM_DominationFightTeam`.

### Смотрите также

- [ENUM_DominationFightTeam](/api/enums/enums.ENUM_DominationFightTeam.md)

---

## EVENT_DOMINATION_OBJECTIVE_PROGRESS_CHANGED

### Описание

```
EVENT_DOMINATION_OBJECTIVE_PROGRESS_CHANGED
```

Событие присылается при изменении прогресса захвата цели в режиме Domination.

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор цели.

- **`progress`** (`number`) - Текущий прогресс захвата цели.

---

## EVENT_DOMINATION_OBJECTIVE_PROGRESS_TO_CAPTURE_CHANGED

### Описание

```
EVENT_DOMINATION_OBJECTIVE_PROGRESS_TO_CAPTURE_CHANGED
```

Событие присылается при изменении количества очков, необходимых для захвата цели в режиме Domination.

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор цели.

- **`progressToCapture`** (`number`) - Текущее количество очков, необходимых для захвата цели.

---

## EVENT_DOMINATION_OBJECTIVE_RADIUS_CHANGED

### Описание

```
EVENT_DOMINATION_OBJECTIVE_RADIUS_CHANGED
```

Событие присылается при изменении радиуса захвата цели в режиме Domination.

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор цели.

- **`radius`** (`number`) - Радиус окрестности, в которой надо находиться для захвата цели.

---

## EVENT_DOMINATION_OBJECTIVE_REMOVED

### Описание

```
EVENT_DOMINATION_OBJECTIVE_REMOVED
```

Событие присылается при удалении цели в режиме Domination. Информацию по удаленной цели функцией `dominationLib.GetObjectiveInfo( id )` получить невозможно.

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор цели.

---

## EVENT_DOMINATION_OBJECTIVE_STATE_CHANGED

### Описание

```
EVENT_DOMINATION_OBJECTIVE_STATE_CHANGED
```

Событие присылается при изменении состояния цели в режиме Domination.

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор цели.

- **`state`** (`number`(`ENUM_DominationAreaState`)) - Текущее состояние цели. Значения соответствуют перечислению `ENUM_DominationAreaState`.

### Смотрите также

- [ENUM_DominationAreaState](/api/enums/enums.ENUM_DominationAreaState.md)

---

## EVENT_DOMINATION_OBJECTIVE_TEAM_CHANGED

### Описание

```
EVENT_DOMINATION_OBJECTIVE_TEAM_CHANGED
```

Событие присылается при изменении списка персонажей одной из команд, находящихся вблизи данной цели в режиме Domination.

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор цели.
- **`team`** (`number`(`ENUM_DominationFightTeam`)) - Команда, список персонажей которой изменился. Значения соответствуют перечислению `ENUM_DominationFightTeam`.

### Смотрите также

- [ENUM_DominationFightTeam](/api/enums/enums.ENUM_DominationFightTeam.md)

---

## EVENT_DOMINATION_OBJECTIVE_TIME_SWITCHED_CHANGED

### Описание

```
EVENT_DOMINATION_OBJECTIVE_TIME_SWITCHED_CHANGED
```

Событие присылается при изменении даты предыдущего захвата цели в режиме Domination.

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор цели.
- **`timeSwitched`** (`number`) - Дата предыдущего захвата цели.

---

## EVENT_DOMINATION_OBJECTIVE_TIME_TO_CAPTURE_CHANGED

### Описание

```
EVENT_DOMINATION_OBJECTIVE_TIME_TO_CAPTURE_CHANGED
```

Событие присылается при изменении прогнозируемого времени захвата цели в режиме Domination.

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор цели.
- **`timeToCapture`** (`number`) - Прогнозируемое время захвата в текущих условиях.