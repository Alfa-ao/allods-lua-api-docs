# mission.SetAEMarkOutOfRangeDecal

Устанавливает текстуру, отображаемую при указании в точку, выходящую за область действия умения.

## Описание

```lua
mission.SetAEMarkOutOfRangeDecal( decalId: DecalObjectId )
```

Функция устанавливает текстуру, отображаемую при указании в точку, выходящую за область действия умения.

## Список параметров

- **`decalId`** (`DecalObjectId`) - Идентификатор декала.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Установка декала для области действия

```lua
local decalId = common.GetAddonRelatedDecal( "AEMarkCross" )
mission.SetAEMarkOutOfRangeDecal( decalId )
```

::: info Описание примера
В примере получают идентификатор декала, связанного с аддоном, и устанавливают его в качестве текстуры для отображения при выходе за область действия умения.
:::

## Смотрите также

- [common.GetAddonRelatedDecal](function.common.GetAddonRelatedDecal)