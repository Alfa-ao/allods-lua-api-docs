# enchant.GetItemSlots

Извлекает слоты предмета, доступные для вставки энчантов.

## Описание

```lua
enchant.GetItemSlots( itemId: ObjectId ): table|nil
```

Функция возвращает таблицу с информацией о слотах предмета, доступных для вставки энчантов. Если информация о слотах отсутствует, функция возвращает `nil`. В противном случае возвращается таблица, проиндексированная элементами числового перечисления `ENUM_EnchantSlot_...`, где значениями выступают флаги `boolean`, указывающие на наличие слота соответствующего ключу типа.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения

Возвращает `table` или `nil`. Таблица проиндексирована элементами числового перечисления `ENUM_EnchantSlot_...`, где значения `boolean` указывают на наличие у предмета слота соответствующего ключу типа. Значение `nil` возвращается, если информация отсутствует.

## Примеры

### Получение доступных слотов для энчантов

```lua
local availableSlots = enchant.GetItemSlots( itemId )
if availableSlots then
    local hasDefenceSlot = availableSlots[ENUM_EnchantSlot_Defence]
end
```

## Смотрите также

- [enchant.GetEnchants](function.enchant.GetEnchants)
- [ENUM_EnchantSlot_...](enum.ENUM_EnchantSlot)