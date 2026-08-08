# unit.GetRitualActivePreset

Возвращает идентификатор текущего активного набора ритуальных вещей.

## Описание

```lua
unit.GetRitualActivePreset( unitId: ObjectId ): number
```

Извлекает и возвращает идентификатор активного набора ритуальных вещей для заданного игрока.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор игрока.

## Возвращаемые значения

Возвращает `number`(`DUMMY_TYPE_*`) - идентификатор активного набора ритуальных вещей.

## Примеры

### Получение активного набора ритуальных вещей

```lua
local unitId = avatar.GetInspectInfo().playerId
if unit.IsRitualEnabled( unitId ) then
    local activePreset = unit.GetRitualActivePreset( unitId )
    if activePreset == DUMMY_TYPE_SECONDARY then
        local itemIds = unit.GetEquipmentItemIds( avatar.GetId(), ITEM_CONT_EQUIPMENT_RITUAL_1 )
    elseif activePreset == DUMMY_TYPE_TERTIARY then
        local itemIds = unit.GetEquipmentItemIds( avatar.GetId(), ITEM_CONT_EQUIPMENT_RITUAL_2 )
    elseif activePreset == DUMMY_TYPE_QUATERNARY then
        local itemIds = unit.GetEquipmentItemIds( avatar.GetId(), ITEM_CONT_EQUIPMENT_RITUAL_3 )
    end
end
```

::: info Описание примера
В примере сначала извлекается идентификатор инспектируемого игрока. Затем проверяется, включены ли ритуалы для данного игрока. Если проверка успешна, запрашивается активный набор ритуальных вещей. В зависимости от полученного значения перечисления `DUMMY_TYPE`, извлекается список идентификаторов предметов из соответствующего слота экипировки.
:::

## Смотрите также

- [avatar.GetRitualActivePreset](/api/category/avatar/function.avatar.GetRitualActivePreset.md)
- [DUMMY_TYPE_*](/api/constants/constants.DUMMY_TYPE.md)
- [ITEM_CONT_*](/api/constants/constants.ITEM_CONT.md)
- [unit.GetEquipmentItemIds](/api/category/unit/function.unit.GetEquipmentItemIds.md)
- [avatar.GetInspectInfo](/api/category/avatar/function.avatar.GetInspectInfo.md)