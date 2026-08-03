# loot.GetLootGroupPartInfo

Возвращает информацию о текущем варианте выпадения лута на астральных островах.

## Описание

```lua
loot.GetLootGroupPartInfo(): table
```

Функция возвращает информацию о текущем варианте выпадения лута на астральных островах.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - таблица с полями:

- **`lootGroup`** (`LootGroupId`) - идентификатор варианта, используемого в данный момент.

## Примеры

### Получение информации о текущем варианте лута

```lua
local info = loot.GetLootGroupPartInfo()
```

## Смотрите также

- [EVENT_LOOTSELECTOR_CHANGED](/api/events/events.EVENT_LOOTSELECTOR_.md)
- [loot.GetCommonInfo](/api/category/loot/function.loot.GetCommonInfo)
- [loot.SelectLootGroup](/api/category/loot/function.loot.SelectLootGroup)
- [LootGroupId](/api/types/LootGroupId.md)