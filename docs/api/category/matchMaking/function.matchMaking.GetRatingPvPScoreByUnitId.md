# matchMaking.GetRatingPvPScoreByUnitId

Извлекает статистику игрока по рейтинговой арене.

## Описание

```lua
matchMaking.GetRatingPvPScoreByUnitId( arenaType: number, unitId: ObjectId ): table | nil
```

Функция извлекает и возвращает таблицу с данными рейтинговой статистики игрока на указанной арене. Если информация недоступна или MM активность не поддерживает данный запрос, функция возвращает `nil`.

::: warning Замечание
В некоторых MM активностях функция недоступна. Проверить доступность можно посредством вызова `matchMaking.IsRatingPvPScoreAvailable`.
:::

## Список параметров

- **`arenaType`** (`number`(`ENUM_RatingArenaType`)) - Тип арены.

- **`unitId`** (`ObjectId`) - Идентификатор персонажа.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица с данными рейтинговой статистики, если информация успешно получена.

Поля возвращаемой таблицы:

- **`currentSeason`** (`table`) - Данные по текущему сезону.

- **`lastSeason`** (`table` | `nil`) - Данные по прошлому сезону, структура аналогична `currentSeason`.

Поля таблицы `currentSeason`:

- **`over_game`** (`number`) - Всего игр.

- **`wins`** (`number`) - Количество побед.

- **`score`** (`number`) - Счет.

- **`top`** (`number`) - Место в рейтинге.

- **`timeSpentMs`** (`number`) - Затраченное время.

- **`difficulty`** (`table` | `nil`) - Сложность.

Поля таблицы `difficulty`:

- **`name`** (`string`) - Название.

## Примеры

### Получение позиции в рейтинге

```lua
local ratingInfo = matchMaking.GetRatingPvPScoreByUnitId( ENUM_RatingArenaType_6x6, unitId )
if ratingInfo then
    LogInfo( "Current player position in top 6x6: ", ratingInfo.currentSeason.top )
end
```

::: info Описание примера
В примере запрашивается статистика игрока для арены 6x6. Если функция возвращает таблицу, из нее извлекается и выводится в лог текущее место игрока в рейтинге.
:::

## Смотрите также

- [ENUM_RatingArenaType](ENUM_RatingArenaType)
- [matchMaking.IsRatingPvPScoreAvailable](function.matchMaking.IsRatingPvPScoreAvailable)