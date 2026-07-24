# rules.GetEventBySysName

Возвращает идентификатор описания правил события по его системному имени.

## Описание

```lua
rules.GetEventBySysName( sysName: string, getHidden: boolean | nil ): ObjectId | nil
```

Функция извлекает и возвращает идентификатор описания правил события по его нелокализуемому строковому идентификатору. Если событие не найдено, возвращается `nil`.

## Список параметров

- **`sysName`** (`string`) - Нелокализуемый строковый идентификатор события.

- **`getHidden`** (`boolean` | `nil`) - Флаг, указывающий на необходимость передачи идентификаторов скрытых событий. По умолчанию `false`.

## Возвращаемые значения

Возвращает `ObjectId` | `nil` - Идентификатор описания правил события, если событие найдено, иначе `nil`.

## Примеры

### Получение информации о событии

```lua
local sysName = "EVENT_EXAMPLE"
local eventRuleId = rules.GetEventBySysName( sysName )
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
В примере запрашивается идентификатор описания правил события по его системному имени. Если идентификатор успешно получен, извлекается подробная информация о событии. При наличии типа действия `RULE_TYPE_ACTION` извлекается значение награды в виде денег.
:::

## Смотрите также

- [rules.GetEventInfo](function.rules.GetEventInfo)
- [RULE_TYPE_ACTION](dafsfsaf)