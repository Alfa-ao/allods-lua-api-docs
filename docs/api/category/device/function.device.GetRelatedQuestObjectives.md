# device.GetRelatedQuestObjectives
Возвращает список целей заданий игрока, которые связаны с указанным устройством.

## Описание
```lua
device.GetRelatedQuestObjectives( deviceId: ObjectId ): table|nil
```
Функция возвращает список целей заданий игрока, которые связаны с указанным устройством. Если такие цели заданий имеются у игрока, возвращается индексированный с единицы список идентификаторов целей заданий. В противном случае функция возвращает `nil`.

## Список параметров
- **`deviceId`** (`ObjectId`) - Идентификатор устройства. Не принимает значение `nil`.

## Возвращаемые значения
Возвращает `table` или `nil`.
Если связанные цели заданий имеются у игрока, возвращается индексированный с единицы список идентификаторов (`ObjectId`) целей заданий. Иначе возвращается `nil`.

## Примеры
### Получение и проверка связанных целей заданий
```lua
local questObjectives = device.GetRelatedQuestObjectives( deviceId )
if questObjectives and questObjectives[ 1 ] then
    local info = avatar.GetQuestObjectiveInfo( questObjectives[ 1 ] )
    if info then
        LogInfo( info.name )
    end
end
```

::: info Описание примера
В примере запрашивается список целей заданий, связанных с устройством. Если список не пуст, извлекается информация о первой цели посредством вызова `avatar.GetQuestObjectiveInfo`. При успешном получении информации её название выводится в лог.
:::

## Смотрите также
- [avatar.GetQuestObjectiveInfo](function.avatar.GetQuestObjectiveInfo)