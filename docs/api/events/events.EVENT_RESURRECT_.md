## EVENT_RESURRECT_REJECTED

### Описание

```
EVENT_RESURRECT_REJECTED
```

Запрос присылается, когда кто-то пытается оживить главного игрока, и игрок не успел ответить `avatar.ResurrectReply(accept)`.

### Список параметров

- **`resurrecterName`** (`WString`) - Имя юнита, пытавшегося оживить игрока.

- **`unitId`** (`ObjectId` | `nil`) - Id юнита, пытавшегося оживить игрока, если он есть в реплике.

---

## EVENT_RESURRECT_REQUESTED

### Описание

```
EVENT_RESURRECT_REQUESTED
```

Запрос присылается, когда кто-то пытается оживить главного игрока. В ответ игрок должен ответить `avatar.ResurrectReply(accept)`. Если игрок не успеет, то придёт `EVENT_RESURRECT_REJECTED`.

### Список параметров

- **`resurrecterName`** (`WString`) - Имя юнита, пытающегося оживить игрока.

- **`unitId`** (`ObjectId`) - Id юнита, пытавшегося оживить игрока.

- **`timeOutMs`** (`number`) - Сколько миллисекунд действует это приглашение.