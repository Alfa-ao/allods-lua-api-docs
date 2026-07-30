## EVENT_LFG_ACTION_FAIL

### Описание

```lua
EVENT_LFG_ACTION_FAIL
```

Событие приходит, когда не удалось совершить действие, связанное с LFG.

### Список параметров

- **`cause`** (`number`(`ENUM_LfgActionFail`)) - причина сбоя. Значения соответствуют перечислению `ENUM_LfgActionFail`.

## Смотрите также

- [ENUM_LfgActionFail](/api/enums/enums.ENUM_LfgActionFail.md)

---

## EVENT_LFG_DEPART_AVAILABLE_CHANGED

### Описание

```lua
EVENT_LFG_DEPART_AVAILABLE_CHANGED
```

Событие посылается при изменении возможности для игрока отправиться на текущую целевую локацию, то есть стали выполнены все предикаты для отправки в локацию, либо наоборот, какой-то из предикатов перестал выполняться.

### Список параметров

- **`available`** (`boolean`) - возможность отправки на текущую целевую локацию.

## Смотрите также

- [LfgDestinationId](/api/types/LfgDestinationId.md)
- [lfgLib.GetDepartRequirements](/api/category/lfgLib/function.lfgLib.GetDepartRequirements.md)

---

## EVENT_LFG_DESTINATION_AVAILABLE_CHANGED

### Описание

```lua
EVENT_LFG_DESTINATION_AVAILABLE_CHANGED
```

Событие посылается при изменении доступности для игрока целевой локации, то есть локация стала доступна, либо наоборот не доступна по условиям входа.

### Список параметров

- **`destination`** (`LfgDestinationId`) - идентификатор целевой локации.

## Смотрите также

- [LfgDestinationId](/api/types/LfgDestinationId.md)
- [lfgLib.IsDestinationAvailable](/api/category/lfgLib/function.lfgLib.IsDestinationAvailable.md)
- [lfgLib.GetDestinationRequirements](/api/category/lfgLib/function.lfgLib.GetDestinationRequirements.md)

---

## EVENT_LFG_DESTINATION_CHANGED

### Описание

```lua
EVENT_LFG_DESTINATION_CHANGED
```

Событие посылается при смене цели (пункта назначения) для сбора группы.

### Список параметров

- **`destination`** (`LfgDestinationId`) - пункт назначения.

## Смотрите также

- [LfgDestinationId](/api/types/LfgDestinationId.md)

---

## EVENT_LFG_DESTINATIONS_LIST_CHANGED

### Описание

```lua
EVENT_LFG_DESTINATIONS_LIST_CHANGED
```

Событие посылается, когда изменился список открытых активностей в LFG.

### Список параметров

Параметры отсутствуют.

## Смотрите также

- [lfgLib.EnableReplicateDestinations](/api/category/lfgLib/function.lfgLib.EnableReplicateDestinations.md)

---

## EVENT_LFG_DESTINATION_VISITS_CHANGED

### Описание

```lua
EVENT_LFG_DESTINATION_VISITS_CHANGED
```

Событие посылается каждый раз, когда для какой-либо LFG-активности меняется информация о количестве посещений за сегодняшний день аватаром.

### Список параметров

- **`destination`** (`LfgDestinationId`) - пункт назначения.

## Смотрите также

- [LfgDestinationId](/api/types/LfgDestinationId.md)
- [EVENT_MATCH_MAKING_EVENT_VISITS_CHANGED](/api/events/events.EVENT_MATCH_MAKING_.md#event_match_making_event_visits_changed)

---

## EVENT_LFG_JOIN

### Описание

```lua
EVENT_LFG_JOIN
```

Событие приходит, когда игрок запустил LFG и подал заявку на подбор группы.

### Список параметров

- **`destination`** (`LfgDestinationId`) - пункт назначения.

- **`roles`** (`table`) - список вакантных ролей в группе. Значения соответствуют перечислению `ENUM_LFGRole`.

## Смотрите также

- [LfgDestinationId](/api/types/LfgDestinationId.md)
- [ENUM_LFGRole](/api/enums/enums.ENUM_LFGRole.md)

---

## EVENT_LFG_LEAVE

### Описание

```lua
EVENT_LFG_LEAVE
```

Событие приходит, когда игрок ушел из LFG и отказался от подбора группы.

### Список параметров

Параметры отсутствуют.

---

## EVENT_LFG_VOTE

### Описание

```lua
EVENT_LFG_VOTE
```

Событие посылается при начале голосования.

### Список параметров

- **`initiator`** (`WString`) - имя игрока, активировавшего опрос.

- **`type`** (`number`(`ENUM_LFGVoteType`)) - предмет опроса. Значения соответствуют перечислению `ENUM_LFGVoteType`.

- **`destination`** (`LfgDestinationId` | `nil`) - пункт назначения.

- **`endTimeMs`** (`number`) - время окончания опроса.

- **`roles`** (`table`) - список вакантных ролей в группе. Значения соответствуют перечислению `ENUM_LFGRole`.

## Смотрите также

- [ENUM_LFGRole](/api/enums/enums.ENUM_LFGRole.md)

- [ENUM_LFGVoteType](/api/enums/enums.ENUM_LFGVoteType.md)

---

## EVENT_LFG_VOTE_TERMINATE

### Описание

```lua
EVENT_LFG_VOTE_TERMINATE
```

Событие посылается при сорванном голосовании.

### Список параметров

Параметры отсутствуют.