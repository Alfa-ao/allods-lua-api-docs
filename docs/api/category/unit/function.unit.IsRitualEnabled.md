# unit.IsRitualEnabled

Определяет, может ли главный или инспектируемый игрок находиться в состоянии ритуала.

## Описание

```lua
unit.IsRitualEnabled( unitId: ObjectId ): boolean
```

Проверяет доступность состояния ритуала для главного или инспектируемого игрока, разрешая надевать ритуальные вещи и просматривать их контейнер.

## Список параметров

- **`unitId`** (`ObjectId`) - Уникальный идентификатор игрока.

## Возвращаемые значения

Возвращает `boolean` - `true`, если ритуал доступен.

## Примеры

### Получение предметов ритуального контейнера в зависимости от активного пресета

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
В примере сначала извлекается идентификатор инспектируемого игрока. Если для него доступен ритуал, определяется активный пресет. В зависимости от значения пресета, извлекается список идентификаторов предметов из соответствующего ритуального контейнера.
:::

## Смотрите также

- [DUMMY_TYPE](sdfgsdfg)
- [ITEM_CONT](sfgsdfg)
- [unit.GetRitualActivePreset](function.unit.GetRitualActivePreset)
- [unit.GetEquipmentItemIds](function.unit.GetEquipmentItemIds)
- [avatar.GetInspectInfo](../avatar/function.avatar.GetInspectInfo)