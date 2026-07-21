# itemLib.GetLevel

Возвращает уровень предмета.

## Описание

```lua
itemLib.GetLevel( itemId: ObjectId ): integer, boolean
```

Функция извлекает уровень предмета и состояние флага отображения этого уровня на иконке. В случае ошибки функция не возвращает значений.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения

Возвращает `integer`, `boolean` или `nil`.

- **`integer`** - Уровень предмета.

- **`boolean`** - Состояние флага `forceShowLevel` в ресурсе предмета, используемое для отображения уровня на слоте.

## Примеры

### Отображение уровня на иконке предмета

```lua
local level, showOnIcon = itemLib.GetLevel( itemId )
if showOnIcon then
    self.wtTopRightCount:SetVal( "value", IntWs( level ) )
    self.wtTopRightIcon:Show( true )
else
    self.wtTopRightIcon:Show( false )
end
```

::: info Описание примера
В примере извлекается уровень предмета и флаг его отображения. При наличии флага `showOnIcon` значение уровня преобразуется и устанавливается в текстовый виджет, после чего иконка отображается. В противном случае иконка скрывается.
:::