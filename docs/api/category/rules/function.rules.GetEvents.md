# rules.GetEvents

Получает список идентификаторов игровых событий.

## Описание

```lua
rules.GetEvents( getHidden: boolean | nil ): table
```

Возвращает пустой список, если данные еще не получены с сервера. При первом получении и последующих обновлениях передается событие `EVENT_MISSION_RULES_CHANGED`.

## Список параметров

- **`getHidden`** (`boolean` | `nil`) - Флаг, указывающий на необходимость возврата скрытых событий. По умолчанию `false`.

## Возвращаемые значения

Возвращает `table` - индексированная с `0` таблица с идентификаторами (`ObjectId`) правил событий.

## Примеры

### Получение информации о правилах событий

```lua
local eventRules = rules.GetEvents()
for index = 0, GetTableSize( eventRules ) - 1 do
    local eventRuleInfo = rules.GetEventInfo( eventRules[ index ] )
end
```

::: info Описание примера
Извлекается список идентификаторов правил событий. В цикле перебираются все полученные идентификаторы, и для каждого вызывается функция получения подробной информации.
:::

## Смотрите также

- [EVENT_MISSION_RULES_CHANGED](events.mission_rules#event-mission-rules-changed)
- [rules.GetEventInfo](function.rules.GetEventInfo)