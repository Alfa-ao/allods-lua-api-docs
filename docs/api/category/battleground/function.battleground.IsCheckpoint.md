# battleground.IsCheckpoint
Проверяет, является ли указанный идентификатор контрольной точкой баттлграунда.

## Описание
```lua
battleground.IsCheckpoint( checkpointId: ObjectId ): boolean
```
Функция анализирует переданный идентификатор и определяет, относится ли он к контрольной точке на поле боя (баттлграунде). Возвращает логическое значение, указывающее на принадлежность объекта к данному типу.

## Список параметров
- **`checkpointId`** (`ObjectId`)
Идентификатор объекта, который необходимо проверить на принадлежность к контрольной точке баттлграунда.

## Возвращаемые значения
Возвращает `boolean` — `true`, если указанный идентификатор является контрольной точкой, и `false` в противном случае.

## Примеры
### Проверка идентификатора и получение информации о контрольной точке
```lua
if checkpointId and battleground.IsCheckpoint( checkpointId ) then
    local checkpointInfo = battleground.GetCheckpointInfo( checkpointId )
end
```
::: info Описание примера
В примере сначала выполняется проверка существования `checkpointId`, после чего вызывается `battleground.IsCheckpoint` для подтверждения типа объекта. Если идентификатор действительно принадлежит контрольной точке, извлекается подробная информация о ней с помощью `battleground.GetCheckpointInfo`.
:::

## Смотрите также
- [battleground.GetCheckpointInfo](battleground.GetCheckpointInfo)