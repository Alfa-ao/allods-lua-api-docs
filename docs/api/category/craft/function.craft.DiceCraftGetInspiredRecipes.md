# craft.DiceCraftGetInspiredRecipes
Возвращает список рецептов, для которых накоплено вдохновение.

## Описание

```lua
craft.DiceCraftGetInspiredRecipes(): table|nil
```

Функция возвращает список идентификаторов рецептов с ненулевым вдохновением или `nil` в случае ошибки. Функция доступна только во время сессии крафтинга по механике dice craft.

::: warning Замечание
Функция доступна только во время сессии крафтинга по механике dice craft.
:::

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает таблицу (`table`), содержащую идентификаторы (`RecipeId`) рецептов с ненулевым вдохновением, проиндексированную от 0. Возвращает `nil`, если произошла ошибка.

## Примеры

### Получение списка рецептов с вдохновением

```lua
local recipes = craft.DiceCraftGetInspiredRecipes()
if recipes and recipes[0] then
    LogInfo( craft.DiceCraftGetRecipeInspiration( recipes[0] ) )
end
```

::: info Описание примера
В примере запрашивается список рецептов с накопленным вдохновением. Если список не пуст, выводится значение вдохновения для первого рецепта с помощью функции `craft.DiceCraftGetRecipeInspiration`.
:::

## Смотрите также

- [craft.DiceCraftGetRecipeInspiration](function.craft.DiceCraftGetRecipeInspiration)