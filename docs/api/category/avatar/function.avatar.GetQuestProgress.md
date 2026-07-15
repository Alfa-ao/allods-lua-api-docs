# avatar.GetQuestProgress
Извлекает информацию о состоянии конкретного задания, находящегося в журнале заданий аватара.

## Описание
```lua
avatar.GetQuestProgress( questId: QuestId ): table | nil
```
Функция извлекает и возвращает детальную информацию о прогрессе и текущем состоянии квеста по его идентификатору. Возвращаемая таблица содержит идентификаторы, статус выполнения, информацию о таймерах, точке возвращения и список целей задания. Если задание с указанным идентификатором отсутствует в журнале или произошла ошибка, функция возвращает `nil`.

## Список параметров
- **`questId`** (`QuestId`)
Уникальный идентификатор квеста, информацию о котором необходимо получить.

## Возвращаемые значения
Возвращает `table` или `nil`.

Если задание найдено, возвращается таблица со следующими полями:
- **`id`** (`QuestId`) — уникальный идентификатор квеста.
- **`state`** (`number`) — текущее состояние квеста. Значения соответствуют перечислению `QUEST_*`:
  - `QUEST_IN_PROGRESS` — квест находится в процессе выполнения.
  - `QUEST_READY_TO_RETURN` — квест выполнен и готов к сдаче.
  - `QUEST_COMPLETED` — квест полностью завершен.
  - `QUEST_FAILED` — выполнение квеста провалено.
- **`returnLocation`** (`QuestLocation` | `nil`) — точка возвращения задания. Значение отсутствует (`nil`), если точка не определена или произошла ошибка.
- **`zonesMapId`** (`ObjectId` | `nil`) — идентификатор интерфейсной карты задания. Значение отсутствует (`nil`), если карта не определена или произошла ошибка.
- **`timerDurationMs`** (`number` | `nil`) — общая продолжительность таймера в миллисекундах. Значение отсутствует (`nil`), если таймер отсутствует или неактивен.
- **`timerTimeLeftMs`** (`number` | `nil`) — оставшееся время таймера в миллисекундах. Значение отсутствует (`nil`), если таймер отсутствует или неактивен.
- **`objectives`** (`table`) — список целей квеста. Индексация элементов начинается с нуля. Каждый элемент таблицы содержит поле `id` (`ObjectId`), представляющее собой уникальный идентификатор цели.

## Примеры
### Получение и детальный вывод информации о прогрессе квеста
```lua
local progress = avatar.GetQuestProgress( questId )
if progress then
    LogInfo( "Quest Progress: " )
    LogInfo( "  quest.id: " .. progress.id )
    LogInfo( "  quest.state: " .. progress.state )
    
    local objectives = progress.objectives
    for index, objectiveItem in pairs( objectives ) do
        local objective = avatar.GetQuestObjectiveInfo( objectiveItem.id )
        LogInfo( "  index: ", index )
        LogInfo( "  objective.id: ", objective.id )
        LogInfo( "  objective.name: ", objective.name )
        LogInfo( "  objective.progress: ", objective.progress )
        LogInfo( "  objective.required: ", objective.required )
        
        if objective.items then
            LogInfo( "  objective.items[0]: ", objective.items[0] )
        end
    end
end
```
::: info Описание примера
В примере запрашивается информация о прогрессе квеста по его идентификатору. Если данные успешно получены (таблица не равна `nil`), в лог выводятся базовые параметры задания: идентификатор и текущее состояние. Затем происходит итерация по списку целей квеста (`objectives`). Для каждой цели вызывается функция `avatar.GetQuestObjectiveInfo`, после чего в лог выводится детальная информация о самой цели: её идентификатор, название, текущий прогресс, требуемое значение и, при наличии, связанные предметы.
:::

## Смотрите также
- [avatar.GetQuestObjectiveInfo](avatar.GetQuestObjectiveInfo)
- [QuestLocation](QuestLocation)