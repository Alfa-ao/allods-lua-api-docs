# loot.SelectLootGroup

Устанавливает вариант выпадения лута на астральных островах.

## Описание

```lua
loot.SelectLootGroup( lootGroupId: LootGroupId )
```

Функция устанавливает вариант выпадения лута на астральных островах по заданному идентификатору группы.

## Список параметров

- **`lootGroupId`** (`LootGroupId`) - Идентификатор выбранного варианта. Значение может быть получено из списка `loot.GetCommonInfo().allLoot`.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Установка варианта лута

```lua
local allLoot = loot.GetCommonInfo().allLoot
if allLoot[0] then
    loot.SelectLootGroup( allLoot[0] )
end
```

::: info Описание примера

В примере сначала извлекается список всех доступных вариантов лута с помощью `loot.GetCommonInfo()`. Затем проверяется наличие хотя бы одного элемента в списке и, при его наличии, вызывается функция `loot.SelectLootGroup()` для установки первого варианта.

:::

## Смотрите также

- [loot.GetCommonInfo](function.loot.GetCommonInfo)
- [loot.GetLootGroupPartInfo](function.loot.GetLootGroupPartInfo)
- [LootGroupId](../types/LootGroupId)