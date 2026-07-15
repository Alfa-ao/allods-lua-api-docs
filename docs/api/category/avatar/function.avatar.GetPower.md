# avatar.GetPower
Возвращает количество Могущества аватара.

## Описание
```lua
avatar.GetPower(): table
```
Функция возвращает таблицу с характеристиками Могущества аватара. Структура возвращаемой таблицы аналогична элементам списка, формируемого функцией `avatar.GetInnateStats()`, за исключением поля `sysName`. При изменении значения Могущества передается событие `EVENT_AVATAR_STATS_CHANGED`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает таблицу (`table`), содержащую характеристики Могущества аватара. Структура полей аналогична возвращаемым данным функции `avatar.GetInnateStats()`, за исключением поля `sysName`.

## Примеры
### Получение характеристик Могущества
```lua
local stat = avatar.GetPower()
```

## Смотрите также
- [avatar.GetInnateStats](avatar.GetInnateStats)
- [EVENT_AVATAR_STATS_CHANGED](events.avatar#event-avatar-stats-changed)