# interaction.GetExchangeInvited

Возвращает информацию об игроке, принявшем приглашение на торговлю.

## Описание

```lua
interaction.GetExchangeInvited(): table|nil
```

Функция возвращает таблицу с информацией об игроке, принявшем приглашение на торговлю, или `nil`, если обмен не начат.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` или `nil`.

- **`playerId`** (`ObjectId`) - Идентификатор игрока.

- **`money`** (`number`) - Количество денег на обменном столе этого игрока.

- **`primaryConfirmed`** (`boolean`) - Флаг предварительного согласия игрока.

- **`finalConfirmed`** (`boolean`) - Флаг окончательного согласия игрока.

- **`items`** (`table`) - Список идентификаторов предметов на обменном столе. Идентификаторы находятся в таблице по индексам слотов (`items[slotNumber]`). Если в слоте нет предмета, значение равно `nil`.

## Примеры

### Обработка предметов на обменном столе

```lua
local offerInfo = interaction.GetExchangeInvited()
for i = 0, interaction.GetExchangeSlotCount() - 1 do
    local id = offerInfo.items[i]
    if id then
        local itemInfo = avatar.GetItemInfo(id)
    end
end
```

::: info Описание примера
В примере извлекается информация о приглашенном игроке. Затем в цикле перебираются все доступные слоты обменного стола. Для каждого слота проверяется наличие предмета, и если предмет присутствует, извлекается его подробная информация.
:::

## Смотрите также

- [interaction.GetExchangeSlotCount](function.interaction.GetExchangeSlotCount)
- [avatar.GetItemInfo](function.avatar.GetItemInfo)