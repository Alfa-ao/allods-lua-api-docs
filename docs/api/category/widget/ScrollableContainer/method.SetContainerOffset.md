# ScrollableContainerSafe:SetContainerOffset

Изменяет значение прокрутки контейнера.

## Описание

```lua
ScrollableContainerSafe:SetContainerOffset( offset: number )
```

Изменение значения прокрутки контейнера. Используется для восстановления значения прокрутки контейнера после его изменения.

## Список параметров

- **`offset`** (`number`) - Величина прокрутки.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Восстановление значения прокрутки

```lua
-- Сохранение текущего смещения прокрутки
local offset = wtScrollableContainer:GetContainerOffset()

-- Выполнение действий, изменяющих контейнер
...

-- Восстановление ранее сохраненного смещения прокрутки
wtScrollableContainer:SetContainerOffset( offset )
```

## Смотрите также

- [ScrollableContainerSafe:GetContainerOffset](method.GetContainerOffset.md)