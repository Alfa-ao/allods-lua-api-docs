# TextContainerSafe:GetMaxContainerOffset

Возвращает максимальное значение, на которое может быть прокручен контейнер.

## Описание

```lua
TextContainerSafe:GetMaxContainerOffset(): number
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
local maxOffset = wtTextContainer:GetMaxContainerOffset()
-- прокрутка контейнера до середины
wtTextContainer:SetContainerOffset( maxOffset / 2 )
```

::: info Описание примера
Сначала выполняется сохранение максимального значения прокрутки контейнера посредством вызова `TextContainerSafe:GetMaxContainerOffset`. Далее осуществляется прокрутка контейнера до середины через вызов `TextContainerSafe:SetContainerOffset` с вычисленным значением.
:::