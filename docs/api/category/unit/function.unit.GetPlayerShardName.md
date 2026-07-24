# unit.GetPlayerShardName
Возвращает имя шарда игрока.

## Описание
```lua
unit.GetPlayerShardName( unitId: ObjectId ): WString | nil
```
Функция возвращает название шарда, на котором находится игрок с указанным идентификатором.

::: warning Замечание
Если игрок не найден или передан идентификатор NPC или моба, возвращается `nil`.
:::

## Список параметров
- **`unitId`** (`ObjectId`) - Идентификатор игрока.

## Возвращаемые значения
Возвращает `WString` | `nil` - Имя шарда игрока, или `nil`, если игрок не найден или передан идентификатор NPC или моба.

## Примеры
### Получение имени шарда игрока
```lua
local shardName = unit.GetPlayerShardName( unitId )
if shardName then
    common.LogInfo( "Шард игрока: " .. shardName )
end
```