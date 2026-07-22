# object.GetManaType
Возвращает тип маны объекта.

## Описание
```lua
object.GetManaType( objectId: ObjectId ): number
```
Функция возвращает тип маны объекта. Если объект не имеет маны, возвращается значение `MANA_TYPE_NONE`.

::: info Перечисление
- **`MANA_TYPE_MANA`** (`number` `0`)

- **`MANA_TYPE_ENERGY`** (`number` `1`)

- **`MANA_TYPE_NONE`** (`number` `2`)
:::

## Список параметров

- **`objectId`** (`ObjectId`) - Идентификатор объекта.

## Возвращаемые значения
Возвращает `number` (`MANA_TYPE_*`) - Тип маны объекта.

## Примеры
### Получение информации о мане
```lua
local manaInfo = object.GetManaType( objectId ) ~= MANA_TYPE_NONE and object.GetManaInfo( objectId )
```
::: info Описание примера
В примере проверяется тип маны объекта. Если он не равен `MANA_TYPE_NONE`, извлекается полная информация о мане с помощью функции `object.GetManaInfo`.
:::

## Смотрите также
- [object.GetManaInfo](function.object.GetManaInfo)
- [MANA_TYPE_*](#)