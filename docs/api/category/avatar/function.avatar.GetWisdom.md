# avatar.GetWisdom
Возвращает количество Мудрости у аватара.

## Описание
```lua
avatar.GetWisdom(): table
```
Функция возвращает таблицу с полями, аналогичными элементам списка, возвращаемого функцией `avatar.GetInnateStats()`, за исключением поля `sysName`, содержащую информацию о количестве Мудрости у аватара.

::: warning Замечание
При изменении значения Мудрости приходит событие `EVENT_AVATAR_STATS_CHANGED`.
:::

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` — таблицу с полями, аналогичными элементам списка, возвращаемого функцией `avatar.GetInnateStats()`, за исключением поля `sysName`.

## Примеры
### Получение информации о Мудрости аватара
```lua
local stat = avatar.GetWisdom()
```

## Смотрите также
- [avatar.GetInnateStats](avatar.GetInnateStats)
- [EVENT_AVATAR_STATS_CHANGED](events#event-avatar-stats-changed)
- [avatar.GetPower](avatar.GetPower)
- [avatar.GetStamina](avatar.GetStamina)