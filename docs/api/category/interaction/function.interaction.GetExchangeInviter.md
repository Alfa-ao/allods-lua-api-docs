# interaction.GetExchangeInviter
Возвращает информацию об игроке, начавшем торговлю.

## Описание
```lua
interaction.GetExchangeInviter(): table|nil
```
Функция возвращает таблицу с информацией об игроке, начавшем торговлю, или `nil`, если обмен не начат.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` или `nil`.

Если обмен начат, возвращается таблица со следующими полями:

- **`playerId`** (`ObjectId`) - Идентификатор игрока.

- **`money`** (`number`) - Количество денег на обменном столе этого игрока.

- **`primaryConfirmed`** (`boolean`) - Флаг предварительного согласия игрока.

- **`finalConfirmed`** (`boolean`) - Флаг окончательного согласия игрока.

- **`items`** (`table`) - Список идентификаторов предметов на обменном столе. Идентификаторы находятся в таблице по индексам слотов (`items[slotNumber]`). Если в слоте нет предмета, значение равно `nil`.

## Примеры
### Получение информации о предметах на обменном столе
```lua
local offerInfo = interaction.GetExchangeInviter()
for i = 0, interaction.GetExchangeSlotCount() - 1 do
    local id = offerInfo.items[ i ]
    if id then
        local itemInfo = avatar.GetItemInfo( id )
    end
end
```
::: info Описание примера
В примере запрашивается информация об игроке, начавшем обмен. Затем в цикле перебираются все доступные слоты обменного стола. Для каждого слота, содержащего предмет, извлекается его идентификатор и запрашивается подробная информация о предмете.
:::

## Смотрите также
- [interaction.GetExchangeSlotCount](function.interaction.GetExchangeSlotCount)
- [avatar.GetItemInfo](function.avatar.GetItemInfo)