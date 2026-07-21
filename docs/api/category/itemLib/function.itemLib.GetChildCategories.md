# itemLib.GetChildCategories

Возвращает список идентификаторов терминальных категорий предметов для указанной корневой категории.

## Описание

```lua
itemLib.GetChildCategories( itemCategoryId: ItemCategoryId ): table
```

Функция возвращает индексированную с нуля таблицу, содержащую идентификаторы ресурсов терминальных категорий предметов для заданной корневой категории.

## Список параметров

- **`itemCategoryId`** (`ItemCategoryId`) - Идентификатор корневой категории.

## Возвращаемые значения

Возвращает `table` - индексированная с нуля таблица, содержащая идентификаторы ресурсов терминальных категорий предметов.

## Примеры

### Обход дерева категорий предметов

```lua
local roots = avatar.GetItemRootCategories()
for i = 0, GetTableSize( roots ) do
    local categoryInfo = itemLib.GetCategoryInfo( roots[ i ] )
    if categoryInfo then
        local name = categoryInfo.name
    end

    local childs = itemLib.GetChildCategories( roots[ i ] )
    for j = 0, GetTableSize( childs ) do
        local categoryInfo = itemLib.GetCategoryInfo( childs[ 0 ] )
        if categoryInfo then
            local name = categoryInfo.name
        end
    end
end
```

::: info Описание примера
В примере запрашиваются корневые категории предметов. Для каждой корневой категории извлекается информация и список дочерних терминальных категорий. Далее для каждой дочерней категории также извлекается информация. Используются циклы и условные операторы для обхода структуры.
:::

## Смотрите также

- [avatar.GetItemRootCategories](function.avatar.GetItemRootCategories)
- [itemLib.GetCategoryInfo](function.itemLib.GetCategoryInfo)
- [GetTableSize](function.common.GetTableSize)