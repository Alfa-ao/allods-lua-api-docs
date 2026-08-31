# checkroomLib.GetCollections

Возвращает индексированный список коллекций одной корневой категории гардероба.

## Описание

```lua
checkroomLib.GetCollections( categoryId: LifestyleCategoryId ): table
```

Функция возвращает индексированный с 1 список идентификаторов ресурсов коллекций одной корневой категории гардероба.

## Список параметров

- **`categoryId`** (`LifestyleCategoryId`) - идентификатор ресурса корневой категории гардероба.

## Возвращаемые значения

Возвращает `table` - индексированный с 1 список идентификаторов ресурсов (`LifestyleCollectionId`) коллекций этой категории.

## Примеры

### Получение коллекции и вывод имени

```lua
local categories = checkroomLib.GetCategories()
local collections = checkroomLib.GetCollections( categories[ 1 ] )
LogInfo( collections[ 1 ]:GetInfo().name )
```

::: info Описание примера
В примере сначала запрашивается список всех корневых категорий гардероба. Затем для первой категории из полученного списка извлекается список идентификаторов коллекций. После этого выводится имя первой коллекции с использованием метода `GetInfo()`.
:::

## Смотрите также

- [checkroomLib.GetCategories](/api/category/checkroomLib/function.checkroomLib.GetCategories)