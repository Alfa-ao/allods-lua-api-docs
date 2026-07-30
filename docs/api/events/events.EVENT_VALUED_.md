## EVENT_VALUED_OBJECT_CLICKED
### Описание
```
EVENT_VALUED_OBJECT_CLICKED
```
Событие присылается, когда был кликнут ValuedObject (объект, представляющий игровой объект в UI-тексте).

### Список параметров
- **`object`** (`ValuedObject`) - Кликнутый объект в тексте.
- **`cursorPosX`** (`number`) - X-позиция курсора, в которой произошел клик.
- **`cursorPosY`** (`number`) - Y-позиция курсора, в которой произошел клик.
- **`kbFlags`** (`number`(`KBF_...`)) - Состояние модификаторов клавиатуры. Значения соответствуют перечислению `KBF_...`.
- **`mouseButton`** (`number`(`MOUSE_BUTTON_...`)) - Какая кнопка мыши была нажата. Значения соответствуют перечислению `MOUSE_BUTTON_...`.
- **`widget`** (`WidgetSafe`) - Виджет, в котором находится ValuedObject.
(HELP)
---

## EVENT_VALUED_OBJECT_DOUBLE_CLICKED

### Описание
```
EVENT_VALUED_OBJECT_DOUBLE_CLICKED
```
Событие присылается при двойном клике на `ValuedObject` (объект, представляющий игровой объект в UI тексте).

### Список параметров
- **`object`** (`ValuedObject`) - кликнутый объект в тексте.

- **`cursorPosX`** (`number`) - X позиция курсора, в которой произошёл клик.

- **`cursorPosY`** (`number`) - Y позиция курсора, в которой произошёл клик.

- **`kbFlags`** (`number`(`KBF_...`)) - состояние модификаторов клавиатуры.

- **`mouseButton`** (`number`(`MOUSE_BUTTON_...`)) - какая кнопка мыши была нажата.

- **`widget`** (`WidgetSafe`) - виджет, в котором находится ValuedObject.

## Смотрите также

- [KBF_...](/api/constants/constants.KBF.md)
- [MOUSE_BUTTON_...](/api/constants/constants.MOUSE_BUTTON.md)

---

## EVENT_VALUED_OBJECT_MOUSEOVER

### Описание
```
EVENT_VALUED_OBJECT_MOUSEOVER
```
Событие присылается при наведении или убирании курсора мыши с ValuedObject (объект, представляющий игровой объект в UI тексте).

### Список параметров
- **`object`** (`ValuedObject`) - кликнутый объект в тексте.

- **`cursorPosX`** (`number`) - X позиция курсора, в которой произошёл клик.

- **`cursorPosY`** (`number`) - Y позиция курсора, в которой произошёл клик.

- **`kbFlags`** (`number`(`KBF_...`)) - состояние модификаторов клавиатуры.

- **`mouseButton`** (`number`(`MOUSE_BUTTON_...`)) - какая кнопка мыши была нажата.

- **`widget`** (`WidgetSafe`) - виджет, в котором находится ValuedObject.

- **`isActive`** (`boolean`) - true, если курсор мыши был наведён на объект. Если курсор был убран с объекта, то false.

## Смотрите также

- [KBF_...](/api/constants/constants.KBF.md)
- [MOUSE_BUTTON_...](/api/constants/constants.MOUSE_BUTTON.md)