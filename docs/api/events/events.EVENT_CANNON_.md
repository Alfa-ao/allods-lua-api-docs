## EVENT_CANNON_SHOT_FINISHED

### Описание

```
EVENT_CANNON_SHOT_FINISHED
```

Событие посылается в момент попадания выстрела из пушки в цель (или просто окончании полета снаряда).

### Список параметров

- **`id`** (`ObjectId`) - идентификатор устройства.
- **`target`** (`ObjectId`| `nil`) - идентификатор цели (интерактивный объект).

### Примеры

#### Обработка события

```lua
function OnCannonShotFinished( eventData )
    local deviceId = eventData.id
    local targetId = eventData.target
end
```

---

## EVENT_CANNON_SHOT_PREPARATION_STARTED

### Описание

```
EVENT_CANNON_SHOT_PREPARATION_STARTED
```

Событие посылается в момент начала каста выстрела из пушки.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор устройства (пушки).
- **`preparationTimeMs`** (`number`) - время подготовки выстрела в миллисекундах.

### Примеры

#### Обработка события

```lua
function OnCannonShotPreparationStarted( eventData )
    local deviceId = eventData.id
    local preparationTime = eventData.preparationTimeMs
end
```

---

## EVENT_CANNON_SHOT_STARTED

### Описание

```
EVENT_CANNON_SHOT_STARTED
```

Событие посылается в момент выстрела из пушки. В этот момент уже известно, попала пушка в цель или нет. Если промазала, то `target` равен `nil`.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор устройства (тип устройства `USDEV_CANNON`).
- **`target`** (`ObjectId`| `nil`) - идентификатор цели (интерактивный объект).

### Примеры

#### Обработка события

```lua
function OnCannonShotStarted( eventData )
    local deviceId = eventData.id
    local targetId = eventData.target
    
    if targetId == nil then
        -- Обработка промаха
    end
end
```

---

## EVENT_CANNON_TARGET_CHANGE

### Описание

```
EVENT_CANNON_TARGET_CHANGE
```

Событие посылается при изменении цели пушки, управляемой игроком (любого орудия с активным прицелом).

### Список параметров

- **`target`** (`number`) - цель. Значения соответствуют перечислению `CANON_TARGET_...`.

```
- `CANON_TARGET_NONE` - в прицеле нет враждебных целей, либо до них слишком далеко.
- `CANON_TARGET_COMMON` - в прицеле есть враждебные цели.
- `CANON_TARGET_HEADSHOT` - прицел направлен на уязвимую точку враждебной цели.
```

### Примеры

#### Обработка события

```lua
function OnCannonTargetChange( eventData )
    local targetState = eventData.target
    
    if targetState == CANON_TARGET_HEADSHOT then
        -- Прицел наведен на уязвимую точку
    end
end
```

---

## EVENT_CANNOT_ATTACH_WIDGET_3D

### Описание

```
EVENT_CANNOT_ATTACH_WIDGET_3D
```

Событие посылается, если не удалось привязать `Widget3D` к определенному объекту.

### Список параметров

- **`objectId`** (`ObjectId`) - идентификатор объекта (юнит или устройство).

### Примеры

#### Обработка события

```lua
function OnCannotAttachWidget3D( eventData )
    local objectId = eventData.objectId
    -- Логирование или обработка ошибки привязки виджета
end
```