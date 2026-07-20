# dominationLib.GetObjectives

Возвращает список боевых целей в режиме Domination.

## Описание

```lua
dominationLib.GetObjectives(): table|nil
```

Функция возвращает список идентификаторов боевых целей в режиме Domination. Если список целей пустой, возвращается `nil`. Индексация в возвращаемой таблице начинается с `0`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` или `nil`.

При наличии целей возвращается таблица, содержащая идентификаторы (`ObjectId`) боевых целей. Индексация начинается с `0`. Если список пустой, возвращается `nil`.

## Примеры

### Получение информации о первой цели

```lua
local objectives = dominationLib.GetObjectives()
if objectives then
    local objectiveInfo = dominationLib.GetObjectiveInfo( objectives[0] )
end
```

## Смотрите также

- [dominationLib.GetObjectiveInfo](function.dominationLib.GetObjectiveInfo)