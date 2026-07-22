# mwar.GetGuildInfo
Возвращает информацию о гильдии, участвующей в Доминионе.

## Описание
```lua
mwar.GetGuildInfo( guildId: ObjectId ): table | nil
```
Функция извлекает и возвращает информацию о гильдии, участвующей в Доминионе. При изменении данных приходит событие `EVENT_MWAR_LADDER_CHANGED`.

## Список параметров
- **`guildId`** (`ObjectId`) - Идентификатор гильдии, который можно получить из `mwar.GetLadderInfo().guilds`.

## Возвращаемые значения
Возвращает `table` | `nil` - `nil`, если информация отсутствует; иначе таблица с полями:

- **`guildId`** (`ObjectId`) - Идентификатор гильдии.

- **`guildName`** (`WString`) - Имя гильдии.

- **`rating`** (`number`) - Рейтинг гильдии в Доминионе.

- **`symbolics`** (`table`) - Описание символики гильдии. Поля такие же, как у `mwar.GetGuildSymbolics`.

## Примеры
### Получение информации о гильдии
```lua
local guildInfo = mwar.GetGuildInfo( guildId )
```

## Смотрите также
- [mwar.GetLadderInfo](function.mwar.GetLadderInfo)
- [EVENT_MWAR_LADDER_CHANGED](events.mwar#event-mwar-ladder-changed)