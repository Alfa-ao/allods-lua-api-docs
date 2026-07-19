# Control3DSafe:SetWidget3DSize

Меняет размер Widget3D для указанного контрола, находящегося в объекте типа Control3DSafe.

## Описание

```lua
Control3DSafe:SetWidget3DSize( widget: WidgetSafe, size: table )
```

Функция меняет размер Widget3D для указанного контрола, находящегося в объекте типа Control3DSafe.

## Список параметров

- **`widget`** (`WidgetSafe`) - 2D-контрол, для которого меняется размер Widget3D.

- **`size`** (`table`) - Таблица с полями:
    - **`sizeX`** (`number`) - новый размер контрола-3D по X в метрах.
    - **`sizeY`** (`number`) - новый размер контрола-3D по Y в метрах.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Изменение размера Widget3D

```lua
wtControl3D:SetWidget3DSize( widget, size )
```