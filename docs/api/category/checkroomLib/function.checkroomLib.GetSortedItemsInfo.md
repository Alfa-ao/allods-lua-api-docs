# checkroomLib.GetSortedItemsInfo

Возвращает индексированный с 1 отсортированный список информации о предметах в одной коллекции гардероба.

## Описание

```lua
checkroomLib.GetSortedItemsInfo( collectionId: CheckRoomCollectionId ): table
```

Функция возвращает индексированный с 1 отсортированный список информации о предметах в одной коллекции гардероба. Первоначально сортировка осуществляется по слоту одежды или оружия. Если слот одинаковый, то дальнейшая сортировка производится по имени предмета.

## Список параметров

- **`collectionId`** (`CheckRoomCollectionId`) - идентификатор ресурса коллекции гардероба.

## Возвращаемые значения

Возвращает таблицу (`table`), индексированную с 1. Каждый элемент таблицы содержит следующие поля:

- **`id`** (`ObjectId`) - идентификатор предмета.

- **`resourceId`** (`ItemId`) - идентификатор ресурса предмета.

- **`name`** (`WString`) - название предмета.

- **`icon`** (`TextureId`) - текстура с иконкой предмета.

- **`quality`** (`number`) - качество предмета. Значения соответствуют перечислению `ITEM_QUALITY_...`.

- **`dressSlot`** (`number`) - слот одежды или оружия, если предмет надевается. Значения соответствуют перечислению `DRESS_SLOT_...`.

- **`hideNotLearned`** (`boolean`) - `true`, если нужно скрывать предмет до появления в гардеробе.

## Примеры

### Получение отсортированного списка предметов коллекции

```lua
local categories = checkroomLib.GetCategories()
local collections = checkroomLib.GetCollections( categories[ 1 ] )
local items = checkroomLib.GetSortedItemsInfo( collections[ 1 ] )
local name = items[ 1 ].name
```

::: info Описание примера
В примере последовательно извлекаются категории гардероба, затем коллекции из первой категории. После этого запрашивается отсортированный список предметов из первой коллекции, и извлекается название первого предмета.
:::

## Смотрите также

- [DRESS_SLOT_...](#)
- [ITEM_QUALITY_...](#)
- [itemLib.GetItemInfo](../itemLib/function.itemLib.GetItemInfo)
- [itemLib.GetQuality](../itemLib/function.itemLib.GetQuality)
- [itemLib.IsHideLifestyleWhileNotEquipped](../itemLib/function.itemLib.IsHideLifestyleWhileNotEquipped)