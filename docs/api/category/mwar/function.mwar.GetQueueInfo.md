# mwar.GetQueueInfo

Возвращает информацию о сражении Доминиона, в очереди на которое стоит аватар.

## Описание

```lua
mwar.GetQueueInfo(): table | nil
```

Функция извлекает и возвращает таблицу с данными о сражении Доминиона, в очереди на которое стоит аватар. Если аватар не стоит в очереди, возвращается `nil`.

::: warning Замечание
При изменении этой информации приходит событие `EVENT_MWAR_QUEUE_CHANGED`.
:::

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` | `nil` - `nil`, если аватар не стоит в очереди на сражение Доминиона, иначе таблица со следующими полями:

- **`event`** (`InstancedEventResourceId`) - идентификатор инстанс-ивента.

- **`isRaid`** (`boolean`) - `true`, если сражение рейдовое; иначе `false`.

- **`targetGuildId`** (`ObjectId` | `nil`) - идентификатор гильдии, на которую будет нападение, если сражение рейдовое; `nil`, если сражение групповое.

- **`targetGuildName`** (`WString` | `nil`) - имя гильдии, на которую будет нападение, если сражение рейдовое; `nil`, если сражение групповое.

## Примеры

### Получение информации об очереди

```lua
local mwarQueueInfo = mwar.GetQueueInfo()
```

## Смотрите также

- [EVENT_MWAR_QUEUE_CHANGED](../events/mwar.events#event-mwar-queue-changed)
- [InstancedEventResourceId](../types#instancedeventresourceid)
- [mwar.GetGuildInfo](function.mwar.GetGuildInfo)