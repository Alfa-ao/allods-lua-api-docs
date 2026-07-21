# guild.GetMemberBalance
Возвращает информацию о балансе члена гильдии в гильдейском банке.

## Описание
```lua
guild.GetMemberBalance( memberId: ObjectId ): number
```
Функция возвращает баланс члена гильдии в гильдейском банке.

## Список параметров
- **`memberId`** (`ObjectId`) - идентификатор члена гильдии

## Возвращаемые значения
Возвращает `number` - баланс члена гильдии в меди.

## Примеры
### Получение баланса первого члена гильдии
```lua
local members = guild.GetMembers()
if members[ 0 ] then
    local value = guild.GetMemberBalance( members[ 0 ] )
end
```

::: info Описание примера
В примере сначала получается список членов гильдии с помощью функции `guild.GetMembers`. Затем проверяется наличие первого элемента в списке, и если он существует, извлекается его баланс с помощью функции `guild.GetMemberBalance`.
:::

## Смотрите также
- [guild.GetMembers](function.guild.GetMembers)