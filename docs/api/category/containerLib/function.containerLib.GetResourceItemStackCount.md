# containerLib.GetResourceItemStackCount

Возвращает количество предметов в контейнере, имеющих тот же ресурс, что и у заданного предмета.

## Описание

```lua
containerLib.GetResourceItemStackCount( id: ObjectId | ResourceId, slotType: number ): number
```

Функция подсчитывает и возвращает количество предметов в указанном контейнере, которые обладают тем же ресурсом, что и предмет с заданным идентификатором.

## Список параметров

- **`id`** (`ObjectId` | `ResourceId`) - Идентификатор предмета.

- **`slotType`** (`number`) - Тип контейнера с предметами. Значения соответствуют константам `ITEM_CONT_...`.

## Возвращаемые значения

Возвращает `number` - количество предметов с тем же ресурсом в указанном контейнере.

## Примеры

### Базовое использование

```lua
local count = containerLib.GetResourceItemStackCount( itemId, ITEM_CONT_INVENTORY )
```

## Смотрите также

- [ITEM_CONT_...](fgfg)