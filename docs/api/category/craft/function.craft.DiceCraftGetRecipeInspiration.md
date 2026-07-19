# craft.DiceCraftGetRecipeInspiration

Возвращает величину накопленного вдохновения для заданного рецепта.

## Описание

```lua
craft.DiceCraftGetRecipeInspiration( recipeId: RecipeId ): number|nil
```

Функция возвращает величину накопленного вдохновения для заданного рецепта.

::: warning Замечание
Функция доступна только во время сессии крафтинга (по механике dice craft).
:::

## Список параметров

- **`recipeId`** (`RecipeId`) - Идентификатор рецепта.

## Возвращаемые значения

Возвращает `number` - величину накопленного вдохновения для заданного рецепта, или `nil`, если вдохновение отсутствует.

## Примеры

### Получение накопленного вдохновения

```lua
local recipes = craft.DiceCraftGetInspiredRecipes()
if recipes and recipes[0] then
    LogInfo( craft.DiceCraftGetRecipeInspiration( recipes[0] ) )
end
```

::: info Описание примера
Запрашивается список рецептов с накопленным вдохновением. Если список не пустой, выводится величина вдохновения для первого рецепта.
:::

## Смотрите также

- [craft.DiceCraftGetInspiredRecipes](function.craft.DiceCraftGetInspiredRecipes)
- [craft.DiceCraftGetInspirationLevels](function.craft.DiceCraftGetInspirationLevels)