# mwar.GetRatingProgressInfo
Возвращает информацию о сторонах, принимающих участие в сражении Доминиона.

## Описание
```lua
mwar.GetRatingProgressInfo(): table | nil
```
Функция возвращает информацию о сторонах, принимающих участие в сражении Доминиона. Данные доступны только во время сражения. При изменении информации приходит событие `EVENT_MWAR_RATING_PROGRESS_CHANGED`. Информацию о гильдиях по их идентификаторам можно получать из функции `mwar.GetLadderInfo`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` | `nil` - `nil`, если информация отсутствует (аватар не в сражении Доминиона); иначе таблица, содержащая пары ключ-значение:

- **`key`** (`BattlegroundMarkId`) - идентификатор команды.

- **`value`** (`table`) - таблица с полями:
  - `guildId` (`ObjectId`) - идентификатор гильдии.
  - `isRaid` (`boolean`) - `true`, если бой рейдовый; иначе `false`.
  - `leaderRating` (`number`) - рейтинг лидера.

## Примеры
### Получение информации о сторонах сражения
```lua
local info = mwar.GetRatingProgressInfo()
```

## Смотрите также
- [EVENT_MWAR_RATING_PROGRESS_CHANGED](events.mwar#event-mwar-rating-progress-changed)
- [mwar.GetLadderInfo](function.mwar.GetLadderInfo)
- [mwar.JoinRequestRaid](function.mwar.JoinRequestRaid)