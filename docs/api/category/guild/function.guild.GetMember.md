# guild.GetMember

Возвращает идентификатор члена гильдии главного игрока по имени игрока.

## Описание

```lua
guild.GetMember( playerName: WString ): ObjectId | nil
```

Функция возвращает идентификатор члена гильдии главного игрока по заданному имени.

## Список параметров

- **`playerName`** (`WString`) - имя игрока.

## Возвращаемые значения

Возвращает `ObjectId` или `nil` - идентификатор члена гильдии, если такой есть.

## Примеры

### Получение информации о члене гильдии

```lua
local memberId = guild.GetMember( playerName )
if memberId then
    local memberInfo = guild.GetMemberInfo( memberId )
    if memberInfo then
        local name = memberInfo.name
    end
end
```

::: info Описание примера
В примере сначала извлекается идентификатор члена гильдии по имени. Если идентификатор успешно получен, запрашивается полная информация о члене гильдии с помощью функции `guild.GetMemberInfo`. При успешном получении информации извлекается имя персонажа.
:::

## Смотрите также

- [guild.GetMemberInfo](function.guild.GetMemberInfo)