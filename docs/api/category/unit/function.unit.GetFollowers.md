# unit.GetFollowers

Возвращает список юнитов, подчинённых персонажу (петы, ассистенты, турель и т.п.).

[<Badge type="warning" text="17.0.01.43" />](/index.md#17.0.0-unit.GetFollowers)

## Описание

```lua
unit.GetFollowers( unitId: ObjectId ): table
```

Функция извлекает и возвращает список юнитов, подчинённых указанному персонажу (петы, ассистенты, турель и т.п.). Возвращается таблица с идентификаторами подчинённых юнитов (индексация от 1).

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор игрока.

## Возвращаемые значения

Возвращает `table` - Таблица с идентификаторами подчинённых юнитов (индексация от 1) или пустая, в случае возникновения ошибки.

## Примеры

### Получение списка подчинённых юнитов

```lua
local followers = unit.GetFollowers( unitId )
for _, followerId in pairs( followers ) do
    local followerName = object.GetName( followerId )
end
```

::: info Описание примера
В примере получается список подчинённых юнитов для указанного игрока. Затем в цикле перебираются все полученные идентификаторы, и для каждого извлекается имя юнита с помощью функции `object.GetName`.
:::

## Смотрите также

- [object.GetName](/api/category/object/function.object.GetName.md)
- [EVENT_UNIT_FOLLOWERS_LIST_CHANGED](/api/events/events.EVENT_UNIT_.md#event-unit-followers-list-changed)