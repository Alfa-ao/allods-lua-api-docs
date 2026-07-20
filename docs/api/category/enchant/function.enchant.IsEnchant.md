# enchant.IsEnchant
Определяет, является ли предмет энчантом.

## Описание
```lua
enchant.IsEnchant( itemId: ObjectId ): boolean
```
Функция анализирует идентификатор предмета и возвращает логическое значение, указывающее на принадлежность предмета к категории энчантов.

## Список параметров
- **`itemId`** (`ObjectId`) - Уникальный идентификатор проверяемого предмета.

## Возвращаемые значения
Возвращает `boolean` - `true`, если предмет является энчантом, и `false` в противном случае.

## Примеры
### Проверка предмета на принадлежность к энчантам
```lua
if enchant.IsEnchant( itemId ) then
    local slot = enchant.GetEnchantSlot( itemId )
end
```
::: info Описание примера
В примере проверяется, является ли предмет энчантом. Если условие выполняется, извлекается слот для данного энчанта с помощью функции `enchant.GetEnchantSlot`.
:::

## Смотрите также
- [enchant.GetEnchantSlot](function.enchant.GetEnchantSlot)
- [enchant.GetEnchants](function.enchant.GetEnchants)