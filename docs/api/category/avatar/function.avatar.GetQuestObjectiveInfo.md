# avatar.GetQuestObjectiveInfo
Извлекает информацию об одной цели задания игрока.

## Описание
```lua
avatar.GetQuestObjectiveInfo( objectiveId: ObjectId ): table | nil
```
Функция извлекает и возвращает детальную информацию о конкретной цели задания по её идентификатору. Возвращаемые данные включают идентификаторы квеста и цели, текстовые названия, прогресс выполнения, тип цели и связанные с ней объекты (предметы, слоты экипировки, локации). Если цель с указанным идентификатором не найдена, функция возвращает `nil`.

В поле `type` возвращаемой таблицы используются следующие константы, определяющие тип цели квеста:
- `QUEST_COUNT_KILL`
- `QUEST_COUNT_ITEM`
- `QUEST_COUNT_SPECIAL`
- `QUEST_COUNT_KILL_AVATAR`
- `QUEST_COUNT_MONEY`
- `QUEST_COUNT_SHIP_UPGRADE_MONEY`
- `QUEST_COUNT_UPGRADABLE_SHIP`
- `QUEST_COUNT_REPUTATION`
- `QUEST_COUNT_ALT_CURRENCY`

## Список параметров
- **`objectiveId`** (`ObjectId`)
Уникальный идентификатор цели задания, информацию о которой необходимо получить.

## Возвращаемые значения
Возвращает таблицу (`table`) с описанием цели задания или `nil`, если цель не найдена.

Структура возвращаемой таблицы:
- **`questId`** (`QuestId`) — идентификатор ресурса квеста.
- **`id`** (`ObjectId`) — идентификатор цели квеста.
- **`name`** (`WString`) — название цели квеста.
- **`description`** (`WString`) — описание цели квеста.
- **`sysDebugName`** (`string` | `nil`) — дебажный строковый идентификатор (путь к файлу) или `nil` для финальной версии.
- **`progress`** (`number`) — текущее значение счетчика (например, количество уже собранных предметов).
- **`required`** (`number`) — целевое значение счетчика (например, необходимое количество предметов).
- **`isInternal`** (`boolean`) — `true`, если счётчик внутренний (счётчик и маркер не отображаются пользователю).
- **`type`** (`number`) — тип цели квеста (одна из констант `QUEST_COUNT_...`).
- **`showCounterValue`** (`boolean`) — `true`, если необходимо отображать пользователю прогресс (значения `progress` и `required`).
- **`alwaysShowMarker`** (`boolean`) — `true`, если необходимо всегда отображать маркер квеста на карте, даже при `isInternal == true`.
- **`items`** (`table`) — таблица с идентификаторами (`ObjectId`) предметов, если имеется их список.
- **`dressSlots`** (`table`) — таблица со значениями слотов (`DRESS_SLOT_...`), если имеется список слотов предметов.
- **`locations`** (`table`) — таблица с описаниями точек цели задания (структура `QuestLocation`).

## Примеры
### Получение и перебор локаций цели задания
```lua
local objectiveInfo = avatar.GetQuestObjectiveInfo( objectiveId )
if objectiveInfo then
    local locations = objectiveInfo.locations
    if locations then
        for index, location in pairs( locations ) do
            LogInfo( location )
        end
    end
end
```

## Смотрите также
- [QUEST_COUNT_*](enums)
- [DRESS_SLOT_*](enums)
- [avatar.GetQuestInfo](avatar.GetQuestInfo)