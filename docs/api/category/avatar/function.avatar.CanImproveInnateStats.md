# avatar.CanImproveInnateStats
Определяет возможность распределения свободных пунктов врожденных характеристик.
## Описание
```lua
avatar.CanImproveInnateStats(): boolean
```
Функция возвращает логическое значение, указывающее на доступность распределения свободных пунктов врожденных характеристик персонажа. При изменении данного состояния передается событие `EVENT_AVATAR_STATS_CAN_IMPROVE_CHANGED`.
## Список параметров
Параметры отсутствуют.
## Возвращаемые значения
Возвращает `boolean` — `true`, если распределение свободных пунктов врожденных характеристик доступно, и `false` в противном случае.
## Примеры
### Проверка доступности распределения характеристик
```lua
local canImproveInnateStats = avatar.CanImproveInnateStats()
```
## Смотрите также
- [EVENT_AVATAR_STATS_CAN_IMPROVE_CHANGED](events.avatar#event-avatar-stats-can-improve-changed)