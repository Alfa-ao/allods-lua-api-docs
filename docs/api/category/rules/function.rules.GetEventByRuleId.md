# rules.GetEventByRuleId
Извлекает идентификатор игрового события по его RuleId.

## Описание

```lua
rules.GetEventByRuleId( ruleId: RuleId, getHidden: boolean | nil ): ObjectId | nil
```

Функция извлекает идентификатор описания правил игрового события по указанному идентификатору рула. Если событие не найдено, возвращается `nil`.

## Список параметров

- **`ruleId`** (`RuleId`) - Идентификатор рула (ресурса события).

- **`getHidden`** (`boolean` | `nil`) - Флаг, указывающий на необходимость передачи идентификаторов скрытых событий. По умолчанию принимает значение `false`.

## Возвращаемые значения

Возвращает `ObjectId` | `nil` - идентификатор описания правил события, если событие найдено, или `nil`, если событие не найдено.

## Примеры

### Получение информации о событии
```lua
local eventRuleId = rules.GetEventByRuleId( ruleId )
if eventRuleId then
    local eventRuleInfo = rules.GetEventInfo( eventRuleId )
    if eventRuleInfo then
        LogInfo( "Info: ", eventRuleInfo.name )

        if eventRuleInfo.types[ RULE_TYPE_ACTION ] then
            local rewardMoney = eventRuleInfo.reward.money
        end
    end
end
```

::: info Описание примера
В примере запрашивается идентификатор события по его RuleId. При успешном получении извлекается подробная информация о событии, выводится его имя в лог и проверяется наличие типа действия для получения награды в виде денег.
:::

## Смотрите также

- [rules.GetEventInfo](function.rules.GetEventInfo)
- [RULE_TYPE_ACTION](dafsfsaf)