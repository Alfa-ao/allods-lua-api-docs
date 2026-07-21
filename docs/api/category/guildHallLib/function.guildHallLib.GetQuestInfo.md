# guildHallLib.GetQuestInfo

Возвращает информацию о задании для прогресса оплота гильдии.

## Описание

```lua
guildHallLib.GetQuestInfo( questId: QuestId )
```

Функция возвращает информацию о задании для прогресса оплота гильдии в формате, аналогичном функции `avatar.GetQuestInfo`.

## Список параметров

- **`questId`** (`QuestId`) - Идентификатор ресурса задания.

## Возвращаемые значения

Возвращает `table` - информация о задании для прогресса оплота гильдии. Формат данных аналогичен возвращаемым значениям функции `avatar.GetQuestInfo`.

## Примеры

### Получение информации о первом задании оплота

```lua
local guildHallQuests = guildHallLib.IsExist() and guildHallLib.GetQuests()
local firstGuildQuest = guildHallQuests and guildHallQuests[1]
local questInfo = firstGuildQuest and guildHallLib.GetQuestInfo( firstGuildQuest.questId )
```

::: info Описание примера
В примере проверяется существование оплота гильдии и извлекается список его заданий. Если список не пуст, берется первое задание и запрашивается подробная информация о нем с помощью функции `guildHallLib.GetQuestInfo`.
:::

## Смотрите также

- [avatar.GetQuestInfo](../avatar/function.avatar.GetQuestInfo)
- [guildHallLib.GetQuests](function.guildHallLib.GetQuests)