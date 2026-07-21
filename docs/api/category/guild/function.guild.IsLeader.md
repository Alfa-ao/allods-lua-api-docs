# guild.IsLeader

Определяет, является ли указанный член гильдии её лидером.

## Описание

```lua
guild.IsLeader( memberId: ObjectId ): boolean
```

Функция проверяет, является ли заданный член гильдии её лидером.

## Список параметров

- **`memberId`** (`ObjectId`) - идентификатор члена гильдии.

## Возвращаемые значения

Возвращает `boolean` - `true`, если этот член гильдии является её лидером.

## Примеры

### Проверка статуса лидера

```lua
local memberId = guild.GetLeader()
if memberId then
    local checkedIsLeader = guild.IsLeader( memberId )
end
```

::: info Описание примера
В примере сначала получается идентификатор лидера гильдии с помощью функции `guild.GetLeader`. Если идентификатор успешно получен, выполняется проверка, является ли данный член гильдии лидером, с использованием функции `guild.IsLeader`.
:::

## Смотрите также

- [guild.GetLeader](function.guild.GetLeader)