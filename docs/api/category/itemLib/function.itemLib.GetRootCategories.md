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
    local categoryInfo = avatar.GetItemCategoryInfo( roots[ i ] )
    if categoryInfo then
        local name = categoryInfo.name
    end

    local childs = avatar.GetItemChildCategories( roots[ i ] )
    for j = 0, GetTableSize( childs ) do
        local categoryInfo = avatar.GetItemCategoryInfo( childs[ 0 ] )
        if categoryInfo then
            local name = categoryInfo.name
        end
    end
end
```

## Смотрите также

- [avatar.GetItemCategoryInfo](function.avatar.GetItemCategoryInfo)
- [avatar.GetItemChildCategories](function.avatar.GetItemChildCategories)