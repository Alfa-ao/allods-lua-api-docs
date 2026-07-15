# avatar.GetMetaUpgradeCost
Возвращает стоимость улучшения мета-предмета в меди.

## Описание
```lua
avatar.GetMetaUpgradeCost( sourceId: ObjectId, enhancerId: ObjectId, agentId: ObjectId ): number
```
Функция рассчитывает и возвращает стоимость улучшения мета-предмета в меди на основе переданных идентификаторов предмета, улучшителя и агента.

## Список параметров
- **`sourceId`** (`ObjectId`)
Идентификатор предмета, который подлежит улучшению.
- **`enhancerId`** (`ObjectId`)
Идентификатор предмета-улучшителя, применяемого для модификации целевого предмета.
- **`agentId`** (`ObjectId`)
Идентификатор агента улучшения, осуществляющего операцию модификации.

## Возвращаемые значения
Возвращает `number` — стоимость улучшения предмета в меди.

## Примеры
### Вычисление стоимости улучшения мета-предмета
```lua
local meta = avatar.GetItemMetaInfo( sourceId )
if meta then
  local metaUpgradePrice = avatar.GetMetaUpgradeCost( sourceId, enhancerId, agentId )
end
```
::: info Описание примера
В примере сначала запрашивается мета-информация о предмете с помощью функции `avatar.GetItemMetaInfo`. Если информация успешно получена и предмет обладает мета-свойствами, вычисляется стоимость его улучшения через `avatar.GetMetaUpgradeCost` с передачей необходимых идентификаторов.
:::

## Смотрите также
- [avatar.GetItemMetaInfo](avatar.GetItemMetaInfo)