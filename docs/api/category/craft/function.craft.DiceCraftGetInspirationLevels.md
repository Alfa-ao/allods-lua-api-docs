# craft.DiceCraftGetInspirationLevels

Возвращает список уровней вдохновения.

## Описание

```lua
craft.DiceCraftGetInspirationLevels(): table|nil
```

Функция возвращает список уровней вдохновения, при достижении каждого из которых на 1 увеличивается число заготовок, на которые подействует вдохновение при использовании. В случае ошибки возвращает `nil`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` или `nil`.

- `table` - список (индексируется от 0) уровней вдохновения (`number`).

- `nil` - если произошла ошибка.

## Примеры

### Получение уровней вдохновения

```lua
local inspirationLevels = craft.DiceCraftGetInspirationLevels()
```

## Смотрите также

- [craft.DiceCraftGetRecipeInspiration](function.craft.DiceCraftGetRecipeInspiration)

- [craft.DiceCraftUseInspiration](function.craft.DiceCraftUseInspiration)