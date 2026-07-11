# ENUM_AuctionBidResultMsgResult

Определяет результат попытки размещения ставки на аукционе.

## Описание

Группа **`текстовых`** перечеслений, представляющих возможные итоги операции размещения ставки на аукционе. Значения перечислений используются для анализа ответа сервера, который передается через событие `EVENT_AUCTION_BID_RESULT`.

::: warning Замечание
В случае прихода перечисления `ENUM_AuctionBidResultMsgResult_OLDVERSION` обновление данных аукциона создается автоматически. Для получения актуального состояния необходимо ожидать приход события `EVENT_AUCTION_UPDATE_RESULT`.
:::

## Список Enums

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

## Примеры

### Обработка результата ставки

```lua
-- Регистрация обработчика события EVENT_AUCTION_BID_RESULT
function OnAuctionBidResult( eventData )
    if result == "ENUM_AuctionBidResultMsgResult_SUCCESS" then
        LogInfo( "Ставка успешно размещена." )
    elseif result == "ENUM_AuctionBidResultMsgResult_NOMONEY" then
        LogInfo( "Недостаточно средств для размещения ставки." )
    elseif result == "ENUM_AuctionBidResultMsgResult_NOTFOUND" then
        LogInfo( "Лот был выкуплен или снят с продажи." )
    elseif result == "ENUM_AuctionBidResultMsgResult_OLDVERSION" then
        LogInfo( "Информация об аукционе устарела. Ожидание события EVENT_AUCTION_UPDATE_RESULT." )
    end
end

common.RegisterEventHandler( OnAuctionBidResult, "EVENT_AUCTION_BID_RESULT" )
```

::: info Разбор результата
В примере регистрируется обработчик события `EVENT_AUCTION_BID_RESULT`, которое приходит после отправки ставки. В зависимости от значения параметра `result` (соответствующего одной из перечислений `ENUM_AuctionBidResultMsgResult_...`), выполняется соответствующая логика: вывод сообщения об успехе, ошибке нехватки средств, отсутствии лота или устаревании данных.
:::