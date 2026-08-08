## EVENT_TRANSPORT_ACCELERATION_TARGET_CHANGED
### Описание
```
EVENT_TRANSPORT_ACCELERATION_TARGET_CHANGED
```
Событие присылается при изменении целевого сектора для астрального прыжка.

### Список параметров
- **`id`** (`ObjectId`) - Идентификатор транспорта.

---

## EVENT_TRANSPORT_ANGULAR_VELOCITY_CHANGED
### Описание
```
EVENT_TRANSPORT_ANGULAR_VELOCITY_CHANGED
```
Событие присылается каждый раз, когда у транспортного средства меняется скорость поворота.

### Список параметров
- **`id`** (`ObjectId`) - Идентификатор транспортного средства.

---

## EVENT_TRANSPORT_CRITICAL_MALFUNCTION
### Описание
```
EVENT_TRANSPORT_CRITICAL_MALFUNCTION
```
Событие присылается, если на корабле что-то сломалось. Получает его команда этого корабля и чужие навигаторы, следящие за этим кораблем. Содержит код поломки `ENUM_CriticalMalfunctionType_CMT...`.

### Список параметров
- **`id`** (`ObjectId`) - Идентификатор корабля.
- **`sysType`** (`string`(`ENUM_CriticalMalfunctionType_CMT...`)) - Тип поломки. Значения соответствуют перечислению `ENUM_CriticalMalfunctionType_CMT...`.
(HELP)
---

## EVENT_TRANSPORT_DEVICES_CHANGED
### Описание
```
EVENT_TRANSPORT_DEVICES_CHANGED
```
Событие присылается каждый раз, когда у транспортного средства меняется список устройств.

### Список параметров
- **`id`** (`ObjectId`) - Идентификатор транспортного средства.

---

## EVENT_TRANSPORT_DIRECTION_CHANGED
### Описание
```
EVENT_TRANSPORT_DIRECTION_CHANGED
```
Событие присылается каждый раз, когда у транспортного средства меняется величина поворота (yaw). Апдейт происходит при изменении угла на 3 градуса от последнего сообщения.

### Список параметров
- **`id`** (`ObjectId`) - Идентификатор транспортного средства.

---

## EVENT_TRANSPORT_ENERGY_CHANGED
### Описание
```
EVENT_TRANSPORT_ENERGY_CHANGED
```
Событие присылается каждый раз, когда у транспортного средства меняется какая-либо составляющая энергии.

### Список параметров
- **`id`** (`ObjectId`) - Идентификатор транспортного средства.

---

## EVENT_TRANSPORT_HORIZONTAL_VELOCITY_CHANGED
### Описание
```
EVENT_TRANSPORT_HORIZONTAL_VELOCITY_CHANGED
```
Событие присылается каждый раз, когда у транспортного средства меняется скорость движения по горизонтали (вперёд).

### Список параметров
- **`id`** (`ObjectId`) - Идентификатор транспортного средства.

---

## EVENT_TRANSPORT_INSIGHT_CHANGED
### Описание
```
EVENT_TRANSPORT_INSIGHT_CHANGED
```
Событие присылается каждый раз, когда у транспортного средства меняется "Инсайт".

### Список параметров
- **`id`** (`ObjectId`) - Идентификатор транспортного средства.
- **`delta`** (`number`) - На сколько изменился инсайт.

---

## EVENT_TRANSPORT_OBSERVING_FINISHED
### Описание
```
EVENT_TRANSPORT_OBSERVING_FINISHED
```
Событие присылается при окончании просмотра некоего транспорта через навигационное устройство корабля главного игрока (навигатор отзумился от чужого корабля). Теперь у ранее просматриваемого транспорта недоступна информация по устройствам.

### Список параметров
Параметры отсутствуют.

## Смотрите также
- [EVENT_TRANSPORT_OBSERVING_STARTED](events.EVENT_TRANSPORT_.md#event-transport-observing-started)

---

## EVENT_TRANSPORT_OBSERVING_STARTED
### Описание
```
EVENT_TRANSPORT_OBSERVING_STARTED
```
Событие присылается при начале просмотра некоего транспорта через навигационное устройство корабля главного игрока (навигатор назумился на другой корабль). Теперь у просматриваемого транспорта доступна информация по устройствам.

### Список параметров
Параметры отсутствуют.

## Смотрите также

- [avatar.GetObservedTransport](/api/category/avatar/function.avatar.GetObservedTransport.md)
- [avatar.GetObservedAstralUnit](/api/category/avatar/function.avatar.GetObservedAstralUnit.md)

---

## EVENT_TRANSPORT_POS_CHANGED
### Описание
```
EVENT_TRANSPORT_POS_CHANGED
```
Событие присылается при изменении координат транспорта.

### Список параметров
- **`id`** (`ObjectId`) - Идентификатор транспорта.

---

## EVENT_TRANSPORT_RENAME_REPLY
### Описание
```
EVENT_TRANSPORT_RENAME_REPLY
```
Событие присылается в случае, если транспорт необходимо переименовать.

### Список параметров
- **`hasName`** (`boolean`) - true, если у корабля уже есть имя и идёт запрос на переименование. Иначе требуется задать самое первое имя корабля.
- **`oldName`** (`WString`) - Старое имя корабля.

---

## EVENT_TRANSPORT_RENAME_REPLY_RESULT
### Описание
```
EVENT_TRANSPORT_RENAME_REPLY_RESULT
```
Событие присылается в случае, если была попытка переименования транспорта hangar.Rename( name ).(HELP)

::: info Перечисления
Значения соответствуют перечислению `ENUM_InvalidNameKind_...`.(HELP)
:::

### Список параметров
- **`success`** (`boolean`) - true, если переименование прошло успешно. false, если имя невалидно и нужно попробовать другое имя.
- **`sysNameErrorKind`** (`string`(`ENUM_InvalidNameKind_...`)) - Причина, по которой имя недопустимо. Значения соответствуют перечислению `ENUM_InvalidNameKind_...`.
- **`name`** (`WString`) - Имя корабля, в случае ошибки то, на которое пытались сменить.

---

## EVENT_TRANSPORTS_CHANGED
### Описание
```
EVENT_TRANSPORTS_CHANGED
```
Событие присылается раз в кадр, если за этот кадр в зоне действия аватара появляется или исчезает корабль.

### Список параметров
- **`spawned`** (`table` of `ObjectId`) - Индексированная с 1 таблица идентификаторов появившихся кораблей.
- **`despawned`** (`table` of `ObjectId`) - Индексированная с 1 таблица идентификаторов исчезнувших кораблей.

---

## EVENT_TRANSPORT_SHIELD_CHANGED
### Описание
```
EVENT_TRANSPORT_SHIELD_CHANGED
```
Событие присылается каждый раз, когда у транспортного средства меняется сила щита с определенной стороны. Сторона представлена `SHIP_SIDE_XXX`.

### Список параметров
- **`id`** (`ObjectId`) - Идентификатор транспортного средства.
- **`side`** (`number`(`SHIP_SIDE_XXX`)) - Сторона. Значения соответствуют перечислению `SHIP_SIDE_XXX`.
- **`strengthDelta`** (`number`) - На сколько изменилась суммарная сила щитов по представленной стороне. Величина отрицательна, если по щитам был нанесён урон, и положительная, если сила щитов восстановилась.
(HELP)
---

## EVENT_TRANSPORT_SHIP_INFO_CHANGED
### Описание
```
EVENT_TRANSPORT_SHIP_INFO_CHANGED
```
Событие присылается каждый раз, когда изменилась базовая информация по какому-то кораблю.

### Список параметров
- **`objectId`** (`ObjectId`) - Идентификатор транспортного средства.

## Смотрите также

- [transport.GetShipInfo](/api/category/transport/function.transport.GetShipInfo.md)

---

## EVENT_TRANSPORT_VERTICAL_VELOCITY_CHANGED
### Описание
```
EVENT_TRANSPORT_VERTICAL_VELOCITY_CHANGED
```
Событие присылается каждый раз, когда у транспортного средства меняется скорость движения по вертикали.

### Список параметров
- **`id`** (`ObjectId`) - Идентификатор транспортного средства.