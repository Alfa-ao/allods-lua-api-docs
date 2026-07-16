# avatar.InventoryGetPocketInfo
Возвращает таблицу с информацией о кармане инвентаря главного игрока.

## Описание
```lua
avatar.InventoryGetPocketInfo( pocketIndex: number ): table | nil
```
Функция извлекает и возвращает детальную информацию о заданном кармане инвентаря главного игрока. Инвентарь состоит из базовой сумки и нескольких дополнительных карманов. Слоты инвентаря индексируются начиная с 0 по всему массиву базовой сумки и карманов. Общий размер инвентаря равен сумме размера базовой сумки и размеров всех карманов.

В зависимости от контекста выполнения (UIState или GameState), возвращается расширенная или базовая информация. Поле `image` доступно только в контексте UIState.

## Список параметров
- **`pocketIndex`** (`number`)
Индекс кармана, начиная с 0.

## Возвращаемые значения
Возвращает таблицу (`table`) или `nil`, если карман с указанным индексом не существует.

Структура возвращаемой таблицы:
- **`firstIndex`** (`number`) — первый индекс слота кармана в общем массиве слотов инвентаря.
- **`size`** (`number`) — размер кармана.
- **`name`** (`WString`) — название категории.
- **`description`** (`WString`) — описание категории.

Часть, доступная только в контексте UIState:
- **`image`** (`WString`) — текстура иконки кармана.

## Примеры
### Получение информации о кармане и предметах в нем
```lua
local pocketIndex = 0
local pocketInfo = avatar.InventoryGetPocketInfo( pocketIndex )
if pocketInfo then
    local name = pocketInfo.name
    local firstPocketItemId = avatar.GetInventoryItemId( pocketInfo.firstIndex )
    local lastPocketItemId = avatar.GetInventoryItemId( pocketInfo.firstIndex + pocketInfo.size - 1 )
end
```
::: info Описание примера
В примере запрашивается информация о кармане с индексом 0. Если карман существует, извлекается его название, а также идентификаторы первого и последнего предмета в данном кармане с помощью функции `avatar.GetInventoryItemId`.
:::

## Смотрите также
- [EVENT_INVENTORY_SLOT_CHANGED](events#event-inventory-slot-changed)