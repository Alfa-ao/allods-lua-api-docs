# craft.DiceCraftState
Возвращает текущее состояние крафтинга.

## Описание
```lua
craft.DiceCraftState(): table|nil
```
Функция возвращает таблицу с параметрами состояния крафтинга или `nil`, если режим крафтинга не включён.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` или `nil`.

- **`maxLockedDices`** (`number`) - Максимально допустимое количество залоченых костей для одного переброса.

- **`maxRecipeLevel`** (`number`) - Максимально допустимый уровень рецепта.

- **`rerolls`** (`number`) - Базовое количество рероллов.

- **`inGame`** (`boolean`) - `false`, если мини-игра ещё не началась (в этом состоянии можно использовать `craft.DiceCraftPutItem`, `craft.DiceCraftEmptySlot`); `true`, если идёт мини-игра (можно использовать `craft.DiceCraftLockSlot`).

- **`currentDicesNumber`** (`number` | `nil`) - Число костей в мини-игре; `nil`, если мини-игра ещё не начата.

- **`rerollsLeft`** (`number` | `nil`) - Число оставшихся рероллов в мини-игре; `nil`, если мини-игра ещё не начата.

## Примеры

### Проверка состояния крафтинга

```lua
local state = craft.DiceCraftState()
if state and state.inGame then
    craft.DiceCraftLockSlot(slot, true)
end
```

::: info Описание примера
В примере запрашивается текущее состояние крафтинга. Если состояние успешно получено и мини-игра уже началась, выполняется блокировка слота.
:::

## Смотрите также
- [craft.DiceCraftPutItem](function.craft.DiceCraftPutItem)
- [craft.DiceCraftEmptySlot](function.craft.DiceCraftEmptySlot)
- [craft.DiceCraftLockSlot](function.craft.DiceCraftLockSlot)