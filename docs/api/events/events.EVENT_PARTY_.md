## EVENT_PARTY_MEMBER_ACTIVE_PET_CHANGED

[<Badge type="warning" text="17.0.01.43" />](/index.md#17.0.0-..._MEMBER_ACTIVE_PET_CHANGED)

### Описание

```
EVENT_PARTY_MEMBER_ACTIVE_PET_CHANGED
```

Событие присылается каждый раз, когда у члена группы главного игрока меняется активный пет.

События взаимоисключающие.
- Если игрок в Группе: игра отправит только `EVENT_PARTY_MEMBER_ACTIVE_PET_CHANGED`. Рейдовое событие не сработает.
- Если игрок в Рейде: игра отправит только `EVENT_RAID_MEMBER_ACTIVE_PET_CHANGED`. Групповое событие не сработает.

### Список параметров

- **`playerId`** (`ObjectId`) - идентификатор члена группы.

### Смотрите также

- [EVENT_RAID_MEMBER_ACTIVE_PET_CHANGED](/api/events/events.EVENT_RAID_.md#event-raid-member-active-pet-changed)

---

## EVENT_PARTY_MEMBER_POSITION_UPDATED

### Описание

```
EVENT_PARTY_MEMBER_POSITION_UPDATED
```

Событие присылается при изменении координат игрока, состоящего в группе с основным игроком.

### Список параметров

- **`id`** (`ObjectId`) - Id игрока.