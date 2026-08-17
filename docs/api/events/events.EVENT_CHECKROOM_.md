## EVENT_CHECKROOM_CHANGED

Событие посылается при передаче или удалении содержимого гардероба на клиенте.

### Описание

```
EVENT_CHECKROOM_CHANGED
```

Событие посылается, когда игрок запросил `checkroomLib.Open()` или `checkroomLib.Close()`, и произошла передача на клиент или было убрано с клиента содержимое гардероба.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [checkroomLib.Open](/api/category/checkroomLib/function.checkroomLib.Open.md)
- [checkroomLib.Close](/api/category/checkroomLib/function.checkroomLib.Close.md)

---

## EVENT_CHECKROOM_ITEM_ADDED

### Описание

```
EVENT_CHECKROOM_ITEM_ADDED
```

Событие, возникающее при добавлении одежды в гардероб. В случае неудачного добавления одежды в гардероб вместо данного события возникает `EVENT_EQUIP_FAILED`.

### Список параметров

- **`itemId`** (`ObjectId`) - идентификатор добавленного предмета.

### Смотрите также

- [EVENT_EQUIP_FAILED](/api/events/events.EVENT_EQUIP_.md)

---

## EVENT_CHECKROOM_ITEM_CHANGED


### Описание

```
EVENT_CHECKROOM_ITEM_CHANGED
```

Событие посылается при изменении полей предмета в гардеробе. Например, при надевании или снимании.

### Список параметров

- **`itemId`** (`ObjectId`) - идентификатор гардеробного предмета.
