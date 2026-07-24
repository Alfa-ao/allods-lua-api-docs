# TextContainerSafe:GetContainerOffset

Возвращает значение текущей прокрутки контейнера.

## Описание

```lua
TextContainerSafe:GetContainerOffset(): number
```

Функция возвращает значение текущей прокрутки контейнера, которое используется для восстановления прокрутки после его изменения.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `number` - величину прокрутки.

## Примеры

### Сохранение и восстановление прокрутки

```lua
-- store offset
local offset = wtTextContainer:GetContainerOffset()

-- change container
-- ...

-- restore offset
wtTextContainer:SetContainerOffset( offset )
```

::: info Описание примера
В примере выполняется сохранение текущей прокрутки, изменение содержимого контейнера и последующее восстановление значения прокрутки.
:::

## Смотрите также

- [TextContainerSafe:SetContainerOffset](#)