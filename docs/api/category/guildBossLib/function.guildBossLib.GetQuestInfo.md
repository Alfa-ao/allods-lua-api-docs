# guildBossLib.GetQuestInfo

Возвращает информацию о задании для прогресса босса гильдии.

## Описание

```lua
guildBossLib.GetQuestInfo( questId: QuestId )
```

Функция извлекает и возвращает информацию о задании для прогресса босса гильдии. Формат возвращаемых данных аналогичен данным, возвращаемым функцией `avatar.GetQuestInfo`.

## Список параметров

- **`questId`** (`QuestId`) - идентификатор ресурса задания.

## Возвращаемые значения

Возвращает таблицу (`table`), формат которой аналогичен возвращаемым данным функции `avatar.GetQuestInfo`.

## Примеры

### Получение информации о первом задании босса гильдии

```lua
local guildBossQuests = guildBossLib.IsExist() and guildBossLib.GetQuests()
local firstGuildQuest = guildBossQuests and guildBossQuests[1]
local questInfo = firstGuildQuest and guildBossLib.GetQuestInfo( firstGuildQuest.questId )
```

::: info Описание примера
В примере сначала проверяется наличие босса гильдии и извлекается список его заданий. Затем извлекается первое задание из списка, и если оно существует, запрашивается подробная информация о нем.
:::

## Смотрите также

- [avatar.GetQuestInfo](/api/category/avatar/function.avatar.GetQuestInfo.md)
- [guildBossLib.GetQuests](/api/category/guildBossLib/function.guildBossLib.GetQuests.md)