## EVENT_RAID_ALREADY_IN

### Описание

```lua
EVENT_RAID_ALREADY_IN
```

Событие присылается в случае неудачной попытки приглашения в рейд (игрок уже в рейде).

### Список параметров

- **`declinerName`** (`WString`) - Имя приглашаемого игрока.

---

## EVENT_RAID_APPEARED

### Описание

```lua
EVENT_RAID_APPEARED
```

Событие присылается на появление рейда. Присылается не только на действительное создание рейда, но и при вхождении игрока в состав уже существующего.

### Список параметров

Параметры отсутствуют.

---

## EVENT_RAID_CANT_ACCEPT

### Описание

```lua
EVENT_RAID_CANT_ACCEPT
```

Событие присылается в случае невозможности вступить в рейд (после вызова `raid.Accept`).

### Список параметров

Параметры отсутствуют.

---

## EVENT_RAID_CANT_ENTER_MAP

### Описание

```lua
EVENT_RAID_CANT_ENTER_MAP
```

Событие присылается в случае невозможности попасть на локацию, так как игрок не вступил в рейд.

### Список параметров

- **`mapName`** (`WString` | `nil`) - Название локации, если возможно получить.

---

## EVENT_RAID_CHANGED

### Описание

```lua
EVENT_RAID_CHANGED
```

Событие присылается на изменение состава рейда (включая создание и роспуск).

### Список параметров

Параметры отсутствуют.

---

## EVENT_RAID_DECLINE

### Описание

```lua
EVENT_RAID_DECLINE
```

Событие присылается в случае неудачной попытки приглашения в рейд.

### Список параметров

- **`declinerName`** (`WString`) - Имя приглашаемого игрока.

---

## EVENT_RAID_DECLINE_BUSY

### Описание

```lua
EVENT_RAID_DECLINE_BUSY
```

Событие присылается в случае неудачной попытки приглашения в рейд (игрок занят).

### Список параметров

- **`declinerName`** (`WString`) - Имя приглашаемого игрока.

---

## EVENT_RAID_DECLINE_IGNORED

### Описание

```lua
EVENT_RAID_DECLINE_IGNORED
```

Событие присылается при невозможности приглашения в рейд по причине игнора.

### Список параметров

- **`declinerName`** (`WString`) - Имя приглашаемого игрока.

---

## EVENT_RAID_DISAPPEARED

### Описание

```lua
EVENT_RAID_DISAPPEARED
```

Событие присылается на исчезновение рейда. Присылается не только на роспуск рейда, но и при выходе игрока из состава существующего.

### Список параметров

Параметры отсутствуют.

---

## EVENT_RAID_ENTER_VARS_MAP_UNAVALIABLE

### Описание

```lua
EVENT_RAID_ENTER_VARS_MAP_UNAVALIABLE
```

Событие присылается при попытке войти в инстанс, когда в него не пустят.

### Список параметров

- **`mapName`** (`WString`) - Имя карты.
- **`variables`** (`table`) - Список боссов, из-за которых не пустят в инстанс.

---

## EVENT_RAID_ENTER_VARS_MAP_WARNING

### Описание

```lua
EVENT_RAID_ENTER_VARS_MAP_WARNING
```

Событие присылается при попытке войти в инстанс, когда прогресс инстанса не соответствует прогрессу сохранения.

### Список параметров

- **`mapName`** (`WString`) - Имя карты.
- **`variables`** (`table`) - Список боссов, из-за которых происходит расхождение.

---

## EVENT_RAID_FAILED

### Описание

```lua
EVENT_RAID_FAILED
```

Событие присылается в случае невозможности выполнить указанную операцию с рейдом.

### Список параметров

- **`sysReason`** (`string`(`ENUM_RAID_FAILED_*`)) - Строковое описание причины. Значения соответствуют перечислению `ENUM_RAID_FAILED_*`.

---

## EVENT_RAID_INVITE

### Описание

```lua
EVENT_RAID_INVITE
```

Событие присылается в случае получения приглашения в рейд.

### Список параметров

- **`inviterName`** (`WString`) - Имя приглашающего игрока.
- **`inviterShardName`** (`WString`) - Имя шарда приглашающего игрока.

---

## EVENT_RAID_INVITE_END

### Описание

```lua
EVENT_RAID_INVITE_END
```

Событие присылается в случае исчезновения приглашения в рейд. Оно может истечь по времени, быть принято или отклонено.

### Список параметров

Параметры отсутствуют.

---

## EVENT_RAID_LEADER_CHANGED

### Описание

```lua
EVENT_RAID_LEADER_CHANGED
```

Событие присылается в случае изменения лидера рейда.

### Список параметров

Параметры отсутствуют.

---

## EVENT_RAID_LEADER_HELPER_CHANGED

[<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-UniqueId) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-UniqueId) <Badge type="warning" text="Process" />

### Описание

```lua
EVENT_RAID_LEADER_HELPER_CHANGED
```

Событие присылается в случае изменения помощника лидера рейда.

### Список параметров

- **`oldLeaderHelper`** (`UniqueId`) - Уникальный идентификатор аватара, который был помощником лидера рейда (или `nil`, если до этого не назначался).
- **`newLeaderHelper`** (`UniqueId`) - Уникальный идентификатор аватара, который стал помощником лидера рейда (или `nil`, если теперь помощника лидера рейда нет).

---

## EVENT_RAID_LOOT_MASTER_CHANGED

[<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-UniqueId) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-UniqueId) <Badge type="warning" text="Process" />

### Описание

```lua
EVENT_RAID_LOOT_MASTER_CHANGED
```

Событие присылается в случае изменения ответственного за лут рейда.

### Список параметров

- **`oldLootMaster`** (`UniqueId`) - Уникальный идентификатор аватара, который был ответственным за лут рейда (или `nil`, если до этого не назначался).
- **`newLootMaster`** (`UniqueId`) - Уникальный идентификатор аватара, который стал ответственным за лут рейда (или `nil`, если теперь ответственного за лут рейда нет).

---

## EVENT_RAID_MEMBER_ADDED

[<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-UniqueId) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-UniqueId) <Badge type="warning" text="Process" />

### Описание

```lua
EVENT_RAID_MEMBER_ADDED
```

Событие присылается в случае появления игрока в отряде.

### Список параметров

- **`name`** (`WString`) - Имя игрока.
- **`id`** (`ObjectId` | `nil`) - Идентификатор игрока, если доступен.
- **`uniqueId`** (`UniqueId` | `nil`) - Уникальный постоянный идентификатор персонажа.

---

## EVENT_RAID_MEMBER_CHANGED

[<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-UniqueId) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-UniqueId) <Badge type="warning" text="Process" />

### Описание

```lua
EVENT_RAID_MEMBER_CHANGED
```

Событие присылается в случае изменения одного или более параметров члена рейда.

### Список параметров

- **`name`** (`WString`) - Имя аватара, который изменился.
- **`id`** (`ObjectId` | `nil`) - Идентификатор игрока, если доступен.
- **`uniqueId`** (`UniqueId` | `nil`) - Уникальный постоянный идентификатор персонажа.

### Смотрите также

- [RAID_MEMBER_STATE_*](/api/constants/constants.RAID_MEMBER_STATE.md)

---

## EVENT_RAID_MEMBER_POSITION_UPDATED

### Описание

```lua
EVENT_RAID_MEMBER_POSITION_UPDATED
```

Событие присылается при изменении координат игрока, состоящего в отряде с основным игроком.

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор игрока.

---

## EVENT_RAID_MEMBER_REMOVED

[<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-UniqueId) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-UniqueId) <Badge type="warning" text="Process" />

### Описание

```lua
EVENT_RAID_MEMBER_REMOVED
```

Событие присылается в случае удаления или ухода игрока из отряда.

### Список параметров

- **`name`** (`WString`) - Имя игрока.
- **`id`** (`ObjectId` | `nil`) - Идентификатор игрока, если доступен.
- **`uniqueId`** (`UniqueId` | `nil`) - Уникальный постоянный идентификатор персонажа.

---

## EVENT_RAID_SAVE_MAP_QUESTION

### Описание

```lua
EVENT_RAID_SAVE_MAP_QUESTION
```

Событие присылается в случае захода в существующий рейдовый инстанс как предложение о сохранении на этой карте. Ответ отправляется через `raid.MapSaveResponse`.

### Список параметров

- **`timeoutMs`** (`number`) - Таймаут на ответ в миллисекундах.
- **`mapName`** (`WString` | `nil`) - Название локации, если возможно получить.

#### Смотрите также

- [raid.MapSaveResponse](/api/category/raid/function.raid.MapSaveResponse.md)