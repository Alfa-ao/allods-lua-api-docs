# craft.DiceCraftRecipeIsSameItem
Определяет, может ли предмет быть использован в рецепте механики DiceCraft.

## Описание

```lua
craft.DiceCraftRecipeIsSameItem( recipeItemId: ObjectId, inventoryItemId: ObjectId ): boolean
```

Функция проверяет, является ли предмет из инвентаря тем, который может быть использован в рецепте на месте предмета из описания, работая как с обычными предметами, так и с джокерами.

## Список параметров

- **`recipeItemId`** (`ObjectId`) - Идентификатор предмета из описания рецепта.

- **`inventoryItemId`** (`ObjectId`) - Идентификатор предмета, который предполагается использовать при крафтинге по рецепту.

## Возвращаемые значения

`boolean` - `true`, если предмет, идентификатор которого указан вторым, может быть использован в рецепте на месте предмета, идентификатор которого указан первым.

## Примеры

### Проверка соответствия предмета рецепту
(HELP)UseItem( inventoryItemId )
```lua
if craft.DiceCraftRecipeIsSameItem( recipeItemId, inventoryItemId ) then
    UseItem( inventoryItemId )
end
```

::: info Описание примера
Проверяется, может ли предмет из инвентаря быть использован в рецепте. Если проверка успешна, предмет используется.
:::

## Смотрите также

- [craft.DiceCraftIsJoker](/api/category/craft/function.craft.DiceCraftIsJoker.md)
- [craft.DiceCraftGetRecipes](/api/category/craft/function.craft.DiceCraftGetRecipes.md)
- [avatar.GetRecipeInfo](/api/category/avatar/function.avatar.GetRecipeInfo.md)