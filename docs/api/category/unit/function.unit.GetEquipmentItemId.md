# unit.GetEquipmentItemId
Возвращает идентификатор указанного предмета экипировки данного юнита.

## Описание

```lua
unit.GetEquipmentItemId( unitId: ObjectId, slot: number, slotType: number ): ObjectId
```

Юнит может быть главным игроком или игроком, инспектируемым в данный момент.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор юнита.

- **`slot`** (`number`(`DRESS_SLOT_*`)) - Индекс слота (0..DRESS_SLOT_UNDRESSABLE - 1).

- **`slotType`** (`number`(`ITEM_CONT_*`)) - Тип контейнера.

## Возвращаемые значения

Возвращает `ObjectId` - идентификатор предмета экипировки.

## Примеры

### Получение идентификатора предмета экипировки

```lua
unit.GetEquipmentItemId( unitId, slot, ITEM_CONT_EQUIPMENT )
```

## Смотрите также

- [DRESS_SLOT_*](../constants)
- [ITEM_CONT_*](../constants)