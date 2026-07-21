# guild.GetItemsHistory

Запрашивает у сервера историю операций с предметами гильдии постранично.

## Описание

```lua
guild.GetItemsHistory( page: number, orderBy: number, rearOrder: boolean )
```

В ответ на запрос передается событие `EVENT_GUILD_BANK_OPERATION_RESULT`. При успешном выполнении функции передается событие `EVENT_GUILD_BANK_HISTORY_CHANGED`.

## Список параметров

- **`page`** (`number`) - Интересующая страница, начиная с 1.

- **`orderBy`** (`number`) - Задает параметр сортировки истории. Значения соответствуют перечислению `ENUM_GuildItemsHistoryOrder`.

- **`rearOrder`** (`boolean`) - Задает порядок сортировки. Значение `true` устанавливает обратный порядок, `false` - прямой.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Запрос истории операций

```lua
-- Запрос третьей страницы истории операций с предметами гильдии,
-- сортировка по времени в прямом порядке
guild.GetItemsHistory( 3, ENUM_GuildItemsHistoryOrder_TIME, false )
```

## Смотрите также

- [guild.GetItemsInfo](function.guild.GetItemsInfo)
- [EVENT_GUILD_ITEMS_OPERATION_RESULT](events#event-guild-items-operation-result)
- [EVENT_GUILD_ITEMS_HISTORY_CHANGED](events#event-guild-items-history-changed)
- [ENUM_GuildItemsHistoryOrder](enums#enum-guilditemshistoryorder)