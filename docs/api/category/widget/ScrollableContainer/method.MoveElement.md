# ScrollableContainerSafe:MoveElement

Перемещает элемент контейнера.

## Описание

```lua
ScrollableContainerSafe:MoveElement( oldPos: number, newPos: number )
```

Метод перемещает элемент контейнера из одной позиции в другую.

::: warning Замечание
Операция существенно дешевле, чем удаление и вставка.
:::

## Список параметров

- **`oldPos`** (`number`) - Позиция перемещаемого элемента.

- **`newPos`** (`number`) - Позиция, в которую перемещается элемент. Позиции отсчитываются от 1, `newPos` должен учитывать уменьшение размера контейнера при изъятии по старой позиции.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Кольцевой сдвиг и эквивалентная операция

```lua
-- кольцевой сдвиг на 1 влево
wtContainer:MoveElement( 1, wtContainer:GetElementCount() )

-- эквивалент на RemoveAt + Insert
wtContainer:MoveElement( a, b )
wtContainer:Insert( b, wtContainer:RemoveAt( a ) )
```

::: info Описание примера
В примере демонстрируется кольцевой сдвиг элемента на одну позицию влево с использованием метода `GetElementCount`, а также приводится эквивалентная операция с использованием методов `Insert` и `RemoveAt`.
:::

## Смотрите также

- [ScrollableContainerSafe:GetElementCount](#)
- [ScrollableContainerSafe:Insert](#)
- [ScrollableContainerSafe:RemoveAt](#)