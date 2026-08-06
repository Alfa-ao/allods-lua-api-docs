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
if loot.CanSetLootScheme() then
    loot.SetMinItemQualityForLootScheme( ITEM_QUALITY_RARE )
end
```

## Смотрите также

- [ITEM_QUALITY_*](/api/constants/constants.ITEM_QUALITY.md)
- [loot.CanSetLootScheme](/api/category/loot/function.loot.CanSetLootScheme.md)