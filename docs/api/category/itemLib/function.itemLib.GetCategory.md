# itemLib.GetCategory

Возвращает идентификатор категории, к которой относится предмет.

## Описание

```lua
itemLib.GetCategory( itemId: ObjectId ): ItemCategoryId | nil
```

Функция возвращает идентификатор категории, к которой относится указанный предмет. Если категория не определена, функция возвращает `nil`.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения

Возвращает `ItemCategoryId` | `nil` - Идентификатор категории предмета или `nil`, если категория не определена.

## Примеры

### Получение названия категории предмета

```lua
local itemCategoryId = itemLib.GetCategory( itemId )
local itemCategoryInfo = itemCategoryId and itemLib.GetCategoryInfo( itemCategoryId )
local categoryName = itemCategoryInfo and itemCategoryInfo.name
```

::: info Описание примера
В примере извлекается идентификатор категории для заданного предмета. С использованием логического оператора `and` последовательно проверяется наличие категории и извлекается таблица с информацией о ней, после чего получается текстовое название категории.
:::

## Смотрите также

- [itemLib.GetCategoryInfo](function.itemLib.GetCategoryInfo)