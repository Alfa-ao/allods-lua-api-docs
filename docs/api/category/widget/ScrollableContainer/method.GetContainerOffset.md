# ScrollableContainerSafe:GetContainerOffset

Возвращает значение текущей прокрутки контейнера.

## Описание

```lua
ScrollableContainerSafe:GetContainerOffset(): number
```

Функция возвращает текущую величину прокрутки контейнера, позволяя сохранить и восстановить её значение после изменения содержимого.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `number` - величину текущей прокрутки контейнера.

## Примеры

### Сохранение и восстановление прокрутки

```lua
-- Сохранение прокрутки
local offset = wtScrollableContainer:GetContainerOffset()

-- Изменение контейнера
...

-- Восстановление прокрутки
wtScrollableContainer:SetContainerOffset( offset )
```

## Смотрите также

- [ScrollableContainerSafe:SetContainerOffset](method.SetContainerOffset.md)