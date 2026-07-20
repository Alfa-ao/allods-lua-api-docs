# enchant.GetEnchantSlot
Возвращает слот, предназначенный для установки энчанта.

## Описание
```lua
enchant.GetEnchantSlot( itemId: ObjectId ): number
```
Функция извлекает и возвращает индекс слота, в который устанавливается указанный энчант. Идентификатор энчанта соответствует идентификатору предмета.

## Список параметров
- **`itemId`** (`ObjectId`) - Идентификатор предмета, выступающий в роли идентификатора энчанта.

## Возвращаемые значения
Возвращает `number` - индекс слота, в который вставляется энчант. Значения определяются перечислением `ENUM_EnchantSlot_...`.

## Примеры
### Проверка и получение слота энчанта
```lua
if enchant.IsEnchant( itemId ) then
    local slot = enchant.GetEnchantSlot( itemId )
end
```

## Смотрите также
- [enchant.GetEnchants](function.enchant.GetEnchants)
- [ENUM_EnchantSlot_...](enums.enchant)