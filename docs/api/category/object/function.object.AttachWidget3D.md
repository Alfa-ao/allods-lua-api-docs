# object.AttachWidget3D

Привязывает указанный контрол как Widget3D к заданному объекту.

## Описание

```lua
object.AttachWidget3D( objectId: ObjectId, wtControl3D: Control3DSafe, widget: WidgetSafe, heightOffset: number )
```

Координаты Widget3D пересчитываются автоматически до момента отвязки контрола. Привязка осуществляется автоматически к локатору `Slot_TopFX` визуального объекта. Допускается задание дополнительного смещения Widget3D по вертикали. К одному объекту допускается привязка нескольких Widget3D.

## Список параметров

- **`objectId`** (`ObjectId`) - Идентификатор объекта.

- **`wtControl3D`** (`Control3DSafe`) - Контрол-3D, отвечающий за отображение сцены.

- **`widget`** (`WidgetSafe`) - 2D-контрол, привязываемый как Widget3D к объекту.

- **`heightOffset`** (`number`) - Дополнительное смещение Widget3D по вертикали в метрах.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Привязка контрола к объекту

```lua
object.AttachWidget3D( objectId, wtControl3D, widget, 1 )
```