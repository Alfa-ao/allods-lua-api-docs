# guildBossLib.GetQuestReward
Возвращает информацию о награде за выполнение задания для прогресса босса гильдии.

## Описание

```lua
guildBossLib.GetQuestReward( questId: QuestId ): table|nil
```

Функция извлекает и возвращает информацию о награде за выполнение задания для прогресса босса гильдии. Формат возвращаемых данных аналогичен `avatar.GetQuestReward`.

## Список параметров

- **`questId`** (`QuestId`) - идентификатор ресурса задания.

## Возвращаемые значения

Возвращает `table|nil` - информация о награде за выполнение задания. Формат возвращаемых данных аналогичен `avatar.GetQuestReward`.

## Примеры

### Получение награды за первое задание босса гильдии

```lua
local guildBossQuests = guildBossLib.IsExist() and guildBossLib.GetQuests()
local firstGuildQuest = guildBossQuests and guildBossQuests[1]
local questReward = firstGuildQuest and guildBossLib.GetQuestReward( firstGuildQuest.questId )
```

::: info Описание примера
В примере сначала проверяется наличие босса гильдии и извлекается список его заданий. Затем определяется первое задание из списка. Если задание существует, вызывается функция для получения информации о награде за его выполнение.
:::

## Смотрите также
- [avatar.GetQuestReward](../avatar/function.avatar.GetQuestReward)
- [guildBossLib.GetQuests](function.guildBossLib.GetQuests)