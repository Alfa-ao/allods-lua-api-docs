# matchMaking.GetEventJoinTimeEstimate
Получает приблизительное время, оставшееся до присоединения к инстанс-ивенту с заданным id.

## Описание
```lua
matchMaking.GetEventJoinTimeEstimate( eventId: ObjectId ): table|nil
```
Функция возвращает приблизительное время, оставшееся до присоединения к инстанс-ивенту с заданным id.

## Список параметров
- **`eventId`** (`ObjectId`) - id инстанс-ивента, о котором запрашивается информация

## Возвращаемые значения
Возвращает `table` | `nil` - таблица с описанием, если информация получена:
- **`time`** (`number`) - приблизительное время ожидания в минутах, оставшееся до присоединения к инстанс-ивенту с заданным `eventId`

## Примеры
### Получение времени ожидания
```lua
local joinTime = matchMaking.GetEventJoinTimeEstimate(eventId)
if joinTime then
    LogInfo("Join time estimation: ", joinTime.time)
end
```