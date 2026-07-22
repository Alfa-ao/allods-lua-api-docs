# lfgLib.GetDestinationReward

Извлекает и возвращает описание награды за прохождение целевой локации.

## Описание

```lua
lfgLib.GetDestinationReward( destinationId: LfgDestinationId ): table | nil
```

Функция формирует и возвращает структуру данных, содержащую детальную информацию о наградах за прохождение указанной локации, включая валюту, опыт, предметы и репутацию.

## Список параметров

- **`destinationId`** (`LfgDestinationId`) - Идентификатор целевой локации.

## Возвращаемые значения

Возвращает `table` | `nil` - описание о таблице:

- **`money`** (`number`) - Сумма в награду.

- **`experience`** (`number`) - Опыт в награду.

- **`loyalty`** (`number`) - Получаемая верность гильдии.

- **`authority`** (`number`) - Получаемое влияние в гильдии.

- **`mandatoryItems`** (`table`) - Список идентификаторов `ObjectId` наградных предметов, которые известны.

- **`mandatoryItemsCount`** (`number`) - Количество наградных предметов (может быть больше, чем mandatoryItems, если некоторые награды не известны). 

- **`alternativeItems`** (`table`) - Список идентификаторов `ObjectId` альтернативных наградных предметов.

- **`reputations`** (`table`) - Индексированный с 0 список `table` значений репутационных наград для разных фракций. Поля каждого пункта:
    - `[index]`
        - **`faction`** (`WString`) - имя фракции
        - **`value`** (`number`) - на сколько повысится репутация

- **`currencies`** (`table`) - Индексированный с 0 список `table` наград альтернативной валютой.
    - `[index]`
        - **`currencyId`** (`СurrencyId`) - имя альтернативной валюты
        - **`value`** (`number`) - величина награды

- **`unlocks`** (`table`) - Индексированный с 1 список идентификаторов `UnlockId` возможностей, даваемых в награду.

## Примеры

### Получение и обработка награды за локацию

```lua
local destinationReward = lfgLib.GetDestinationReward( questId )
if destinationReward then
    LogInfo( "Quest reward: ", destinationReward.money )

    for i = 0, GetTableSize( destinationReward.currencies ) - 1 do
        local currencyId = destinationReward.currencies[ i ]
        local currencyInfo = avatar.GetCurrencyInfo( currencyId )
    end
end
```

::: info Описание примера
В примере сначала извлекается описание награды для указанной локации. Если информация успешно получена, выводится сумма денежной награды. Далее в цикле перебирается список альтернативных валют, и для каждой валюты извлекается подробная информация.
:::

## Смотрите также

- [avatar.GetCurrencyInfo](../avatar/function.avatar.GetCurrencyInfo)