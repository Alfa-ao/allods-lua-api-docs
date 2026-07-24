# unit.GetEquipmentSlotBonus

Извлекает информацию о бонусах предмета в заданном слоте экипировки юнита.

## Описание

```lua
unit.GetEquipmentSlotBonus( unitId: ObjectId, slot: number, slotType: number ): table
```

Функция извлекает и возвращает детальную информацию о бонусах предмета, находящегося в заданном слоте экипировки указанного юнита. Юнитом может являться как главный игрок, так и игрок, находящийся в процессе инспекции. Возвращаемые данные имеют тот же формат, что и результат вызова `itemLib.GetBonus`.

::: warning Замечание
Возвращаемая информация учитывает наложенные бафы, влияющие на характеристики экипировки.
:::

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор юнита.

- **`slot`** (`number`(`DRESS_SLOT_*`)) - Индекс слота (от `0` до `DRESS_SLOT_UNDRESSABLE - 1`).

- **`slotType`** (`number`(`ITEM_CONT_*`)) - Тип контейнера.

## Возвращаемые значения

Возвращает `table` - информацию о бонусах предмета. Структура таблицы аналогична возвращаемому значению функции `itemLib.GetBonus`.

## Примеры

### Получение бонусов предмета в слоте экипировки

```lua
local bonus = unit.GetEquipmentSlotBonus( unitId, slot, ITEM_CONT_EQUIPMENT )
if bonus then
    local power = bonus.miscStats.power.effective
end
```

## Смотрите также

- [DRESS_SLOT_*](../constants#dress-slot)
- [ITEM_CONT_*](../constants#item-cont)
- [itemLib.GetBonus](../itemLib/function.itemLib.GetBonus)