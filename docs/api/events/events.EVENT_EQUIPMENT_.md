## EVENT_EQUIPMENT_ACTIVE_PRESET_CHANGED

### Описание

```
EVENT_EQUIPMENT_ACTIVE_PRESET_CHANGED
```

Событие посылается, когда меняется текущий активный набор ритуальных вещей.

### Список параметров

- **`value`** (`number`(`DUMMY_TYPE`)) - тип контейнера с экипировкой.

### Смотрите также

- [avatar.GetRitualActivePreset](/api/category/avatar/function.avatar.GetRitualActivePreset.md)
- [avatar.SetRitualActivePreset](/api/category/avatar/function.avatar.SetRitualActivePreset.md)

---

## EVENT_EQUIPMENT_DRESS_ENABLE_CHANGED

### Описание

```
EVENT_EQUIPMENT_DRESS_ENABLE_CHANGED
```

Событие посылается, когда главному или инспектируемому игроку становятся доступны ритуальные вещи.

### Список параметров

- **`unitId`** (`ObjectId`) - идентификатор игрока, у которого изменилось состояние.

- **`type`** (`number`(`DUMMY_TYPE`)) - тип контейнера с экипировкой.