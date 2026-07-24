# unit.GetEquipmentItemSlotUnlockedQualities
Возвращает состояние разблокированности слота экипировки для главного или инспектируемого игрока.

## Описание
```lua
unit.GetEquipmentItemSlotUnlockedQualities( unitId: ObjectId, equipmentSlot: number ): table
```
Функция извлекает и возвращает таблицу с информацией о состоянии разблокированности слота экипировки для заданного игрока.

## Список параметров
- **`unitId`** (`ObjectId`) - Идентификатор игрока.

- **`equipmentSlot`** (`number`(`DRESS_SLOT_*`)) - Индекс слота в экипировке.

## Возвращаемые значения
Возвращает `table`:
- **`isFullyUnlocked`** (`boolean`) - Слот полностью разблокирован.

- **`qualities`** (`table`) - Таблица, индексированная с нуля, содержащая допустимые для экипировки значения качества предметов (`number`(`ITEM_QUALITY_*`)).

## Примеры
### Проверка состояния разблокированности слота
```lua
local unlock = unit.GetEquipmentItemSlotUnlockedQualities( unitId, equipmentSlot )
if unlock.isFullyUnlocked then
    -- Дополнительной информации по слоту не требуется
else
    local qualities = unlock.qualities
    if GetTableSize( qualities ) == 0 then
        -- Вывод информации о том, что слот недоступен
    else
        -- Вывод подробной информации о доступности слота
    end
end
```
::: info Описание примера
В примере запрашивается состояние разблокированности слота экипировки. Если слот полностью разблокирован, дополнительные действия не требуются. В противном случае извлекается таблица допустимых качеств предметов. Если таблица пуста, выводится информация о полной недоступности слота, иначе выводится подробная информация о доступных качествах.
:::

## Смотрите также
- [DRESS_SLOT_*](../constants#dress-slot)
- [ITEM_QUALITY_*](../constants#item-quality)
- [EVENT_AVATAR_UNLOCKS_CHANGED](../events#event-avatar-unlocks-changed)