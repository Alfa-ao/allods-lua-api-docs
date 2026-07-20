# enchant.CanInsertEnchants
Определяет возможность вставки энчантов в предмет.

## Описание
```lua
enchant.CanInsertEnchants( itemId: ObjectId ): boolean
```
Функция проверяет, допускается ли вставка любых энчантов в указанный предмет.

::: warning Замечание
Точный ответ о возможности вставки конкретного энчанта дает функция `enchant.CanInsertEnchant`.
:::

## Список параметров
- **`itemId`** (`ObjectId`) - Идентификатор проверяемого предмета.

## Возвращаемые значения
Возвращает `boolean` - `true`, если в предмет можно вставлять энчанты, и `false` в противном случае.

## Примеры
### Проверка возможности вставки энчантов
```lua
local isEnchantsCarrier = enchant.CanInsertEnchants( itemId )
```

## Смотрите также
- [enchant.CanInsertEnchant](function.enchant.CanInsertEnchant)