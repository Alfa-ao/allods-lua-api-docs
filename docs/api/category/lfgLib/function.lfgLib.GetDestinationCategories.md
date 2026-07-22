# lfgLib.GetDestinationCategories

Возвращает список категорий доступных целей для поиска группы.

## Описание

```lua
lfgLib.GetDestinationCategories(): table | nil
```

Функция возвращает список категорий доступных целей для поиска группы.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` | `nil` - список категорий доступных целей (`LFGDestinationCategoryId`). Индексация таблицы начинается с 0.

## Примеры

### Получение списка категорий

```lua
local availableCategories = lfgLib.GetDestinationCategories()
```