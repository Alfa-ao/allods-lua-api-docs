# userMods.GetCallStack

Возвращает lua стектрейс.

## Описание

```lua
userMods.GetCallStack()
```

Возвращает lua стектрейс.

::: warning Замечание
Функцию можно использовать только в пользовательских дополнениях (userMods).
:::

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table of string` — таблицу строк (индексируемую с 1), где каждая строка содержит сведения об одном вызове функции. Вершина стека имеет индекс `1`.

## Примеры

### Пример использования `GetCallStack`

```lua
function LogTrace()
    local trace = userMods.GetCallStack()
    table.remove( trace, 1 )
    
    for index, line in ipairs( trace ) do
        trace[ index ] = string.format( "%s%s", string.rep( "\t", index ), line )
    end
    
    return LogInfo( "Lua stack trace:\n" .. table.concat( trace, "\n" ) )
end
```