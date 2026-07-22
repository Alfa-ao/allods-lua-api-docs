# mwar.GetLadderInfo
Возвращает информацию о Доминионе.

## Описание
```lua
mwar.GetLadderInfo()
```
Функция возвращает информацию о Доминионе. Данные становятся доступными только после применения `mwar.ReplicateLadder`. При изменении состояния (начале или прекращении трансляции, обновлении данных) передается событие `EVENT_MWAR_LADDER_CHANGED`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` | `nil` - `nil`, если информация отсутствует, иначе таблица с полями:

- **`auction`** (`table`) - Таблица с информацией об аукционе.

  - **`stakeAllowed`** (`boolean`) - Разрешено ли ставить и переставлять ставки.

  - **`recentStakeBeatingAllowed`** (`boolean`) - Разрешено ли переставлять недавние ставки.

  - **`targetsToStakes`** (`table`) - Список таблиц, каждая из которых описывает отдельную ставку.

    - **`key`** (`ObjectId`) - Идентификатор гильдии, на которую делают ставку.

    - **`value`** (`table`) - Таблица с данными о ставке.

      - **`stakeOwner`** (`ObjectId`) - Идентификатор гильдии, делающей ставку.

      - **`stakeValue`** (`number`) - Размер ставки в валюте. Идентификатор валюты можно получить из `mwar.GetCommonInfo()` (поле `guildAuctionCurrency`).

      - **`targetGuild`** (`ObjectId`) - Идентификатор гильдии, на атаку которой сделана ставка.

      - **`time`** (`LuaFullDateTime`) - Время, когда была сделана ставка.

  - **`targetToResult`** (`table`) - Список таблиц, каждая из которых описывает результаты грабежа.

    - **`key`** (`ObjectId`) - Идентификатор ограбленной гильдии.

    - **`value`** (`table`) - Таблица `PillageDescriptor` с полями:

      - **`staker`** (`ObjectId`) - Идентификатор гильдии грабителя.

      - **`target`** (`ObjectId`) - Идентификатор гильдии цели грабежа.

      - **`targetPart`** (`float`) - Часть из пула грабежа, достающаяся цели грабежа.

- **`guilds`** (`table`) - Список идентификаторов гильдий (`ObjectId`).

## Смотрите также
- [EVENT_MWAR_LADDER_CHANGED](events.mwar#event-mwar-ladder-changed)
- [mwar.ReplicateLadder](function.mwar.ReplicateLadder)
- [mwar.GetCommonInfo](function.mwar.GetCommonInfo)
- [mwar.GetGuildInfo](function.mwar.GetGuildInfo)
- [LuaFullDateTime](types#luafulldatetime)