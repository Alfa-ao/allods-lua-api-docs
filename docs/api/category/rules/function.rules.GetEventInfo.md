# rules.GetEventInfo
Получает описание правил игрового события.

## Описание

```lua
rules.GetEventInfo( eventRuleId: ObjectId ): table|nil
```

Функция извлекает и возвращает таблицу с описанием правил игрового события. Если информация не получена, возвращается `nil`.

## Список параметров

- **`eventRuleId`** (`ObjectId`) - Идентификатор описания правил события.

## Возвращаемые значения

Возвращает `table` | `nil`.
Если информация успешно получена, возвращается таблица со следующими полями:

- **`id`** (`ObjectId`) - Идентификатор описания правил события.

- **`resourceId`** (`RuleId`) - Уникальный идентификатор ресурса события.

- **`name`** (`WString`) - Название события.

- **`description`** (`WString`) - Текстовое описание события.

- **`sysName`** (`string`) - Нелокализуемый строковый идентификатор для опознания избранных событий скриптами UI.

- **`sysDebugName`** (`string` | `nil`) - Уникальный строковый идентификатор события для дебага (путь к файлу ресурса).

- **`isActive`** (`boolean`) - Флаг активности события.

- **`rating`** (`number`) - Рейтинг события.

- **`level`** (`number`) - Рекомендуемый уровень игроков.

- **`zonesMapId`** (`ObjectId` | `nil`) - Идентификатор интерфейсной карты, на которой происходит событие.

- **`factionId`** (`FactionId` | `nil`) - Идентификатор фракции игроков, участвующих в событии.

- **`reward`** (`table`) - Таблица с описанием награды, получаемой игроками. Формат полей таблицы аналогичен возвращаемому значению функции `avatar.GetQuestReward`.

- **`types`** (`table`) - Таблица принадлежности события к специальному типу. Элементы таблицы с индексами типа события (`RULE_TYPE_*`) содержат `true`, остальные не заполнены.

- **`location`** (`QuestLocation` | `nil`) - Точка начала события.

## Примеры

### Получение информации о событии и проверка награды

```lua
local eventRuleInfo = rules.GetEventInfo( eventRuleId )
if eventRuleInfo then
    LogInfo( "Info: ", eventRuleInfo.name )

    if eventRuleInfo.types[ RULE_TYPE_RECOMMENDED ] then
        local rewardMoney = eventRuleInfo.reward.money
    end
end
```

::: info Описание примера
В примере запрашивается информация о правилах игрового события по его идентификатору. Если функция возвращает таблицу, в лог выводится название события. Далее проверяется наличие события в списке рекомендуемых по типу `RULE_TYPE_RECOMMENDED`, и при совпадении извлекается значение денежной награды из таблицы `reward`.
:::

## Смотрите также

- [unit.GetFactionId](/api/category/unit/function.unit.GetFactionId.md)
- [avatar.GetQuestReward](/api/category/avatar/function.avatar.GetQuestReward.md)
- [RULE_TYPE_*](/api/constants/constants.RULE_TYPE.md)
- [QuestLocation](/api/types/QuestLocation.md)