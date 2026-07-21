# guildHallLib.GetCurrentStateInfo

Возвращает описание текущего состояния оплота гильдии.

## Описание

```lua
guildHallLib.GetCurrentStateInfo(): table|nil
```

Функция возвращает описание текущего состояния оплота гильдии.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` или `nil`.

Если оплот гильдии существует, возвращается таблица со следующими полями:

- **`description`** (`WString`) - художественное описание данного состояния.

- **`requiredExp`** (`number`) - требуемое количество прогресса для достижения данного состояния.

- **`prevRequiredExp`** (`number`) - требуемое количество прогресса для достижения предыдущего состояния.

или `nil`, если оплот гильдии не существует.

## Примеры

### Получение информации о текущем состоянии оплота

```lua
local guildHallCurrentState = guildHallLib.IsExist() and guildHallLib.GetCurrentStateInfo()
```

::: info Описание примера
В примере сначала проверяется существование оплота гильдии с помощью функции `guildHallLib.IsExist()`. Если оплот существует, вызывается функция `guildHallLib.GetCurrentStateInfo()` для получения информации о его текущем состоянии.
:::

## Смотрите также

- [guildHallLib.GetStatesInfo](function.guildHallLib.GetStatesInfo)