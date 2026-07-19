# Control3DSafe:IsAddedAsWidget3D

Проверяет добавление виджета как Widget3D в указанный Control3DSafe.

## Описание

```lua
Control3DSafe:IsAddedAsWidget3D( widget: WidgetSafe ): boolean
```

Функция проверяет, добавлен ли указанный виджет в качестве Widget3D в данный Control3DSafe.

## Список параметров
- **`widget`** (`WidgetSafe`) - Проверяемый виджет.

## Возвращаемые значения
Возвращает `boolean` - `true`, если данный виджет добавлен как Widget3D к этому Control3DSafe, и `false` в противном случае.

## Примеры

### Проверка и удаление виджета

```lua
if wtControl3D:IsAddedAsWidget3D( widget ) then
    wtControl3D:RemoveWidget3D( widget )
end
```

::: info Описание примера
В примере проверяется наличие виджета в сцене. Если виджет добавлен, он удаляется с помощью метода `RemoveWidget3D`.
:::

## Смотрите также
- [RemoveWidget3D](sdfgdsfg)