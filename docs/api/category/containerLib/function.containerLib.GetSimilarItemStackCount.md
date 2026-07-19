# containerLib.GetSimilarItemStackCount
Возвращает количество похожих предметов в указанном контейнере.

## Описание
```lua
containerLib.GetSimilarItemStackCount( id: ObjectId, slotType: number ): number
```
Функция определяет количество предметов в контейнере, схожих с заданным по ресурсу, уровню, качеству, статусу проклятости и статусу привязки.

## Список параметров
- **`id`** (`ObjectId`) - Идентификатор предмета.

- **`slotType`** (`number`) - Тип контейнера с предметами. Значения относятся к перечислению `ITEM_CONT_...`.

## Возвращаемые значения
Возвращает `number` - количество похожих предметов.

## Примеры
### Получение количества похожих предметов в инвентаре
```lua
local count = containerLib.GetSimilarItemStackCount( itemId, ITEM_CONT_INVENTORY )
```

## Смотрите также
- [ITEM_CONT_...](../constants#item-cont)