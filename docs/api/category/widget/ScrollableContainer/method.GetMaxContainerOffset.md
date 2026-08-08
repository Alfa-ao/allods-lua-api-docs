# ScrollableContainerSafe:GetMaxContainerOffset
Возвращает максимальное значение прокрутки контейнера.

## Описание

```lua
ScrollableContainerSafe:GetMaxContainerOffset(): number
```

Функция возвращает максимальное значение, на которое может быть прокручен контейнер.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `number` - максимальное значение прокрутки.

## Примеры

### Прокрутка контейнера до середины
```lua
-- store max offset
local maxOffset = wtScrollableContainer:GetMaxContainerOffset()
-- прокрутка контейнера до середины
wtScrollableContainer:SetContainerOffset( maxOffset / 2 )
```

::: info Описание примера
В примере запрашивается максимальное значение прокрутки контейнера, после чего выполняется прокрутка до середины путем установки смещения, равного половине от полученного значения.
:::

## Смотрите также

- [ScrollableContainerSafe:SetContainerOffset](method.SetContainerOffset.md)