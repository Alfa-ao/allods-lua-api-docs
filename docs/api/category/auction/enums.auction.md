---
outline: [ 2, 4 ]
---
# Перечисления аукциона

Группы текстовых перечислений, определяющих результаты операций и статусы аукциона.

## ENUM_AuctionSearchResultMsgResult

Определяет результат попытки поиска аукционов.

### Описание

Группа текстовых перечислений, представляющих возможные итоги операции поиска аукционов. Значения перечислений используются для анализа ответа сервера, который передается через событие `EVENT_AUCTION_SEARCH_RESULT`.

### Список значений

- **`ENUM_AuctionSearchResultMsgResult_SUCCESS`** (`string`)
Поиск успешно завершен, результаты доступны для извлечения.

- **`ENUM_AuctionSearchResultMsgResult_NOLANG`** (`string`)
Произошла ошибка, связанная с отсутствием или некорректным состоянием языковых ресурсов.

- **`ENUM_AuctionSearchResultMsgResult_ERROR`** (`string`)
Произошла общая ошибка при обработке запроса на поиск.

### Обработка

Обработка значений производится в зарегистрированном обработчике события `EVENT_AUCTION_SEARCH_RESULT`.

### Примеры

#### Обработка результата поиска

```lua
function OnAuctionSearchResult( eventData )
    if eventData.sysResult == "ENUM_AuctionSearchResultMsgResult_SUCCESS" then
        LogInfo( "Поиск успешно завершен." )
    elseif eventData.sysResult == "ENUM_AuctionSearchResultMsgResult_ERROR" then
        LogInfo( "Ошибка поиска: ", eventData.sysResult )
    end
end

common.RegisterEventHandler( OnAuctionSearchResult, "EVENT_AUCTION_SEARCH_RESULT" )
```

::: info Описание примера
Регистрируется обработчик события `EVENT_AUCTION_SEARCH_RESULT`, которое приходит после отправки запроса на поиск. В зависимости от значения параметра `sysResult`, выполняется соответствующая логика: вывод сообщения об успехе или ошибке.
:::

---

## ENUM_AuctionGetResultMsgResult

Определяет результат автоматического обновления информации об аукционе.

### Описание

Группа текстовых перечислений, представляющих возможные итоги операции обновления данных конкретного лота. Значения перечислений используются для анализа ответа сервера, который передается через событие `EVENT_AUCTION_UPDATE_RESULT`.

### Список значений

- **`ENUM_AuctionGetResultMsgResult_SUCCESS`** (`string`)
Информация о лоте успешно обновлена.

- **`ENUM_AuctionGetResultMsgResult_NOTFOUND`** (`string`)
Указанный лот не найден.

- **`ENUM_AuctionGetResultMsgResult_ERROR`** (`string`)
Произошла ошибка при обновлении информации.

### Обработка

Обработка значений производится в зарегистрированном обработчике события `EVENT_AUCTION_UPDATE_RESULT`.

### Примеры

#### Обработка принудительного обновления лота

```lua
function OnAuctionUpdateResult( eventData )
    if eventData.sysResult == "ENUM_AuctionGetResultMsgResult_SUCCESS" then
        LogInfo( "Информация о лоте обновлена: ", eventData.id )
    else
        LogInfo( "Ошибка обновления лота: ", eventData.sysResult )
    end
end
common.RegisterEventHandler( OnAuctionUpdateResult, "EVENT_AUCTION_UPDATE_RESULT" )
```

---

## ENUM_AuctionGetParamsResultMsgStatus
Определяет результат запроса общих свойств аукциона.

### Описание
Группа текстовых перечислений, представляющих возможные итоги операции загрузки настроек и параметров аукциона. Значения перечислений используются для анализа ответа сервера, который передается через событие `EVENT_AUCTION_PROPERTIES`.

### Список значений
- **`ENUM_AuctionGetParamsResultMsgStatus_SUCCESS`** (`string`)
Свойства аукциона успешно загружены.

- **`ENUM_AuctionGetParamsResultMsgStatus_ERROR`** (`string`)
Произошла ошибка при загрузке свойств.

### Обработка
Обработка значений производится в зарегистрированном обработчике события `EVENT_AUCTION_PROPERTIES`.

### Примеры
#### Обработка загрузки свойств аукциона

```lua
function OnAuctionProperties( eventData )
    if eventData.sysResult == "ENUM_AuctionGetParamsResultMsgStatus_SUCCESS" then
        LogInfo( "Свойства аукциона успешно загружены." )
    else
        LogInfo( "Ошибка загрузки свойств: ", eventData.sysResult )
    end
end
common.RegisterEventHandler( OnAuctionProperties, "EVENT_AUCTION_PROPERTIES" )
```

---

## ENUM_AuctionDiscardResultMsgResult
Определяет результат попытки отмены аукционного лота.

### Описание
Группа текстовых перечислений, представляющих возможные итоги операции отмены лота. Значения перечислений используются для анализа ответа сервера, который передается через событие `EVENT_AUCTION_DISCARD_RESULT`.

::: warning Замечание
В случае прихода значения `ENUM_AuctionDiscardResultMsgResult_OLDVERSION` обновление данных аукциона инициируется автоматически. Для получения актуального состояния необходимо ожидать прихода события `EVENT_AUCTION_UPDATE_RESULT`.
:::

### Список значений
- **`ENUM_AuctionDiscardResultMsgResult_SUCCESS`** (`string`)
Лот успешно отменен.

- **`ENUM_AuctionDiscardResultMsgResult_ERROR`** (`string`)
Произошла ошибка при обработке запроса на отмену.

- **`ENUM_AuctionDiscardResultMsgResult_NOMONEY`** (`string`)
Недостаточно средств для оплаты штрафа за отмену лота.

- **`ENUM_AuctionDiscardResultMsgResult_OLDVERSION`** (`string`)
Информация об аукционе устарела. Данные обновляются автоматически, требуется ожидание события `EVENT_AUCTION_UPDATE_RESULT`.

### Обработка
Обработка значений производится в зарегистрированном обработчике события `EVENT_AUCTION_DISCARD_RESULT`.

### Примеры
#### Обработка результата отмены лота

```lua
function OnAuctionDiscardResult( eventData )
    if eventData.sysResult == "ENUM_AuctionDiscardResultMsgResult_SUCCESS" then
        LogInfo( "Лот успешно отменен: ", eventData.id )
    elseif eventData.sysResult == "ENUM_AuctionDiscardResultMsgResult_OLDVERSION" then
        LogInfo( "Информация устарела. Ожидание события EVENT_AUCTION_UPDATE_RESULT." )
    end
end
common.RegisterEventHandler( OnAuctionDiscardResult, "EVENT_AUCTION_DISCARD_RESULT" )
```

---

## ENUM_AuctionDescriptorParticipationStatus
Определяет статус участия главного персонажа в аукционе.

### Описание
Группа текстовых перечислений, определяющих роль главного персонажа в отношении конкретного аукционного лота. Значения перечислений возвращаются в поле `participationStatus` таблицы, формируемой функцией `auction.GetAuctionInfo`.

### Список значений
- **`ENUM_AuctionDescriptorParticipationStatus_NONE`** (`string`)
Персонаж не участвует в торгах по данному лоту.

- **`ENUM_AuctionDescriptorParticipationStatus_OWNER`** (`string`)
Персонаж является продавцом (владельцем) лота.

- **`ENUM_AuctionDescriptorParticipationStatus_WINNER`** (`string`)
Персонаж является победителем торгов (сделал последнюю ставку или выкупил предмет).

### Обработка
Значение извлекается из поля `participationStatus` таблицы, возвращаемой функцией `auction.GetAuctionInfo`.

### Примеры
#### Проверка статуса участия

```lua
local auctionInfo = auction.GetAuctionInfo( id )
if auctionInfo then
    if auctionInfo.participationStatus == "ENUM_AuctionDescriptorParticipationStatus_OWNER" then
        LogInfo( "Персонаж является владельцем лота." )
    elseif auctionInfo.participationStatus == "ENUM_AuctionDescriptorParticipationStatus_WINNER" then
        LogInfo( "Персонаж выиграл торги." )
    end
end
```

---

## ENUM_AuctionBidResultMsgResult
Определяет результат попытки игроком сделать ставку или выкупить предмет на аукционе.

### Описание
Группа текстовых перечислений, представляющих возможные итоги операции размещения ставки. Значения перечислений используются для анализа ответа сервера, который передается через событие `EVENT_AUCTION_BID_RESULT`.

::: warning Замечание
В случае прихода значения `ENUM_AuctionBidResultMsgResult_OLDVERSION` обновление данных аукциона инициируется автоматически. Для получения актуального состояния необходимо ожидать прихода события `EVENT_AUCTION_UPDATE_RESULT`.
:::

### Список значений
- **`ENUM_AuctionBidResultMsgResult_SUCCESS`** (`string`)
Ставка успешно размещена.

- **`ENUM_AuctionBidResultMsgResult_ERROR`** (`string`)
Произошла ошибка при обработке запроса на размещение ставки.

- **`ENUM_AuctionBidResultMsgResult_NOMONEY`** (`string`)
Недостаточно средств для совершения ставки.

- **`ENUM_AuctionBidResultMsgResult_OLDVERSION`** (`string`)
Информация об аукционе устарела. Данные обновляются автоматически, требуется ожидание события `EVENT_AUCTION_UPDATE_RESULT`.

- **`ENUM_AuctionBidResultMsgResult_SAMEUSER`** (`string`)
Игрок пытается сделать ставку или выкупить предмет у самого себя.

- **`ENUM_AuctionBidResultMsgResult_NOTFOUND`** (`string`)
Указанный лот не найден. Вероятно, он был выкуплен другим игроком или снят с продажи.

### Обработка
Обработка значений производится в зарегистрированном обработчике события `EVENT_AUCTION_BID_RESULT`.

### Примеры
#### Обработка результата ставки

```lua
function OnAuctionBidResult( eventData )
    if eventData.sysResult == "ENUM_AuctionBidResultMsgResult_SUCCESS" then
        LogInfo( "Ставка успешно размещена." )
    elseif eventData.sysResult == "ENUM_AuctionBidResultMsgResult_NOMONEY" then
        LogInfo( "Недостаточно средств для размещения ставки." )
    elseif eventData.sysResult == "ENUM_AuctionBidResultMsgResult_NOTFOUND" then
        LogInfo( "Лот был выкуплен или снят с продажи." )
    elseif eventData.sysResult == "ENUM_AuctionBidResultMsgResult_OLDVERSION" then
        LogInfo( "Информация об аукционе устарела. Ожидание события EVENT_AUCTION_UPDATE_RESULT." )
    end
end
common.RegisterEventHandler( OnAuctionBidResult, "EVENT_AUCTION_BID_RESULT" )
```

---

## ENUM_AuctionCreateResultMsg
Определяет результат попытки создания аукционного лота.

### Описание
Группа текстовых перечислений, представляющих возможные итоги операции создания нового лота. Значения перечислений используются для анализа ответа сервера, который передается через событие `EVENT_AUCTION_CREATION_RESULT`.

### Список значений
- **`ENUM_AuctionCreateResultMsgResult_SUCCESS`** (`string`)
Лот успешно создан и выставлен на торги.

- **`ENUM_AuctionCreateResultMsgResult_ERROR`** (`string`)
Произошла ошибка при создании лота.

- **`ENUM_AuctionCreateResultMsgResult_NOITEM`** (`string`)
Предмет отсутствует в инвентаре или недоступен для продажи.

- **`ENUM_AuctionCreateResultMsgResult_NOMONEY`** (`string`)
Недостаточно средств для оплаты залога или комиссии за выставление лота.

### Обработка
Обработка значений производится в зарегистрированном обработчике события `EVENT_AUCTION_CREATION_RESULT`.

### Примеры
#### Обработка результата создания лота

```lua
function OnAuctionCreationResult( eventData )
    if eventData.sysResult == "ENUM_AuctionCreateResultMsgResult_SUCCESS" then
        LogInfo( "Лот успешно создан." )
    elseif eventData.sysResult == "ENUM_AuctionCreateResultMsgResult_NOITEM" then
        LogInfo( "Предмет недоступен для продажи." )
    elseif eventData.sysResult == "ENUM_AuctionCreateResultMsgResult_NOMONEY" then
        LogInfo( "Недостаточно средств для оплаты комиссии." )
    else
        LogInfo( "Ошибка создания лота: ", eventData.sysResult )
    end
end
common.RegisterEventHandler( OnAuctionCreationResult, "EVENT_AUCTION_CREATION_RESULT" )
```