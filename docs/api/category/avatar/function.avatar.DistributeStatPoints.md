# avatar.DistributeStatPoints
Окончательно распределяет пункты характеристик, предварительно запланированные к распределению функцией `avatar.ImproveInnateStat`.

## Описание

```lua
avatar.DistributeStatPoints()
```

Функция окончательно распределяет пункты характеристик, предварительно запланированные к распределению. Операция выполняется только в случае, если `avatar.CanImproveInnateStats` возвращает `true`, при этом состояние переключается в `false` до получения ответа от сервера. При любом ответе сервера состояние `avatar.CanImproveInnateStats` переключается обратно в `true` (при отсутствии дополнительных обстоятельств). При успешном завершении операции через некоторое время происходит изменение данных, выдаваемых `avatar.GetInnateStats`, и передается событие `EVENT_AVATAR_STATS_CHANGED`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Распределение запланированных пунктов характеристик
```lua
avatar.DistributeStatPoints()
```

## Смотрите также

- [avatar.CanImproveInnateStats](/api/category/avatar/function.avatar.CanImproveInnateStats)
- [avatar.ImproveInnateStat](/api/category/avatar/function.avatar.ImproveInnateStat)
- [avatar.GetInnateStats](/api/category/avatar/function.avatar.GetInnateStats)
- [EVENT_AVATAR_STATS_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-stats-changed)