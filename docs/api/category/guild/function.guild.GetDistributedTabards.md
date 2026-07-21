# guild.GetDistributedTabards

Возвращает описание знаков отличия, уже розданных гильдией.

## Описание

```lua
guild.GetDistributedTabards(): table | nil
```

Функция возвращает таблицу с информацией о знаках отличия, уже розданных гильдией. Если персонаж состоит в гильдии, возвращается таблица, проиндексированная по типу награды. Если гильдия отсутствует, возвращается `nil`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` или `nil`.

Если гильдия существует, возвращается таблица, проиндексированная по типу награды:

- **`key`** (`number`) - тип знака отличия, соответствующий значениям перечисления `ENUM_TabardType_...`.

- **`value`** (`number` | `nil`) - количество розданных наград данного типа. Если наград данного типа нет, возвращается `nil`.

## Примеры

### Получение информации о розданных знаках отличия

```lua
local rewards = guild.GetTabards()
local distributedTabards = guild.GetDistributedTabards()
if rewards then
    local championRewardCount = rewards[ ENUM_TabardType_Champion ] or 0
    local championDistributedCount = distributedTabards[ ENUM_TabardType_Champion ] or 0
end
```

::: info Описание примера
В примере запрашиваются доступные награды гильдии через `guild.GetTabards()` и уже розданные знаки отличия через `guild.GetDistributedTabards()`. Если таблица наград существует, извлекается количество доступных и розданных знаков отличия типа `ENUM_TabardType_Champion`.
:::

## Смотрите также

- [ENUM_TabardType_...](../constants#enum-tabardtype)
- [guild.GetTabards](function.guild.GetTabards)