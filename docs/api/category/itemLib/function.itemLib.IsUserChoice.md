# itemLib.IsUserChoice

Определяет, необходимо ли показывать пользовательский выбор вариантов действий для предмета.

## Описание

```lua
itemLib.IsUserChoice( itemId: ObjectId ): boolean
```

Функция применяется совместно с `itemLib.IsUseItemAndTakeActions` для определения необходимости отображения меню пользовательского выбора действий.

## Список параметров

- **`itemId`** (`ObjectId`) - Уникальный идентификатор предмета.

## Возвращаемые значения

Возвращает `boolean` - `true`, если для предмета нужно показывать пользовательский выбор вариантов действий.

## Смотрите также

- [itemLib.IsUseItemAndTakeActions](function.itemLib.IsUseItemAndTakeActions)