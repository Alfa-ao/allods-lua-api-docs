# matchMaking.GetEventCategories

Извлекает список категорий существующих инстанс-ивентов.

## Описание

```lua
matchMaking.GetEventCategories(): table|nil
```

Функция возвращает таблицу с идентификаторами категорий существующих инстанс-ивентов. Если категории отсутствуют, функция возвращает `nil`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица идентификаторов категорий инстанс-ивентов или `nil`, если они отсутствуют.

- **`[индекс]`** (`InstancedEventCategoryId`) - Идентификатор ресурса (`ResourceId`) категории инстанс-ивента. Таблица индексируется от `0`.

## Примеры

### Получение списка категорий

```lua
local categories = matchMaking.GetEventCategories()
```

## Смотрите также

- [matchMaking.GetEventsByCategory](function.matchMaking.GetEventsByCategory)