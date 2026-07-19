# Control3DSafe:RemoveWidget3D
Удаляет указанный 2D-контрол как Widget3D из контрола типа Control3DSafe.

## Описание

```lua
Control3DSafe:RemoveWidget3D( widget: WidgetSafe )
```

Функция удаляет указанный 2D-контрол как Widget3D из контрола типа Control3DSafe.

::: warning Замечание
Удаляется именно Widget3D, но не содержащийся в нем WidgetSafe. Он будет возвращен владельцу (будет неявно вызван Owner:AddChild( widget )).
:::

## Список параметров

- **`widget`** (`WidgetSafe`) - 2D-контрол, который удаляется как Widget3D.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Базовый вызов

```lua
wtControl3D:RemoveWidget3D( widget )
```