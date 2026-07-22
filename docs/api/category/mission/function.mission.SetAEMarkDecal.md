# mission.SetAEMarkDecal
Устанавливает декал для AEMark.

## Описание
```lua
mission.SetAEMarkDecal( decalId: DecalObjectId )
```
Функция устанавливает декал для AEMark.

## Список параметров
- **`decalId`** (`DecalObjectId`) - Идентификатор декала.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Установка декала для AEMark
```lua
local decalId = common.GetAddonRelatedDecal( "AEMark" )
mission.SetAEMarkDecal( decalId )
```

::: info Описание примера
В примере запрашивается идентификатор декала, связанного с аддоном, и устанавливается в качестве декала для AEMark.
:::

## Смотрите также
- [common.GetAddonRelatedDecal](function.common.GetAddonRelatedDecal)