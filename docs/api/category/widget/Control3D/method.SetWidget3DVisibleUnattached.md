# Control3DSafe:SetWidget3DVisibleUnattached

Изменяет видимость Widget3D для указанного контрола при отсутствии привязки к объекту.

## Описание

```lua
Control3DSafe:SetWidget3DVisibleUnattached( widget: WidgetSafe, isVisible: boolean )
```

Функция изменяет видимость Widget3D для указанного контрола, который должен находиться в текущем Control3DSafe, при отсутствии привязки к объекту.

::: warning Замечание
Видимость Widget3D определяется стандартной видимостью виджета, а также либо видимостью объекта привязки, либо данным флагом.
:::

::: warning Замечание
При создании нового Widget3D через функцию AddWidget3D данный флаг устанавливается в значение false.
:::

## Список параметров

- **`widget`** (`WidgetSafe`) - 2D-контрол, для которого меняется видимость Widget3D.

- **`isVisible`** (`boolean`) - Отображать ли Widget3D при отсутствии привязки к какому-либо объекту.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Установка видимости

```lua
wtControl3D:SetWidget3DVisibleUnattached( widget, true )
```

## Смотрите также

- [AddWidget3D](sdfsdf)