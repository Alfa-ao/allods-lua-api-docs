## EVENT_INGAME_UNDER_CURSOR_CHANGED

### Описание

```
EVENT_INGAME_UNDER_CURSOR_CHANGED
```

Событие присылается при изменении объекта под курсором.

### Список параметров

- **`state`** (`string`) - состояние курсора.

- **`unitId`** (`ObjectId`) - идентификатор юнита под курсором.

- **`deviceId`** (`ObjectId`) - идентификатор устройства под курсором.

- **`canUse`** (`boolean`) - можно ли использовать устройство в текущий момент.

- **`deviceType`** (`number`(`USDEV_...`)) - тип корабельного устройства.

- **`type`** (`number`(`HT_...`)) - тип хаба.

- **`name`** (`WString` | `nil`) - название хаба, если это HT_PORTAL.