# guildBossLib.GetQuests
Возвращает список заданий для прогресса босса гильдии.

## Описание
```lua
guildBossLib.GetQuests(): table | nil
```
Функция возвращает таблицу со списком заданий для прогресса босса гильдии или `nil`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` | `nil` - список заданий для прогресса босса гильдии. Индексация с 1, каждый элемент представляет собой таблицу со следующими полями:

- **`questId`** (`QuestId`) - идентификатор ресурса задания.

- **`count`** (`number`) - счетчик выполнения данного задания. Значения: 0 - если не выполнено, 1 и более - если выполнено.

- **`texture`** (`TextureId` | `nil`) - идентификатор текстуры миниатюры задания.

- **`requiredItems`** (`table` | `nil`) - список особых предметов, необходимых для выполнения задания. Индексация с 0.

## Примеры
### Получение информации о награде за первое задание
```lua
local guildBossQuests = guildBossLib.IsExist() and guildBossLib.GetQuests()
local firstGuildQuest = guildBossQuests and guildBossQuests[1]
local questReward = firstGuildQuest and guildBossLib.GetQuestReward( firstGuildQuest.questId )
```

::: info Описание примера
В примере проверяется наличие босса гильдии и запрашивается список заданий. Затем извлекается первое задание из списка и получается информация о его награде.
:::

## Смотрите также
- [guildBossLib.GetQuestInfo](#)
- [guildBossLib.GetQuestReward](#)