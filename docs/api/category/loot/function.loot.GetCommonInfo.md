# loot.GetCommonInfo

Извлекает информацию общего характера, неизменную в процессе игры.

## Описание

```lua
loot.GetCommonInfo(): table
```

Функция возвращает информацию общего характера, неизменную в процессе игры.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - таблица с полями:

- **`allLoot`** (`table`) - Индексированный с 0 список `LootGroupId`, варианты выпадения лута на астральных островах.

## Примеры

### Получение общей информации о луте

```lua
local info = loot.GetCommonInfo()
```

## Смотрите также

- [loot.SelectLootGroup](function.loot.SelectLootGroup)
- [LootGroupId](types#lootgroupid)