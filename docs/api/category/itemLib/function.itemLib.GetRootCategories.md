# itemLib.GetRootCategories

Возвращает список идентификаторов (`ItemCategoryId`) корневых категорий предметов.

## Описание

```lua
itemLib.GetRootCategories(): table
```

Функция возвращает индексированную с 0 таблицу, содержащую идентификаторы ресурсов корневых категорий предметов.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - индексированная с 0 таблица с идентификаторами ресурсов корневых категорий предметов.

## Примеры

### Обход корневых категорий и их потомков

```lua
local roots = itemLib.GetRootCategories()
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

## Смотрите также

- [itemLib.GetChildCategories](/api/category/itemLib/function.itemLib.GetChildCategories.md)
- [itemLib.GetCategoryInfo](/api/category/itemLib/function.itemLib.GetCategoryInfo.md)