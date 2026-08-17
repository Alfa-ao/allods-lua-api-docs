## EVENT_CURRENT_QUEST_CHANGED

### Описание

```
EVENT_CURRENT_QUEST_CHANGED
```

Информирует об изменении текущего активного квеста аватара.

::: warning Событие посылается каждый раз, когда сменяется текущий квест.
- Текущим назначается другой квест (вручную или автоматически).
- Текущий квест завершается.
- Текущий квест сбрасывается или отменяется.
:::

Если текущий квест отсутствует, параметр `questId` будет равен `nil`.

### Список параметров

- **`questId`** (`QuestId` | `nil`) - Идентификатор квеста, ставшего текущим. Если значение равно `nil`, значит, у аватара в данный момент нет активного текущего квеста.

### Примеры

#### Обработка смены текущего квеста

```lua
-- Регистрация обработчика события
common.RegisterEventHandler(function(params)
    local newQuestId = params.questId
    
    if newQuestId then
        LogInfo("Текущий квест изменен на: " .. tostring(newQuestId))
        -- Можно получить подробную информацию о новом квесте
        local questInfo = avatar.GetQuestInfo(newQuestId)
        if questInfo then
            LogInfo("Название: " .. userMods.FromWString(questInfo.name))
        end
    else
        LogInfo("Текущий квест сброшен или завершен.")
    end
end, "EVENT_CURRENT_QUEST_CHANGED")
```

### Смотрите также

- [avatar.SetCurrentQuest](/api/category/avatar/function.avatar.SetCurrentQuest.md)
- [avatar.GetCurrentQuest](/api/category/avatar/function.avatar.GetCurrentQuest.md)