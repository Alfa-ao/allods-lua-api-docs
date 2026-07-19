# Control3DSafe:RemoveAllWidget3D
Удаляет все Widget3D из контрола типа Control3DSafe.

## Описание

```lua
Control3DSafe:RemoveAllWidget3D()
```

Функция удаляет все элементы Widget3D из контрола типа Control3DSafe.

::: warning Замечание
Удаляются именно Widget3D, но не содержащиеся в них WidgetSafe. Они возвращаются владельцам, при этом неявно вызывается Owner:AddChild( widget ).
:::

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Базовый вызов

```lua
wtControl3D:RemoveAllWidget3D()
```