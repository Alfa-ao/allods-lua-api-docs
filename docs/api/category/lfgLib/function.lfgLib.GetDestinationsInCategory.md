# lfgLib.GetDestinationsInCategory

Возвращает список доступных целей для поиска группы по категории.

## Описание

```lua
lfgLib.GetDestinationsInCategory( сategoryId: LFGDestinationCategoryId ): table | nil
```

Функция возвращает список доступных целей для поиска группы по указанной категории.

## Список параметров

- **`сategoryId`** (`LFGDestinationCategoryId`) - идентификатор категории.

## Возвращаемые значения

Возвращает `table` | `nil` - список доступных целей для поиска группы. Элементы таблицы имеют тип `LfgDestinationId`, индексация начинается с 0. Возвращает `nil`, если категория не найдена или цели отсутствуют.

## Примеры

### Получение списка доступных целей

```lua
local availableDestinations = lfgLib.GetDestinationsInCategory( сategoryId )
```