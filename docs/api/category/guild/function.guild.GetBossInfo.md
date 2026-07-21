# guild.GetBossInfo

Возвращает общую базовую информацию о боссе гильдии.

## Описание

```lua
guild.GetBossInfo(): table|nil
```

Функция возвращает общую базовую информацию о боссе гильдии в виде таблицы или `nil`, если босс отсутствует.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` или `nil`.

Если босс существует, возвращается таблица со следующими полями:

- **`hasBoss`** (`boolean`) - `true`, если босс есть.

- **`experience`** (`number`) - опыт босса.

- **`gearScore`** (`number`) - сила босса.

- **`name`** (`WString` | `nil`) - имя босса.

- **`maxAvailableAbilities`** (`number` | `nil`) - максимальное количество доступных способностей.

- **`currentState`** (`number` | `nil`) - номер текущей стадии.

- **`states`** (`table` | `nil`) - стадии прогресса босса. Таблица индексированная с 1, каждая ячейка которой таблица с полями:

  - **`experienceRequired`** (`number`) - количество опыта до достижения стадии.

  - **`maxAvailableAbilities`** (`number`) - максимальное количество доступных способностей на данной стадии.

## Примеры

### Получение информации о боссе гильдии

```lua
local bossInfo = guild.GetBossInfo()
```

## Смотрите также

- [EVENT_GUILD_BOSS_CHANGED](events.guild#event-guild-boss-changed)
- [EVENT_GUILD_BOSS_EXPERIENCE_CHANGED](events.guild#event-guild-boss-experience-changed)
- [EVENT_GUILD_BOSS_GEAR_SCORE_CHANGED](events.guild#event-guild-boss-gear-score-changed)