# craft.DiceCraftGetPlacedItems

Возвращает список компонентов, которые в данный момент находятся в слотах.

## Описание

```lua
craft.DiceCraftGetPlacedItems(): table|nil
```

Функция возвращает таблицу, ключами в которой являются номера слотов, а значениями - идентификаторы предметов, или `nil`, если режим крафтинга не включён.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` или `nil`.

- **`table`** - таблица, ключами в которой являются номера слотов (integer, начинаются от 0), а значениями - идентификаторы предметов (ObjectId), размещённых в слотах (если слот пуст, значением будет nil).

- **`nil`** - если режим крафтинга не включён.

## Примеры

### Получение списка размещённых компонентов

```lua
local slots = craft.DiceCraftGetPlacedItems()
```

## Смотрите также

- [craft.DiceCraftEmptySlot](function.craft.DiceCraftEmptySlot)
- [craft.DiceCraftPutItem](function.craft.DiceCraftPutItem)
- [EVENT_DICE_CRAFT_SLOT_CHANGED](events.craft#event-dice-craft-slot-changed)