# TextContainerSafe:SetContainerOffset

Изменяет значение прокрутки контейнера.

## Описание

```lua
TextContainerSafe:SetContainerOffset( offset: number )
```

Используется для восстановления значения прокрутки контейнера после его изменения.

## Список параметров

- **`offset`** (`number`) - величина прокрутки.

## Возвращаемые значения

Возвращаемое значение отсутствует.

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
В примере сохраняется текущее значение прокрутки, выполняются изменения контейнера, после чего сохраненное значение прокрутки восстанавливается.
:::