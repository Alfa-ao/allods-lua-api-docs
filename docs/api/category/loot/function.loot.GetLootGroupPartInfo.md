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

- [EVENT_LOOTSELECTOR_CHANGED](EVENT_LOOTSELECTOR_CHANGED)
- [loot.GetCommonInfo](loot.GetCommonInfo)
- [loot.SelectLootGroup](loot.SelectLootGroup)
- [LootGroupId](LootGroupId)