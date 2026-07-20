# dungeonChoice.GetDungeonReward

Возвращает список наград, доступных для получения при атаке личного приключения.

## Описание

```lua
dungeonChoice.GetDungeonReward( dungeonIndex: number ): table
```

Функция возвращает индексированный с `0` список таблиц, описывающих отдельные награды, доступные для получения при атаке указанного личного приключения.

## Список параметров

- **`dungeonIndex`** (`number`) - Индекс личного приключения в списке.

## Возвращаемые значения

Возвращает `table` - индексированный с `0` список таблиц, описывающих отдельную награду.

- **`index`** (`number`) - Индекс награды в списке.

- **`name`** (`WString`) - Название награды.

- **`count`** (`number`) - Количество выдаваемой награды.

## Примеры

### Получение названия первой награды приключения

```lua
local list = dungeonChoice.GetList()
if list[ 0 ] then
    local rewards = dungeonChoice.GetDungeonReward( dungeonIndex )
    if rewards[ 0 ] then
        LogInfo( rewards[ 0 ].name )
    end
end
```

::: info Описание примера
В примере сначала запрашивается список доступных личных приключений через `dungeonChoice.GetList()`. При наличии хотя бы одного приключения вызывается `dungeonChoice.GetDungeonReward()` для получения списка наград. Если список наград не пуст, выводится название первой награды.
:::

## Смотрите также

- [dungeonChoice.GetList](function.dungeonChoice.GetList)