# checkroomLib.IsItemsInCheckroom

Возвращает таблицу с признаками наличия предметов в гардеробе или экипировке аватара.

## Описание

```lua
checkroomLib.IsItemsInCheckroom( itemIds: table ): table
```
(HELP)массовым аналогом функции
Функция возвращает таблицу с признаками наличия каждого указанного предмета в гардеробе или экипировке аватара и является массовым аналогом функции `checkroomLib.IsItemInCheckroom`.

## Список параметров

- **`itemIds`** (`table`) - список идентификаторов предметов для проверки.

## Возвращаемые значения

Возвращает `table` - таблицу с признаками наличия предметов, где индексация соответствует переданному списку `itemIds`, а элементами являются логические значения (`true`, если предмет есть в гардеробе или экипирован на аватаре).

## Примеры

### Проверка наличия предметов

```lua
local itemIds = { 101, 102, 103 }
local isItemsInCheckroom = checkroomLib.IsItemsInCheckroom( itemIds )
```

## Смотрите также
(HELP)массовым аналогом функции
- [checkroomLib.IsItemInCheckroom](function.checkroomLib.IsItemInCheckroom)