# craft.MakeForge

Выполняет крафт типа forge с указанными параметрами.

## Описание

```lua
craft.MakeForge( forgeId: ForgeCraftResourceId, recipeId: ForgeCraftRecipeId, components: table ): boolean
```
Функция инициирует крафт типа forge с указанными ресурсами и набором компонентов.

## Список параметров

- **`forgeId`** (`ForgeCraftResourceId`) - Ресурс forge крафта (поле `tierResource` в `craft.GetForgeRecipeInfo`).

- **`recipeId`** (`ForgeCraftRecipeId`) - Ресурс рецепта крафта.
- **`components`** (`table`) - Таблица таблиц компонентов (индексы внешней таблицы от `0` до `MAX_FORGE_COMPONENT_COUNT`). Значение - таблица (индексированная с `1`) с `ObjectId` предметов компонентов в порядке приоритета применения.

## Возвращаемые значения

`boolean` - Значение `true` в случае успеха, `false` в случае неудачи.

## Примеры

### Выполнение крафта с приоритетными компонентами
```lua
local success = craft.MakeForge( fid, rid, {
    [0] = { component0HighPriorityId, component0LowPriorityId },
    [1] = { component1Id }
} )
```

## Смотрите также
- [craft.GetForgeRecipeInfo](function.craft.GetForgeRecipeInfo)