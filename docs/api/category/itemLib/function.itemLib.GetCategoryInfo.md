# itemLib.GetCategoryInfo

Возвращает информацию о категории, к которой относится предмет.

## Описание

```lua
itemLib.GetCategoryInfo( itemCategoryId: ItemCategoryId ): table|nil
```

Функция возвращает информацию о категории, к которой относится предмет. Если категория не найдена, возвращается `nil`.

## Список параметров

- **`itemCategoryId`** (`ItemCategoryId`) - Идентификатор категории предмета.

## Возвращаемые значения

Возвращает `table` | `nil`.

Если информация успешно получена, возвращается таблица со следующими полями:

- **`sysName`** (`string` | `nil`) - Системное имя категории (нелокализуемое, для использования в скриптах); `nil`, если отсутствует.

- **`name`** (`WString`) - Название категории.

- **`root`** (`boolean`) - `true`, если у подкатегории есть дочерние категории.

- **`rootId`** (`ItemCategoryId` | `nil`) - Идентификатор ресурса родительской категории; `nil`, если родительская категория отсутствует.

- **`showAuction`** (`boolean`) - `true`, если категорию надо показать в аукционе.

## Примеры

### Получение названия категории предмета

```lua
local categoryId = itemLib.GetCategory( itemId )
local itemCategoryInfo = categoryId and itemLib.GetCategoryInfo( categoryId )
local itemCategoryName = itemCategoryInfo and itemCategoryInfo.name
```

::: info Описание примера
В примере извлекается идентификатор категории предмета. Если идентификатор существует, запрашивается подробная информация о категории. Затем извлекается название категории, если информация была успешно получена.
:::

## Смотрите также

- [itemLib.GetCategory](function.itemLib.GetCategory)