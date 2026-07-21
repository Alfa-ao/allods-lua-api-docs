# guildHallLib.GetStatesInfo
Возвращает список состояний оплота гильдии и их описание.

## Описание
```lua
guildHallLib.GetStatesInfo(): table|nil
```
Функция возвращает список состояний оплота гильдии и их описание. Индексация элементов в возвращаемой таблице начинается с 1.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` или `nil`.

- **`description`** (`WString`) - художественное описание данного состояния.

- **`requiredExp`** (`number`) - требуемое количество прогресса для достижения данного состояния.

## Примеры
### Получение списка состояний оплота
```lua
local guildHallStates = guildHallLib.IsExist() and guildHallLib.GetStatesInfo()
```

## Смотрите также
- [guildHallLib.GetCurrentStateInfo](function.guildHallLib.GetCurrentStateInfo)