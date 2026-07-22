# object.DetachWidget3D
Отвязывает указанный контрол как Widget3D от объекта.

## Описание
```lua
object.DetachWidget3D( objectId: ObjectId, widget: WidgetSafe )
```
Функция выполняет отвязку указанного 2D-контрола от объекта, ранее привязанного как Widget3D.

## Список параметров
- **`objectId`** (`ObjectId`) - Идентификатор объекта.

- **`widget`** (`WidgetSafe`) - 2D-контрол, который был привязан как Widget3D к объекту.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Отвязка контрола от объекта
```lua
object.DetachWidget3D( objectId, widget )
```