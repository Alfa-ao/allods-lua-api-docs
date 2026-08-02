# avatar.GetStamina
Возвращает информацию о выносливости аватара.

## Описание

```lua
avatar.GetStamina(): table
```

Функция возвращает таблицу с данными о выносливости аватара. Структура возвращаемой таблицы аналогична структуре, формируемой функцией `avatar.GetInnateStats()`, за исключением поля `sysName`. При изменении значений характеристик передается событие `EVENT_AVATAR_STATS_CHANGED`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - таблицу с полями, аналогичными элементам списка, возвращаемого функцией `avatar.GetInnateStats()`, за исключением поля `sysName`.

## Примеры

### Получение данных о выносливости
```lua
local stat = avatar.GetStamina()
```

## Смотрите также

- [avatar.GetInnateStats](/api/category/avatar/function.avatar.GetInnateStats)
- [EVENT_AVATAR_STATS_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-stats-changed)
- [avatar.GetPower](/api/category/avatar/function.avatar.GetPower)
- [avatar.GetWisdom](/api/category/avatar/function.avatar.GetWisdom)