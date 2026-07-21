# guildHallLib.GetQuestReward
Возвращает информацию о награде за выполнение задания для прогресса оплота гильдии.

## Описание
```lua
guildHallLib.GetQuestReward( questId: QuestId ): table
```
Формат возвращаемых данных аналогичен формату функции `avatar.GetQuestReward`.

## Список параметров
- **`questId`** (`QuestId`) - Идентификатор ресурса задания.

## Возвращаемые значения
Возвращает `table` - информация о награде, формат которой аналогичен функции `avatar.GetQuestReward`.

## Примеры
### Получение награды за первое задание оплота
```lua
local guildHallQuests = guildHallLib.IsExist() and guildHallLib.GetQuests()
local firstGuildQuest = guildHallQuests and guildHallQuests[1]
local questReward = firstGuildQuest and guildHallLib.GetQuestReward( firstGuildQuest.questId )
```

::: info Описание примера
В примере сначала проверяется существование оплота гильдии и извлекается список заданий. Если список не пуст, берется первое задание, и для него запрашивается информация о награде.
:::

## Смотрите также
- [avatar.GetQuestReward](../avatar/function.avatar.GetQuestReward)
- [guildHallLib.GetQuests](function.guildHallLib.GetQuests)