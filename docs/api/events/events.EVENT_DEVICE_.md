## EVENT_DEVICE_ACTION_EFFECTIVENESS_CHANGED

### Описание

```lua
EVENT_DEVICE_ACTION_EFFECTIVENESS_CHANGED
```

Событие посылается каждый раз, когда у одного из действий используемого устройства (например, выстрел огнём у пушки) изменилась эффективность.

Эффективность действия определяется внутренней логикой клиента. Если действие стало неэффективным, то это означает, что его применение в данный момент времени нецелесообразно, так как не принесет ожидаемого положительного результата. Например, можно выстрелить из пушки даже если цель находится слишком далеко, но снаряд не долетит до цели и такое действие будет неэффективным.

По умолчанию принято считать, что действие всегда эффективно, до тех пор пока не придет событие, утверждающее обратное.

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор устройства.

- **`action`** (`number`) - Номер экшена.

- **`isEffective`** (`boolean`) - Указывает, что действие стало неэффективным.

### Примеры

```lua
function OnDeviceActionEffectivenessChanged( eventData )
    if eventData.isEffective then
        LogInfo( "Действие устройства ", eventData.id, " снова эффективно" )
    else
        LogInfo( "Действие ", eventData.action, " устройства ", eventData.id, " стало неэффективным" )
    end
end

common.RegisterEventHandler( OnDeviceActionEffectivenessChanged, "EVENT_DEVICE_ACTION_EFFECTIVENESS_CHANGED" )
```

---

## EVENT_DEVICE_ACTIVE_ACTION_CHANGED

### Описание

```lua
EVENT_DEVICE_ACTIVE_ACTION_CHANGED
```

Событие посылается каждый раз, когда у используемого устройства (например, руль, пушка на корабле) изменилось активное действие.

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор устройства.

### Примеры

```lua
function OnDeviceActiveActionChanged( eventData )
    LogInfo( "Активное действие устройства ", eventData.id, " изменено" )
end

common.RegisterEventHandler( OnDeviceActiveActionChanged, "EVENT_DEVICE_ACTIVE_ACTION_CHANGED" )
```

---

## EVENT_DEVICE_COOLDOWN_FINISHED

### Описание

```lua
EVENT_DEVICE_COOLDOWN_FINISHED
```

Событие посылается каждый раз, когда у одного экшена используемого устройства (например, выстрел огнём из пушки) закончился кулдаун.

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор устройства.

- **`action`** (`number`) - Номер экшена.

### Примеры

```lua
function OnDeviceCooldownFinished( eventData )
    LogInfo( "Кулдаун действия ", eventData.action, " устройства ", eventData.id, " завершен" )
end

common.RegisterEventHandler( OnDeviceCooldownFinished, "EVENT_DEVICE_COOLDOWN_FINISHED" )
```

---

## EVENT_DEVICE_COOLDOWNS_ENABLE_CHANGED

### Описание

```lua
EVENT_DEVICE_COOLDOWNS_ENABLE_CHANGED
```

Событие посылается каждый раз, когда у какого-либо действия используемого устройства (например, поворот вправо у руля) меняется состояние доступности.

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор устройства.

### Примеры

```lua
function OnDeviceCooldownsEnableChanged( eventData )
    LogInfo( "Состояние доступности действий устройства ", eventData.id, " изменено" )
end

common.RegisterEventHandler( OnDeviceCooldownsEnableChanged, "EVENT_DEVICE_COOLDOWNS_ENABLE_CHANGED" )
```

---

## EVENT_DEVICE_COOLDOWN_STARTED

### Описание

```lua
EVENT_DEVICE_COOLDOWN_STARTED
```

Событие посылается каждый раз, когда у одного экшена используемого устройства (например, выстрел огнём у пушки) начинается кулдаун.

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор устройства.

- **`action`** (`number`) - Номер экшена.

### Примеры

```lua
function OnDeviceCooldownStarted( eventData )
    LogInfo( "Кулдаун действия ", eventData.action, " устройства ", eventData.id, " начался" )
end

common.RegisterEventHandler( OnDeviceCooldownStarted, "EVENT_DEVICE_COOLDOWN_STARTED" )
```

---

## EVENT_DEVICE_DAMAGE_RECEIVED

[<Badge type="warning" text="^18.0.0" />](/index.md#18.0.0-EVENT_*) <Badge type="tip" text="Pre-Release" />

### Описание

```lua
EVENT_DEVICE_DAMAGE_RECEIVED
```

Событие присылается при нанесении повреждения устройству. Для срабатывания данного события требуется указание идентификатора объекта `ObjectId` (`number`) в качестве параметра функции `common.RegisterEventHandler`.

### Список параметров

Параметры идентичны параметрам события `EVENT_UNIT_DAMAGE_RECEIVED`.

### Примеры

```lua
function OnDeviceDamageReceived( eventData )
    LogInfo( "Устройство ", eventData.id, " получило повреждение" )
end

common.RegisterEventHandler( OnDeviceDamageReceived, "EVENT_DEVICE_DAMAGE_RECEIVED" )
```

## Смотрите также

- [EVENT_UNIT_DAMAGE_RECEIVED](/api/events/events.EVENT_UNIT_.md#event-unit-damage-received)
- [common.RegisterEventHandler](/api/category/common/function.common.RegisterEventHandler.md)

---

## EVENT_DEVICE_DEAD_CHANGED

### Описание

```lua
EVENT_DEVICE_DEAD_CHANGED
```

Событие присылается при изменении статуса смерти устройства (работоспособно или уже уничтожено).

### Список параметров

- **`deviceId`** (`ObjectId`) - Идентификатор устройства.

### Примеры

```lua
function OnDeviceDeadChanged( eventData )
    LogInfo( "Статус смерти устройства ", eventData.deviceId, " изменен" )
end

common.RegisterEventHandler( OnDeviceDeadChanged, "EVENT_DEVICE_DEAD_CHANGED" )
```

---

## EVENT_DEVICE_OFFLINE_CHANGED

### Описание

```lua
EVENT_DEVICE_OFFLINE_CHANGED
```

Событие посылается каждый раз, когда используемое устройство (например, руль, пушка на корабле) включается или выключается.

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор устройства.

### Примеры

```lua
function OnDeviceOfflineChanged( eventData )
    LogInfo( "Состояние включения устройства ", eventData.id, " изменено" )
end

common.RegisterEventHandler( OnDeviceOfflineChanged, "EVENT_DEVICE_OFFLINE_CHANGED" )
```

---

## EVENT_DEVICE_OFFLINE_REASON

### Описание

```lua
EVENT_DEVICE_OFFLINE_REASON
```

Событие посылается каждый раз, когда используемое устройство (например, руль, пушка на корабле) выключается. Содержит причину.

::: info Перечисления

Значения соответствуют перечислению `ENUM_TurnReason_...`.

:::

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор устройства.

- **`sysReason`** (`string`(`ENUM_TurnReason_...`)) - Причина, по которой устройство выключено. Значения соответствуют перечислению `ENUM_TurnReason_...`.

### Примеры

```lua
function OnDeviceOfflineReason( eventData )
    LogInfo( "Устройство ", eventData.id, " выключено по причине: ", eventData.sysReason )
end

common.RegisterEventHandler( OnDeviceOfflineReason, "EVENT_DEVICE_OFFLINE_REASON" )
```

## Смотрите также

- [ENUM_TurnReason](/api/enums/enums.ENUM_TurnReason.md)

---

## EVENT_DEVICE_RELATED_QUESTS_CHANGED

### Описание

```lua
EVENT_DEVICE_RELATED_QUESTS_CHANGED
```

Событие приходит, если изменился список заданий, связанных с устройством.

### Список параметров

- **`deviceId`** (`ObjectId`) - Идентификатор устройства.

### Примеры

```lua
function OnDeviceRelatedQuestsChanged( eventData )
    LogInfo( "Список заданий, связанных с устройством ", eventData.deviceId, " изменен" )
end

common.RegisterEventHandler( OnDeviceRelatedQuestsChanged, "EVENT_DEVICE_RELATED_QUESTS_CHANGED" )
```

---

## EVENT_DEVICE_ZERO_SPEED

### Описание

```lua
EVENT_DEVICE_ZERO_SPEED
```

Событие посылается при попытке повернуть руль на нулевой скорости.

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор руля (устройства).

### Примеры

```lua
function OnDeviceZeroSpeed( eventData )
    LogInfo( "Попытка повернуть руль ", eventData.id, " на нулевой скорости" )
end

common.RegisterEventHandler( OnDeviceZeroSpeed, "EVENT_DEVICE_ZERO_SPEED" )
```