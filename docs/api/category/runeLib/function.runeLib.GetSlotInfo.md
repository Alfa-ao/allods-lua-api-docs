# runeLib.GetSlotInfo

Возвращает таблицу с информацией о слоте одежды под руну.

## Описание

```lua
runeLib.GetSlotInfo( dressSlot: number ): table | nil
```

Функция возвращает таблицу с информацией о слоте одежды под руну или `nil` в случае возникновения ошибок.

## Список параметров

- **`dressSlot`** (`number`(`DRESS_SLOT_*`)) - Номер слота одежды.

## Возвращаемые значения

Возвращает `table` | `nil` - Таблица с информацией о слоте под руну или `nil` в случае ошибок.

- **`dressSlot`** (`number`(`DRESS_SLOT_*`)) - Номер слота.

- **`requiredLevel`** (`number`) - Уровень игрока, с которого руна в этом слоте начнет работать.

- **`isOffensive`** (`boolean`) - Флаг, указывающий, что данный слот предназначен для атакующей руны.

## Примеры

### Получение информации о слоте

```lua
local dressSlot = 0
local runeSlotInfo = runeLib.GetSlotInfo( dressSlot )
if runeSlotInfo then
    local requiredLevel = runeSlotInfo.requiredLevel
end
```

## Смотрите также

- [DRESS_SLOT_*](/api/constants/constants.DRESS_SLOT.md)