# craft.SetReforgeRecipe

Устанавливает текущий рецепт и предмет для reforge крафта.

## Описание

```lua
craft.SetReforgeRecipe( resourceId: ReforgeResourceId, itemId: ObjectId ): boolean
```

Функция устанавливает текущий рецепт и предмет для reforge крафта.

## Список параметров

- **`resourceId`** (`ReforgeResourceId`) - Идентификатор ресурса для reforge крафта.

- **`itemId`** (`ObjectId`) - Идентификатор предмета для reforge крафта.

## Возвращаемые значения

Возвращает `boolean`.

Значение `true`, если рецепт установлен успешно, иначе `false`.

## Примеры

### Установка рецепта и предмета

```lua
craft.SetReforgeRecipe( resourceId, itemId )
```