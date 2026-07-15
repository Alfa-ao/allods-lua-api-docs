# avatar.GetCurrentQuest
Возвращает идентификатор квеста, объявленного текущим.

## Описание
```lua
avatar.GetCurrentQuest(): QuestId | nil
```
Функция возвращает идентификатор квеста, который в данный момент объявлен текущим для главного персонажа. Если текущий квест не задан, функция возвращает `nil`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения

`QuestId` — идентификатор текущего квеста, или `nil`.

## Примеры
### Получение и вывод информации о текущем квесте
```lua
local currentQuestId = avatar.GetCurrentQuest()
if currentQuestId then
    LogInfo( "Current quest: ", avatar.GetQuestInfo( currentQuestId ) )
end
```
::: info Описание примера
В примере сначала извлекается идентификатор текущего квеста. Затем проверяется, что квест действительно задан (значение не равно `nil`). Если условие выполняется, в информационный лог выводится подробная информация о квесте, полученная через функцию `avatar.GetQuestInfo`.
:::

## Смотрите также
- [avatar.SetCurrentQuest](function.avatar.SetCurrentQuest)
- [EVENT_CURRENT_QUEST_CHANGED](events#event-current-quest-changed)