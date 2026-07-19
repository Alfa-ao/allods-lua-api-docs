# checkroomLib.IsItemsEquipped

Возвращает таблицу с логическими значениями для каждого предмета, указывающими, надет ли этот или аналогичный гардеробный предмет на персонажа.

## Описание

```lua
checkroomLib.IsItemsEquipped( itemIds: table ): table
```
(HELP) аналог сам на себя
Функция выступает массовым аналогом `checkroomLib.IsItemEquipped` и проверяет статус экипировки для списка предметов.

## Список параметров

- **`itemIds`** (`table`) - Список идентификаторов предметов для проверки.

## Возвращаемые значения

`table` - Таблица с логическими значениями, где индексация соответствует переданному списку `itemIds`. Элементы содержат `true`, если гардеробный предмет надет на персонажа.

## Примеры

### Проверка статуса экипировки списка предметов

```lua
local itemIds = { 12345, 67890 }
local isItemsEquipped = checkroomLib.IsItemsEquipped( itemIds )
```

## Смотрите также
(HELP) аналог сам на себя
- [checkroomLib.IsItemEquipped](function.checkroomLib.IsItemEquipped)