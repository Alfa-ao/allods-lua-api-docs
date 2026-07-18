# astral.GetSectorRelatedQuests
Возвращает список заданий игрока, связанных с указанным астральным сектором.

## Описание
```lua
astral.GetSectorRelatedQuests( sectorId: ObjectId ): table
```
Функция извлекает и возвращает таблицу с идентификаторами всех заданий главного персонажа, которые привязаны к заданному астральному сектору.

## Список параметров
- **`sectorId`** (`ObjectId`)
Уникальный идентификатор астрального сектора, для которого выполняется поиск связанных заданий.

## Возвращаемые значения
Возвращает таблицу (`table`), содержащую уникальные идентификаторы (`QuestId`) заданий. Если задания для указанного сектора отсутствуют, возвращается пустая таблица.

## Примеры
### Получение и обработка списка заданий сектора
```lua
local quests = astral.GetSectorRelatedQuests( sectorId )
for i, questId in pairs( quests ) do
    local questInfo = astral.GetQuestInfo( questId )
    if questInfo then
        local name = questInfo.name
    end
end
```
::: info Описание примера
В примере сначала извлекается список идентификаторов заданий для заданного сектора с помощью `astral.GetSectorRelatedQuests`. Затем в цикле перебирается каждый идентификатор, и для получения детальной информации о задании вызывается функция `astral.GetQuestInfo`.
:::

## Смотрите также
- [astral.GetQuestInfo](astral.GetQuestInfo)