# unit.GetEquipmentItemIds

Возвращает таблицу со всей экипировкой данного юнита.

## Описание

```lua
unit.GetEquipmentItemIds( unitId: ObjectId, slotType: number ): table
```

Функция возвращает таблицу со всей экипировкой указанного юнита, который может являться главным игроком или инспектируемым персонажем. Тип контейнера задается константами `ITEM_CONT_*`.

## Список параметров

- **`unitId`** (`ObjectId`) - Уникальный идентификатор юнита.

- **`slotType`** (`number`(`ITEM_CONT_*`)) - Тип контейнера.

## Возвращаемые значения

Возвращает `table` - таблица со всей экипировкой данного юнита, индексированная в диапазоне от `0` до `DRESS_SLOT_UNDRESSABLE - 1`. Элементы таблицы представляют собой `ObjectId` - идентификаторы предметов.

## Примеры

### Получение идентификатора шлема

```lua
local arrEquipment = unit.GetEquipmentItemIds( unitId, ITEM_CONT_EQUIPMENT )
local helmId = arrEquipment[ DRESS_SLOT_HELM ]
```

## Смотрите также

- [ITEM_CONT_*](/api/constants/constants.ITEM_CONT.md)
- [DRESS_SLOT_*](/api/constants/constants.DRESS_SLOT.md)