# unit.GetRelatedQuestObjectives

Возвращает список целей заданий игрока, которые связаны с указанным мобом.

## Описание

```lua
unit.GetRelatedQuestObjectives( unitId: ObjectId ): table | nil
```

Извлекает и возвращает список целей заданий игрока, связанных с указанным мобом.

## Список параметров

- **`unitId`** (`ObjectId`) - идентификатор моба.

## Возвращаемые значения

Возвращает `table` | `nil` - индексированный с 0 список идентификаторов (`ObjectId`) целей заданий, если такие цели имеются у игрока. Иначе возвращается `nil`.

## Примеры

### Получение и обработка связанных целей заданий

```lua
local questObjectives = unit.GetRelatedQuestObjectives( unitId )
if questObjectives and questObjectives[ 0 ] then
    local info = avatar.GetQuestObjectiveInfo( questObjectives[ 0 ] )
    if info then
        LogInfo( info.name )
    end
end
```

::: info Описание примера
Запрашивается список целей заданий, связанных с указанным мобом. Если список существует и содержит хотя бы одну цель (индекс 0), извлекается информация о первой цели с помощью `avatar.GetQuestObjectiveInfo`. При успешном получении информации её название выводится в лог.
:::

## Смотрите также

- [avatar.GetQuestObjectiveInfo](/api/category/avatar/function.avatar.GetQuestObjectiveInfo.md)