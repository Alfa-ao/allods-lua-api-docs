# ScrollableContainerSafe:IsContain

Проверяет наличие виджета в контейнере.

## Описание

```lua
ScrollableContainerSafe:IsContain( widget: WidgetSafe ): boolean
```

Функция определяет, находится ли указанный виджет в контейнере.

## Список параметров

- **`widget`** (`WidgetSafe`) - Проверяемый элемент.

## Возвращаемые значения

Возвращает `boolean` - `true`, если виджет находится в контейнере.

## Примеры

### Проверка наличия виджета в контейнере

```lua
local isContain = wtScrollableContainer:IsContain( wtButton )
```