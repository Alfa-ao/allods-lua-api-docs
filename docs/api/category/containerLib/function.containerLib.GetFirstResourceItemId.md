# containerLib.GetFirstResourceItemId

Возвращает идентификатор первого предмета в контейнере с тем же ресурсом, что и у заданного предмета.

## Описание

```lua
containerLib.GetFirstResourceItemId( slotType: number, id: number )
```

Функция возвращает `nil`, если предмет с таким ресурсом в контейнере отсутствует. Типы контейнеров задаются константами `ITEM_CONT_...`.

## Список параметров

- **`slotType`** (`number`) - тип контейнера с предметами. Задается константами `ITEM_CONT_...`.

- **`id`** (`number`) - идентификатор предмета (`ObjectId`) или ресурса (`ItemId`).

## Возвращаемые значения

Возвращает `ObjectId` - идентификатор предмета, или `nil`, если подходящие предметы не найдены.

## Примеры

### Получение идентификатора предмета по ресурсу

```lua
local itemId = containerLib.GetFirstResourceItemId( ITEM_CONT_INVENTORY, itemResourceId )
```

## Смотрите также

- [ITEM_CONT_...](#)