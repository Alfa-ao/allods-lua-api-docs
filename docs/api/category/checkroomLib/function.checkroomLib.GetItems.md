# checkroomLib.GetItems

Возвращает индексированный с 1 список идентификаторов предметов одной коллекции гардероба.

## Описание

```lua
checkroomLib.GetItems( collectionId: LifestyleCollectionId ): table
```

Функция возвращает индексированный с 1 список идентификаторов предметов, относящихся к заданной коллекции гардероба.

## Список параметров

- **`collectionId`** (`LifestyleCollectionId`) - Идентификатор ресурса коллекции гардероба.

## Возвращаемые значения

Возвращает `table` - индексированный с 1 список идентификаторов (`ObjectId`) предметов этой коллекции.

## Примеры

### Получение информации о предмете из коллекции

```lua
local categories = checkroomLib.GetCategories()
local collections = checkroomLib.GetCollections( categories[ 1 ] )
local items = checkroomLib.GetItems( collections[ 1 ] )
local itemInfo = itemLib.GetItemInfo( items[ 1 ] )
```

::: info Описание примера
В примере выполняется последовательный запрос категорий гардероба, коллекций для первой категории и предметов для первой коллекции. Затем извлекается детальная информация о первом предмете из полученного списка.
:::

## Смотрите также

- [checkroomLib.GetCategories](/api/category/checkroomLib/function.checkroomLib.GetCategories.md)
- [checkroomLib.GetCollections](/api/category/checkroomLib/function.checkroomLib.GetCollections.md)
- [itemLib.GetItemInfo](/api/category/itemLib/function.itemLib.GetItemInfo.md)