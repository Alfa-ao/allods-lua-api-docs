# matchMaking.GetEventsByCategory

Получает список идентификаторов существующих инстанс-ивентов, относящихся к выбранной категории.

## Описание

```lua
matchMaking.GetEventsByCategory( categoryId: InstancedEventCategoryId, type: string | nil ): table | nil
```

Функция извлекает и возвращает массив идентификаторов существующих инстанс-ивентов, отфильтрованных по заданной категории и типу. Если информация отсутствует, возвращается `nil`.

## Список параметров

- **`categoryId`** (`InstancedEventCategoryId`) - Идентификатор категории инстанс-ивентов.

- **`type`** (`string` | `nil`) - Тип инстанс-ивентов. Принимает значения `"pvp"` для сражений против других игроков, `"pve"` для сражений против мобов или `nil` для получения всех сражений.

## Возвращаемые значения

Возвращает `table` | `nil` - Таблица, индексируемая от `0`, где каждое поле содержит идентификатор (`ObjectId`) инстанс-ивента. Если информация о существующих инстанс-ивентах отсутствует, возвращается `nil`.

## Примеры

### Получение списка PvE-ивентов для категории

```lua
local pveEvents = {}
local categories = matchMaking.GetEventCategories()
if categories then
    pveEvents = matchMaking.GetEventsByCategory( categories[0], "pve" )
end
```

::: info Описание примера
В примере запрашивается список категорий инстанс-ивентов. При успешном получении списка извлекается идентификатор первой категории, который передается в функцию для получения списка PvE-ивентов.
:::

## Смотрите также

- [InstancedEventCategoryId](adsfsadfasd)
- [matchMaking.GetEventCategories](function.matchMaking.GetEventCategories)