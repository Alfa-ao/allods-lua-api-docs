# matchMaking.GetAutoDepartTime
Получает время автоматической отправки группы в активность.

## Описание
```lua
matchMaking.GetAutoDepartTime( eventId: ObjectId ): table|nil
```
Функция возвращает время автоматической отправки группы в указанную активность. Время возвращается в формате `LuaFullDateTime`. Если время не установлено, функция возвращает `nil`.

## Список параметров
- **`eventId`** (`ObjectId`) - Идентификатор активности, в которую собирается группа.

## Возвращаемые значения
Возвращает `table` | `nil` - время автоматической отправки в формате `LuaFullDateTime`, или `nil`, если время не установлено.

## Примеры
### Получение времени автоматической отправки
```lua
local autoDepartTime = matchMaking.GetAutoDepartTime( eventId )
```

## Смотрите также
- [EVENT_MATCH_MAKING_AUTO_DEPART_TIME_CHANGED](events.matchMaking#event-match-making-auto-depart-time-changed)