---
outline: [ 1, 4 ]
---

# AUCTION_ORDERFIELD_*

Определяет столбец для сортировки результатов поиска аукционов.

## Описание

Группа констант, задающая поле, по которому производится сортировка списка аукционов при выполнении поискового запроса. Значения констант используются в качестве параметра `orderField` в функции `auction.Search` для указания критерия упорядочивания выдаваемых результатов.

::: warning Замечание
Константы применяются исключительно в функции `auction.Search` для указания поля сортировки. Направление сортировки (по возрастанию или убыванию) задается отдельным логическим параметром `asc`.
:::

## Список констант

- **`AUCTION_ORDERFIELD_NAME`** (`number` `0`)
Задает сортировку результатов по имени лота.

- **`AUCTION_ORDERFIELD_CLASS`** (`number` `1`)
Задает сортировку результатов по классу предмета.

- **`AUCTION_ORDERFIELD_SLOT`** (`number` `2`)
Задает сортировку результатов по слоту экипировки предмета.

- **`AUCTION_ORDERFIELD_RARETY`** (`number` `3`)
Задает сортировку результатов по редкости (качеству) предмета.

- **`AUCTION_ORDERFIELD_LEVEL`** (`number` `4`)
Задает сортировку результатов по уровню предмета.

- **`AUCTION_ORDERFIELD_TYPE`** (`number` `5`)
Задает сортировку результатов по типу предмета.

- **`AUCTION_ORDERFIELD_BID`** (`number` `6`)
Задает сортировку результатов по размеру текущей ставки.

- **`AUCTION_ORDERFIELD_BUYOUT`** (`number` `7`)
Задает сортировку результатов по цене выкупа.

- **`AUCTION_ORDERFIELD_LEFTTIME`** (`number` `8`)
Задает сортировку результатов по оставшемуся времени до завершения торгов.

- **`AUCTION_ORDERFIELD_NONE`** (`number` `9`)
Порядок элементов определяется на стороне сервера.

## Примеры

### Сортировка по имени (AUCTION_ORDERFIELD_NAME)

```lua
local filter = { name = userMods.ToWString( "Меч" ) }
auction.Search( filter, AUCTION_ORDERFIELD_NAME, true, 1 )
```

::: info Описание примера
Происходит поиск предметов, содержащих "Меч" в названии. Результаты сортируются по алфавиту (по возрастанию, так как передан параметр `true`).
:::

### Сортировка по классу предмета (AUCTION_ORDERFIELD_CLASS)

(HELP) Уточнить itemClass

```lua
local filter = { itemClass = "WEAPON" }
auction.Search( filter, AUCTION_ORDERFIELD_CLASS, true, 1 )
```

::: info Описание примера
Выполняется поиск оружия. Результаты упорядочиваются по внутреннему идентификатору класса предмета.
:::

### Сортировка по слоту экипировки (AUCTION_ORDERFIELD_SLOT)

(HELP) Уточнить dressSlot EnumDressSlot.html

```lua
local filter = { dressSlot = DRESS_SLOT_RUNE }
auction.Search( filter, AUCTION_ORDERFIELD_SLOT, true, 1 )
```

::: info Описание примера
Поиск ограничен предметами для слота "Руна". Сортировка происходит по числовому значению слота экипировки.
:::

### Сортировка по редкости (AUCTION_ORDERFIELD_RARETY)

(HELP) Указать ссылку на ITEM_QUALITY_*

```lua
local filter = { rarityMin = ITEM_QUALITY_EPIC, rarityMax = ITEM_QUALITY_DRAGON }
auction.Search( filter, AUCTION_ORDERFIELD_RARETY, false, 1 )
```

::: info Описание примера
Ищутся предметы от обычного до эпического качества. Сортировка выполняется по убыванию редкости (от эпического к обычному), так как передан параметр `false`.
:::

::: danger (DEPRECATED)
AUCTION_ORDERFIELD_RARETY -> AUCTION_ORDERFIELD_RARITY
:::

### Сортировка по уровню (AUCTION_ORDERFIELD_LEVEL)

```lua
local filter = { levelMin = 10, levelMax = 20 }
auction.Search( filter, AUCTION_ORDERFIELD_LEVEL, false, 1 )
```

::: info Описание примера
Производится поиск предметов с уровнем от 10 до 20. Результаты сортируются по убыванию уровня (от 20 к 10).
:::

### Сортировка по типу предмета (AUCTION_ORDERFIELD_TYPE)

(HELP) Уточнить категории

```lua
local filter = { rootCategory = 1 }
auction.Search( filter, AUCTION_ORDERFIELD_TYPE, true, 1 )
```

::: info Описание примера
Поиск ведется в первой корневой категории. Упорядочивание результатов происходит по типу предмета внутри заданной категории.
:::

### Сортировка по текущей ставке (AUCTION_ORDERFIELD_BID)

```lua
local filter = { bidMin = 10 }
auction.Search( filter, AUCTION_ORDERFIELD_BID, true, 1 )
```

::: info Описание примера
Ищутся лоты с текущей ставкой не менее 10 меди. Список сортируется по возрастанию цены текущей ставки.
:::

### Сортировка по цене выкупа (AUCTION_ORDERFIELD_BUYOUT)

```lua
local filter = { buyoutMax = 5000 }
auction.Search( filter, AUCTION_ORDERFIELD_BUYOUT, false, 1 )
```

::: info Описание примера
Выполняется поиск лотов с ценой выкупа до 50 серебра. Результаты упорядочиваются по убыванию цены выкупа (от самых дорогих к дешевым).
:::

### Сортировка по оставшемуся времени (AUCTION_ORDERFIELD_LEFTTIME)

```lua
local filter = {}
auction.Search( filter, AUCTION_ORDERFIELD_LEFTTIME, true, 1 )
```

::: info Описание примера
Запускается глобальный поиск без фильтров. Результаты сортируются по возрастанию оставшегося времени (сначала отображаются лоты, которые скоро завершатся).
:::

### Без сортировки (AUCTION_ORDERFIELD_NONE)

```lua
local filter = { onlyMyAuctions = true }
auction.Search( filter, AUCTION_ORDERFIELD_NONE, false, 1 )
```

::: info Описание примера
Запрашивается список только собственных аукционов игрока. Явная сортировка на стороне клиента не применяется, порядок выдачи определяется сервером.
:::

---

# AUCTION_CREATETIME_*

Определяет длительность действия аукциона при создании лота.

## Описание

Группа констант, задающая время действия аукционного лота в часах. Значения констант используются в качестве параметра `timeLength` в функции `auction.CreateForItem` для указания срока размещения предмета на торги.

::: warning Замечание
Константы применяются исключительно в функции `auction.CreateForItem` для указания времени действия лота.
:::

## Список констант

- **`AUCTION_CREATETIME_HOURS12`** (`number` `0`)
Задает длительность аукциона 12 часов.

- **`AUCTION_CREATETIME_HOURS24`** (`number` `1`)
Задает длительность аукциона 24 часа.

- **`AUCTION_CREATETIME_HOURS36`** (`number` `2`)
Задает длительность аукциона 36 часов.

- **`AUCTION_CREATETIME_HOURS48`** (`number` `3`)
Задает длительность аукциона 48 часов.

## Примеры

### Создание аукциона с длительностью 24 часа

```lua
local itemId = 12345 -- Идентификатор предмета из инвентаря
local startPrice = 100
local buyoutPrice = 500

if auction.CanCreateForItem( itemId ) then
    auction.CreateForItem( itemId, startPrice, buyoutPrice, AUCTION_CREATETIME_HOURS24 )
end
```

::: info Описание примера
В примере сначала проверяется возможность создания аукциона для предмета с идентификатором `12345`. Если проверка успешна, инициируется создание лота со стартовой ценой 100, ценой выкупа 500 и длительностью 24 часа, что задается константой `AUCTION_CREATETIME_HOURS24`.
:::