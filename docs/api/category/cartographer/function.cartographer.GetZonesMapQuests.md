# cartographer.GetZonesMapQuests
Извлекает и возвращает информацию о заданиях, относящихся к интерфейсной карте.

## Описание
```lua
cartographer.GetZonesMapQuests( zonesMapId: ObjectId ): table | nil
```
Функция формирует и возвращает таблицу с детализированной информацией о заданиях, относящихся к указанной интерфейсной карте. Если карта с заданным идентификатором не найдена, функция возвращает `nil`.

## Список параметров
- **`zonesMapId`** (`ObjectId`)
Идентификатор интерфейсной карты.

## Возвращаемые значения
Возвращает `table` или `nil`.
Если карта существует, возвращается таблица со следующими полями:
- **`totalCount`** (`number`) — общее количество заданий, относящихся к локации.
- **`currentCount`** (`number`) — количество заданий, активных в данный момент.
- **`completedCount`** (`number`) — количество завершённых заданий.
- **`currentQuests`** (`table`) — список идентификаторов (`QuestId`) ресурсов активных заданий, относящихся к карте. Индексация элементов в таблице начинается с 1.
- **`completedQuests`** (`table`) — список идентификаторов (`QuestId`) ресурсов завершённых заданий, относящихся к карте. Индексация элементов в таблице начинается с 1.

## Примеры
### Получение информации об активных заданиях карты
```lua
local zoneQuests = cartographer.GetZonesMapQuests( zonesMapId )
if zoneQuests then
    local firstCurrentQuest = zoneQuests.currentQuests[ 1 ]
    if firstCurrentQuest then
        local questInfo = avatar.GetQuestInfo( firstCurrentQuest )
    end
end
```
::: info Описание примера
В примере сначала извлекается информация о заданиях для указанной интерфейсной карты. Если данные успешно получены, проверяется наличие активных заданий. Для первого активного задания извлекается полная информация с помощью функции `avatar.GetQuestInfo`.
:::

## Смотрите также
- [cartographer.IsFinalQuestCompleted](cartographer.IsFinalQuestCompleted)
- [cartographer.GetZonesMapInfo](cartographer.GetZonesMapInfo)
- [avatar.GetQuestInfo](../avatar/function.avatar.GetQuestInfo)