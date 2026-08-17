## EVENT_PICK_OBJECT

### Описание

```
EVENT_PICK_OBJECT
```

Событие присылается при клике игроком в интерактивный объект или мимо него в основном 3D-окне. Сообщение содержит информацию о текущей схеме управления, которая задается глобальными переменными: `use_move_by_click` и `simplified_move`.

### Список параметров

- **`objectId`** (`ObjectId` | `nil`) - идентификатор объекта или `nil`, если кликнули мимо объекта.

- **`simplified`** (`boolean`) - схема управления: основная (`WSAD`) или упрощенная (`simplified_move`).

- **`moveByClick`** (`boolean`) - в схеме управления включено движение по клику мыши.

- **`primary`** (`boolean`) - способ выбора объекта (основная или альтернативная кнопки мыши).

- **`dblClick`** (`boolean`) - клик или двойной клик мыши.

- **`kbFlags`** (`number`(`KBF_*`)) - состояние модификаторов клавиатуры. Значения соответствуют перечислению `KBF_*`.

```lua
if common.GetBitAnd(params.kbFlags, KBF_SHIFT) ~= 0 then
    LogInfo("Shift pressed")
end
```

### Смотрите также

- [KBF_*](/api/constants/constants.KBF.md)