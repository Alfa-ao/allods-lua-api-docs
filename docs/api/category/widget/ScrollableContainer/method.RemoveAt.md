# ScrollableContainerSafe:RemoveAt
Удаляет указанный элемент из контейнера.

## Описание

```lua
ScrollableContainerSafe:RemoveAt( pos: number ): WidgetSafe | nil
```

Функция удаляет элемент контейнера по заданной позиции. Сам виджет при этом не уничтожается, а возвращается владельцу посредством неявного вызова `Owner:AddChild`.

::: warning Замечание
Удаляется именно элемент контейнера, но не его `WidgetSafe`. Он будет возвращен владельцу (будет неявно вызван `Owner:AddChild( widget )`).
:::

## Список параметров

- **`pos`** (`number`) - Позиция элемента, который необходимо удалить. Позиции отсчитываются от 1, `PopFront() == RemoveAt( 1 )`, `PopBack() == RemoveAt( GetElementCount() )`.

## Возвращаемые значения

Возвращает `WidgetSafe` | `nil` - Виджет удаленного элемента в случае отсутствия ошибок, или `nil` в противном случае.

## Примеры

### Удаление элемента по индексу

```lua
wtScrollableContainer:RemoveAt( 5 )
```

## Смотрите также

- [wtScrollableContainer:PopFront](method.PopFront)
- [wtScrollableContainer:PopBack](method.PopBack)
- [wtScrollableContainer:GetElementCount](method.GetElementCount)