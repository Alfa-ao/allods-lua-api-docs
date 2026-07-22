# loot.GetMinItemQualityForLootScheme

Возвращает пороговое качество предметов для текущей схемы лута.

## Описание

```lua
loot.GetMinItemQualityForLootScheme(): number
```

Функция возвращает пороговое качество предметов для текущей схемы лута.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `number`(`ITEM_QUALITY_*`) - идентификатор качества предмета.

## Примеры

### Получение порогового качества

```lua
local quality = loot.GetMinItemQualityForLootScheme()
```

## Смотрите также

- [ITEM_QUALITY_*](../constants#item-quality)