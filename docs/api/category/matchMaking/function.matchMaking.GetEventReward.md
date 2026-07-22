# matchMaking.GetEventReward

Извлекает описание награды за успешное завершение инстанс-ивента.

## Описание

```lua
matchMaking.GetEventReward( eventId: ObjectId ): table | nil
```

Функция возвращает таблицу с описанием награды за успешное завершение инстанс-ивента. Если информация не получена, возвращается `nil`.

## Список параметров

- **`eventId`** (`ObjectId`) - Идентификатор инстанс-ивента.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица с описанием награды, если информация успешно получена.

При успешном получении информации возвращается таблица со следующими полями:

- **`money`** (`number`) - Сумма в награду.

- **`experience`** (`number`) - Опыт в награду.

- **`loyalty`** (`number`) - Получаемая верность гильдии.

- **`authority`** (`number`) - Получаемое влияние в гильдии.

- **`mandatoryItems`** (`table` of `ObjectId`) - Список идентификаторов известных наградных предметов.

- **`mandatoryItemsCount`** (`number`) - Количество наградных предметов (может быть больше, чем `mandatoryItems`, если некоторые награды не известны).

- **`alternativeItems`** (`table` of `ObjectId`) - Список идентификаторов альтернативных наградных предметов.

- **`reputations`** (`table` of `table`) - Индексированный с `0` список значений репутационных наград для разных фракций. Поля каждого пункта:

  - **`faction`** (`WString`) - Имя фракции.

  - **`value`** (`number`) - Значение повышения репутации.

- **`currencies`** (`table` of `table`) - Индексированный с `0` список наград альтернативной валютой. Поля каждого пункта:

  - **`currencyId`** (`CurrencyId`) - Идентификатор альтернативной валюты.

  - **`value`** (`number`) - Величина награды.

- **`unlocks`** (`table` of `UnlockId`) - Индексированный с `1` список идентификаторов возможностей, даваемых в награду.

## Примеры

### Получение и обработка информации о награде

```lua
local eventReward = matchMaking.GetEventReward( eventId )
if eventReward then
    LogInfo( "Event reward: ", eventReward.money )

    for i = 0, GetTableSize( eventReward.currencies ) - 1 do
        local currencyId = eventReward.currencies[ i ]
        local currencyInfo = avatar.GetCurrencyInfo( currencyId )
    end
end
```

::: info Описание примера
В примере запрашивается описание награды за инстанс-ивент. Если информация успешно получена, выводится сумма денежной награды. Затем в цикле перебираются идентификаторы альтернативных валют из списка `currencies`, и для каждого идентификатора запрашивается подробная информация о валюте.
:::

## Смотрите также

- [avatar.GetCurrencyInfo](function.avatar.GetCurrencyInfo)