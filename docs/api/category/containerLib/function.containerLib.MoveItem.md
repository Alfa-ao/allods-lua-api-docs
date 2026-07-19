# containerLib.MoveItem

Перемещает предмет.

## Описание

```lua
containerLib.MoveItem( itemId: ObjectId, slotType: number, slot: number|nil, count: number|nil )
```

Функция перемещает предмет. Если будет провалена какая-либо из проверок, то функция завершится с ошибкой.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

- **`slotType`** (`number`) - Тип контейнера места назначения.

- **`slot`** (`number` | `nil`) - Номер слота в контейнере. Если указан nil, то слот подберётся автоматически.

- **`count`** (`number` | `nil`) - Количество перемещаемых предметов. Если указан nil, то переместится весь слот.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Перемещение предмета в инвентарь

```lua
containerLib.MoveItem( itemId, ITEM_CONT_INVENTORY, 12 )
```

## Смотрите также

- [ITEM_CONT_*](../constants#item-cont)