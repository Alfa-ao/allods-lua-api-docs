# avatar.PutAlchemyItemToSlot

Размещает или извлекает ингредиент в указанном слоте алхимической ступки.

## Описание

```lua
avatar.PutAlchemyItemToSlot( itemId: ObjectId | nil, slot: number )
```

Функция размещает предмет из инвентаря в заданный слот (барабан) алхимической ступки или извлекает предмета из него. После выполнения присылается событие `EVENT_ALCHEMY_ITEM_PLACED`, содержащее информацию об изменении состояния слота. Для очистки слота необходимо передать `nil` в качестве идентификатора предмета.

## Список параметров

- **`itemId`** (`ObjectId` | `nil`) - Уникальный идентификатор предмета (ингредиента) из инвентаря, который необходимо разместить в слоте. Передача значения `nil` приводит к извлечению предмета и очистке указанного слота.

- **`slot`** (`number`) - Индекс слота (барабана) алхимической ступки. Нумерация слотов начинается с `0`.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Размещение предмета из инвентаря и последующая очистка слота

```lua
local inventoryIds = avatar.GetInventoryIds()
local targetSlot = 0 -- Первый барабан ступки

-- Размещение предмета в слоте
local itemId = inventoryIds[ 0 ]
if itemId then
    avatar.PutAlchemyItemToSlot( itemId, targetSlot )
end

-- Очистка слота (извлечение предмета)
avatar.PutAlchemyItemToSlot( nil, targetSlot )
```

## Смотрите также

- [EVENT_ALCHEMY_ITEM_PLACED](/api/events/events.EVENT_ALCHEMY_.md#event-alchemy-item-placed)