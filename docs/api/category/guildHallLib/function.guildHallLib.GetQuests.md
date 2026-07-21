# guildHallLib.GetQuests

Возвращает список заданий для прогресса оплота гильдии.

## Описание

```lua
guildHallLib.GetQuests(): table|nil
```

Функция возвращает список заданий для прогресса оплота гильдии.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает таблицу (`table`) со списком заданий или `nil`. Индексация элементов в таблице начинается с 1. Каждый элемент представляет собой таблицу со следующими полями:

- **`questId`** (`QuestId`) - идентификатор ресурса задания.

- **`count`** (`number`) - счетчик выполнения задания. Значение `0`, если не выполнено; `1` и более, если выполнено.

- **`texture`** (`TextureId` | `nil`) - идентификатор текстуры миниатюры задания.

- **`requiredItems`** (`table` | `nil`) - список особых предметов, необходимых для выполнения задания. Индексация начинается с 0. Элементы списка имеют тип `ItemId`.

## Примеры

### Получение списка заданий оплота гильдии

```lua
local guildHallQuests = guildHallLib.IsExist() and guildHallLib.GetQuests()
local firstGuildQuest = guildHallQuests and guildHallQuests[1]
local questReward = firstGuildQuest and guildHallLib.GetQuestReward( firstGuildQuest.questId )
```

::: info Описание примера
В примере сначала проверяется существование оплота гильдии и извлекается список заданий. Затем выбирается первое задание из списка, если оно существует, и запрашивается информация о награде за это задание с использованием его идентификатора.
:::

## Смотрите также

- [guildHallLib.GetQuestInfo](function.guildHallLib.GetQuestInfo)
- [guildHallLib.GetQuestReward](function.guildHallLib.GetQuestReward)