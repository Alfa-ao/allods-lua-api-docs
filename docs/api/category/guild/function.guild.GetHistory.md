# guild.GetHistory

Запрашивает у сервера историю операций казны гильдии постранично.

## Описание

```lua
guild.GetHistory( page: number, orderBy: number, rearOrder: boolean )
```

Функция посылает запрос на сервер для получения истории операций казны гильдии. В ответ передается событие `EVENT_GUILD_BANK_OPERATION_RESULT` с параметром `sysOperationType`, равным `"ENUM_GuildBankOperation_GetHistory"`. Успешным итогом вызова является передача события `EVENT_GUILD_BANK_HISTORY_CHANGED`.

## Список параметров

- **`page`** (`number`) - Интересующая страница, начиная с 1.

- **`orderBy`** (`number` | `ENUM_GuildHistoryOrder`) - Задает параметр сортировки истории.

- **`rearOrder`** (`boolean`) - Задает порядок сортировки. true - обратный порядок, false - прямой.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Запрос третьей страницы истории с сортировкой по времени

```lua
guild.GetHistory( 3, ENUM_GuildHistoryOrder_OPERATIONTIME, false )
```

## Смотрите также

- [guild.GetBankInfo](/api/category/guild/function.guild.GetBankInfo.md)
- [EVENT_GUILD_BANK_OPERATION_RESULT](/api/events/events.EVENT_GUILD_.md#event-guild-bank-operation-result)
- [EVENT_GUILD_BANK_HISTORY_CHANGED](/api/events/events.EVENT_GUILD_.md#event-guild-bank-history-changed)
- [ENUM_GuildHistoryOrder](/api/enums/enums.ENUM_GuildHistoryOrder.md)