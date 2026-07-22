# loot.SetMinItemQualityForLootScheme

Задает пороговое качество предметов для текущей схемы лута.

## Описание

```lua
loot.SetMinItemQualityForLootScheme( quality: number )
```

Функция задает пороговое качество предметов для текущей схемы лута.

## Список параметров

- **`quality`** (`number`(`ITEM_QUALITY_*`)) - Идентификатор качества предмета.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Установка порогового качества

```lua
local quality = ITEM_QUALITY_RARE
loot.SetMinItemQualityForLootScheme( quality )
```

## Смотрите также

- [ITEM_QUALITY_*](#)