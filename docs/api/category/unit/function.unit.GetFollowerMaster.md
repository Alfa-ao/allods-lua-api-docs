# unit.GetFollowerMaster

Возвращает хозяина, которому подчинен объект (пет, ассистент, турель и т.п.).

## Описание

```lua
unit.GetFollowerMaster( unitId: ObjectId ): ObjectId | nil
```

Функция возвращает идентификатор хозяина, которому подчинен объект (пет, ассистент, турель и т.п.).

## Список параметров

- **`unitId`** (`ObjectId`) - идентификатор игрока.

## Возвращаемые значения

Возвращает `ObjectId` | `nil` - идентификатор хозяина, которому подчинён объект, или `nil`, если объект не имеет хозяина.

## Примеры

### Проверка наличия хозяина

```lua
local followerMasterId = unit.GetFollowerMaster( unitId )
if followerMasterId then
    LogInfo( "Это подчинённый объект" )
end
```