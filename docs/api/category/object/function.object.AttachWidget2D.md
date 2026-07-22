# object.AttachWidget2D
Вывешивает 2D-виджет над интерактивным объектом.

## Описание
```lua
object.AttachWidget2D( objectId: ObjectId, widget: WidgetSafe, pos: number )
```
Функция вывешивает 2D-виджет над юнитами и транспортами, отслеживаемыми главным игроком на карте. Расположение виджета по вертикали задается константами `ATTACHED_OBJECT_POS_*`.

## Список параметров
- **`objectId`** (`ObjectId`) - Идентификатор объекта.

- **`widget`** (`WidgetSafe`) - Дескриптор виджета.

- **`pos`** (`number`(`ATTACHED_OBJECT_POS_*`)) - Расположение виджета по вертикали.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Прикрепление виджета к цели
```lua
object.AttachWidget2D( targetId, mainForm, ATTACHED_OBJECT_POS_UP )
```

## Смотрите также
- [avatar.GetDetectedObjects](../avatar/function.avatar.GetDetectedObjects)
- [object.GetDetectors](function.object.GetDetectors)