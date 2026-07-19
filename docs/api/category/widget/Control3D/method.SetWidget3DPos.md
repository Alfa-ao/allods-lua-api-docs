# Control3DSafe:SetWidget3DPos

Меняет позицию на карте для Widget3D для указанного контрола, находящегося в объекте типа Control3DSafe.

## Описание

```lua
Control3DSafe:SetWidget3DPos( widget: WidgetSafe, pos: GamePosition )
```

Функция меняет позицию на карте для Widget3D для указанного контрола, находящегося в объекте типа Control3DSafe.

## Список параметров

- **`widget`** (`WidgetSafe`) - 2D-контрол, для которого меняется позиция Widget3D.

- **`pos`** (`GamePosition`) - новая позиция контрола-3D на карте (новая версия GamePosition).

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Использование метода

```lua
wtControl3D:SetWidget3DPos( widget, pos )
```