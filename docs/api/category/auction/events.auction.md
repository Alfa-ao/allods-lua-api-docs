---
outline: [ 2, 4 ]
---

# События Аукциона

## EVENT_AUCTION_BID_RESULT

Передает результат размещения ставки на аукционе.

### Описание

```lua
EVENT_AUCTION_BID_RESULT
```

Событие приходит в ответ на запрос `auction.Bid(id, price)`. Работает по принципу коллбека, передавая клиенту итог выполнения операции (успех, ошибка или отклонение ставки).

::: warning Замечание
Коды результата операции описаны в перечислении `ENUM_AuctionBidResultMsgResult_...`.
:::

### Список параметров

- **`id`** (`ObjectId`)
Уникальный идентификатор лота аукциона.

- **`sysResult`** (`string`)
Код результата операции. Значения соответствуют перечислению `ENUM_AuctionBidResultMsgResult_...`.

### Возвращаемые значения

Обработка события производится в зарегистрированном обработчике. Коды результата см. в [ENUM](enums.auction#enum-auctionbidresultmsgresult).

### Примеры

#### Обработка результата размещения ставки

```lua
function OnAuctionBidResult( eventData )
    if eventData.sysResult == "ENUM_AuctionBidResultMsgResult_SUCCESS" then
        LogInfo( "Ставка успешно размещена для лота: ", eventData.id )
    else
        LogInfo( "Ошибка размещения ставки: ", eventData.sysResult )
    end
end

common.RegisterEventHandler( OnAuctionBidResult, "EVENT_AUCTION_BID_RESULT" )
```

---

## EVENT_AUCTION_CREATION_RESULT

Передает результат создания аукционного лота.

### Описание

```lua
EVENT_AUCTION_CREATION_RESULT
```

Событие приходит в ответ на запрос `auction.CreateForItem(...)`. Работает по принципу коллбека, сообщая о статусе создания нового лота.

::: warning Замечание
Коды результата операции описаны в перечислении `ENUM_AuctionCreateResultMsg_...`.
:::

### Список параметров

- **`sysResult`** (`string`)
Код результата операции. Значения соответствуют перечислению `ENUM_AuctionCreateResultMsg_...`.

### Возвращаемые значения

Обработка события производится в зарегистрированном обработчике. Коды результата см. в [ENUM](enums.auction#enum-auctioncreateresultmsg).

### Примеры

#### Обработка результата создания лота

```lua
function OnAuctionCreationResult( eventData )
    if eventData.sysResult == "ENUM_AuctionCreateResultMsg_SUCCESS" then
        LogInfo( "Лот успешно создан." )
    else
        LogInfo( "Ошибка создания лота: ", eventData.sysResult )
    end
end

common.RegisterEventHandler( OnAuctionCreationResult, "EVENT_AUCTION_CREATION_RESULT" )
```

---

## EVENT_AUCTION_DISCARD_RESULT

Передает результат отмены аукционного лота.

### Описание

```lua
EVENT_AUCTION_DISCARD_RESULT
```

Событие приходит в ответ на запрос `auction.Discard(id)`. Работает по принципу коллбека, сообщая о статусе отмены указанного лота.

::: warning Замечание
Коды результата операции описаны в перечислении `ENUM_AuctionDiscardResultMsgResult_...`.
:::

### Список параметров

- **`id`** (`ObjectId`)
Уникальный идентификатор отменяемого аукциона.

- **`sysResult`** (`string`)
Код результата операции. Значения соответствуют перечислению `ENUM_AuctionDiscardResultMsgResult_...`.

### Возвращаемые значения

Обработка события производится в зарегистрированном обработчике. Коды результата см. в [ENUM](enums.auction#enum-auctiondiscardresultmsgresult).

### Примеры

#### Обработка результата отмены лота

```lua
function OnAuctionDiscardResult( eventData )
    if eventData.sysResult == "ENUM_AuctionDiscardResultMsgResult_SUCCESS" then
        LogInfo( "Лот успешно отменен: ", eventData.id )
    else
        LogInfo( "Ошибка отмены лота: ", eventData.sysResult )
    end
end

common.RegisterEventHandler( OnAuctionDiscardResult, "EVENT_AUCTION_DISCARD_RESULT" )
```

---

## EVENT_AUCTION_PROPERTIES

Передает свойства и параметры аукциона.

### Описание

```lua
EVENT_AUCTION_PROPERTIES
```

Событие приходит в ответ на запрос `auction.GetProperties()`. Работает по принципу коллбека, предоставляя актуальные настройки и параметры аукциона после их загрузки с сервера.

::: warning Замечание
Коды результата операции описаны в перечислении `ENUM_AuctionGetParamsResultMsgStatus_...`.
:::

### Список параметров

- **`id`** (`ObjectId`)
Идентификатор аукциона (или контекста аукциона).

- **`sysResult`** (`string`)
Код результата операции. Значения соответствуют перечислению `ENUM_AuctionGetParamsResultMsgStatus_...`.

### Возвращаемые значения

Обработка события производится в зарегистрированном обработчике. Коды результата см. в [ENUM](enums.auction#enum-auctiongetparamsresultmsgstatus).

### Примеры

#### Обработка загрузки свойств аукциона

```lua
function OnAuctionProperties( eventData )
    if eventData.sysResult == "ENUM_AuctionGetParamsResultMsgStatus_SUCCESS" then
        LogInfo( "Свойства аукциона успешно загружены." )
        -- Дальнейшее использование auction.GetProperties()
    else
        LogInfo( "Ошибка загрузки свойств: ", eventData.sysResult )
    end
end

common.RegisterEventHandler( OnAuctionProperties, "EVENT_AUCTION_PROPERTIES" )
```

---

## EVENT_AUCTION_SEARCH_RESULT

Передает результаты поиска аукционов.

### Описание

```lua
EVENT_AUCTION_SEARCH_RESULT
```

Событие приходит в ответ на запрос `auction.Search(...)`. Работает по принципу коллбека, сообщая о завершении поиска и передавая общее количество страниц. В случае успеха список найденных аукционов на текущей странице извлекается через `auction.GetAuctions()`.

::: warning Замечание
Коды результата операции описаны в перечислении `ENUM_AuctionSearchResultMsgResult_...`.
:::

### Список параметров

- **`sysResult`** (`string`)
Код результата операции. Значения соответствуют перечислению `ENUM_AuctionSearchResultMsgResult_...`.

- **`totalPagesCount`** (`number`)
Общее количество страниц с результатами поиска.

### Возвращаемые значения

Обработка события производится в зарегистрированном обработчике. Коды результата см. в [ENUM](enums.auction#enum-auctionsearchresultmsgresult).

### Примеры

#### Обработка завершения поиска

```lua
function OnAuctionSearchResult( eventData )
    if eventData.sysResult == "ENUM_AuctionSearchResultMsgResult_SUCCESS" then
        LogInfo( "Поиск завершен. Всего страниц: ", eventData.totalPagesCount )
        local auctions = auction.GetAuctions()
        -- Обработка списка аукционов
    else
        LogInfo( "Ошибка поиска: ", eventData.sysResult )
    end
end

common.RegisterEventHandler( OnAuctionSearchResult, "EVENT_AUCTION_SEARCH_RESULT" )
```

---

## EVENT_AUCTION_UPDATE_RESULT

Передает результат автоматического обновления информации об аукционе.

### Описание

```lua
EVENT_AUCTION_UPDATE_RESULT
```

Событие приходит в ответ на запрос обновления информации о конкретном лоте. Работает по принципу коллбека, сообщая о статусе обновления данных лота.

### Список параметров

- **`id`** (`ObjectId`)
Уникальный идентификатор обновляемого аукциона.

- **`sysResult`** (`string`)
Код результата операции.

### Возвращаемые значения

Обработка события производится в зарегистрированном обработчике. Коды результата см. в [ENUM](enums.auction#enum-auctiongetresultmsgresult).

### Примеры

#### Обработка принудительного обновления лота

```lua
function OnAuctionUpdateResult( eventData )
    if eventData.sysResult == "ENUM_AuctionGetResultMsgResult_SUCCESS" then
        LogInfo( "Информация о лоте обновлена: ", eventData.id )
        -- Повторное получение актуальных данных через auction.GetAuctionInfo(data.id)
    else
        LogInfo( "Ошибка обновления лота: ", eventData.sysResult )
    end
end

common.RegisterEventHandler( OnAuctionUpdateResult, "EVENT_AUCTION_UPDATE_RESULT" )
```