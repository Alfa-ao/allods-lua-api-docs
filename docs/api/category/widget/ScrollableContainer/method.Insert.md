# ScrollableContainerSafe:Insert

Добавляет элемент в заданную позицию контейнера.

## Описание

```lua
ScrollableContainerSafe:Insert( pos: number, widget: WidgetSafe )
```

Функция добавляет указанный дочерний виджет в заданную позицию контейнера. Генерирует ошибку, если выполняется любое из следующих условий: добавляемый виджет является внутренним или формой; виджет уже находится в контейнере или добавлен в сцену как `Widget3D`; контейнер переполнен.

## Список параметров

- **`pos`** (`number`) - Позиция, в которую добавляется элемент. Позиции отсчитываются от 1. Вызов `PushFront( widget )` эквивалентен `Insert( 1, widget )`, а `PushBack( widget )` эквивалентен `Insert( GetElementCount() + 1, widget )`.

- **`widget`** (`WidgetSafe`) - Добавляемый элемент.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Вставка элемента на заданную позицию

```lua
wtScrollableContainer:Insert( 4, wtButton )
```

## Смотрите также

- [ScrollableContainerSafe:PushFront](method.PushFront.md)
- [ScrollableContainerSafe:PushBack](method.PushBack.md)
- [ScrollableContainerSafe:GetElementCount](method.GetElementCount.md)