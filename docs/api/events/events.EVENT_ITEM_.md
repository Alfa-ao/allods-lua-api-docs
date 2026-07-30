## EVENT_ITEM_DISABLED

### Описание

```
EVENT_ITEM_DISABLED
```

Событие приходит, если предпринимается попытка использовать, надеть или снять предмет, но он недоступен для использования.

### Список параметров

- **`itemId`** (`ObjectId`) - идентификатор предмета.

---

## EVENT_ITEM_MOVED

### Описание

```
EVENT_ITEM_MOVED
```

Событие возникает при успешном перемещении предмета.

### Список параметров

- **`itemId`** (`ObjectId`) - идентификатор предмета.

- **`from`** (`number`(`ITEM_CONT_...`)) - тип контейнера, откуда был перемещен предмет.

- **`to`** (`number`(`ITEM_CONT_...`)) - тип контейнера, куда был перемещен предмет.

---

## EVENT_ITEM_QUESTS_RECEIVED

### Описание

```
EVENT_ITEM_QUESTS_RECEIVED
```

Событие посылается, когда игрок запрашивает задания для предмета.

### Список параметров

- **`slot`** (`number`) - слот, для предмета которого получены квесты.

- **`itemId`** (`ObjectId` | `nil`) - идентификатор предмета, для которого получены квесты.

---

## EVENT_ITEM_RELATED_QUESTS_CHANGED

### Описание

```
EVENT_ITEM_RELATED_QUESTS_CHANGED
```

Событие приходит, если изменяется список заданий, связанных с предметом.

### Список параметров

- **`itemId`** (`ObjectId`) - идентификатор предмета.

---

## EVENT_ITEM_SERVER_CMD_FINISHED

### Описание

```
EVENT_ITEM_SERVER_CMD_FINISHED
```

Событие присылается при завершении сервером операции с предметом. Информация о новом состоянии предмета на клиенте может запаздывать, поэтому при необходимости требуется ожидание события `EVENT_GAME_ITEM_CHANGED`.

### Список параметров

- **`itemId`** (`ObjectId`) - идентификатор предмета, с которым завершилась операция.

- **`isSuccess`** (`boolean`) - true, если операция завершилась удачно.

### Смотрите также

- [enchant.EnchantInsert](/api/category/enchant/function.enchant.EnchantInsert.md)
- [enchant.EnchantExtract](/api/category/enchant/function.enchant.EnchantExtract.md)
- [EVENT_GAME_ITEM_CHANGED](/api/events/events.EVENT_GAME_.md#event_game_item_changed)