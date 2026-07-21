# itemLib.GetRelatedQuestObjectives
Возвращает список отдельных целей заданий, для которых требуется данный предмет.

## Описание
```lua
itemLib.GetRelatedQuestObjectives( itemId: ObjectId ): table|nil
```
Функция извлекает и возвращает индексированный с единицы список идентификаторов конкретных целей заданий, требующих указанный предмет. Если у игрока отсутствуют задания, для которых необходим данный предмет, функция возвращает `nil`.

## Список параметров
- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения
Возвращает `table` | `nil` - Если у игрока есть задания, для которых требуется предмет, возвращается индексированный с `1` список идентификаторов целей заданий. В противном случае возвращается `nil`.
- **`[index]`** (`ObjectId`) - Идентификатор конкретной цели задания.

## Примеры
### Получение информации о цели задания
```lua
local questObjectives = itemLib.GetRelatedQuestObjectives( itemId )
if questObjectives and questObjectives[ 1 ] then
    local info = avatar.GetQuestObjectiveInfo( questObjectives[ 1 ] )
    if info then
        LogInfo( info.name )
    end
end
```
::: info Описание примера
В примере запрашивается список целей заданий, связанных с указанным предметом. При наличии таких целей извлекается информация о первой цели посредством вызова `avatar.GetQuestObjectiveInfo` и выводится её название в лог.
:::

## Смотрите также
- [avatar.GetQuestObjectiveInfo](function.avatar.GetQuestObjectiveInfo)