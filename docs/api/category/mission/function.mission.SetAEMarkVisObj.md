# mission.SetAEMarkVisObj
Назначает VisObject для AEMark.

## Описание
```lua
mission.SetAEMarkVisObj( visObjectId: VisObjectId )
```
Функция назначает VisObject для AEMark.

## Список параметров
- **`visObjectId`** (`VisObjectId`) - Идентификатор объекта VisObject.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Назначение VisObject для AEMark
```lua
local visObjId = common.GetAddonRelatedVisObject( "AEMark" )
mission.SetAEMarkVisObj( visObjId )
```

## Смотрите также
- [common.GetAddonRelatedVisObject](function.common.GetAddonRelatedVisObject)