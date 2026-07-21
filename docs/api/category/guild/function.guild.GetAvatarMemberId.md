# guild.GetAvatarMemberId

Возвращает идентификатор члена гильдии для главного игрока.

## Описание

```lua
guild.GetAvatarMemberId(): ObjectId | nil
```

Функция возвращает идентификатор члена гильдии для главного игрока.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `ObjectId` | `nil` - идентификатор члена гильдии, если такой есть.

## Примеры

### Получение информации о члене гильдии

```lua
local memberId = guild.GetAvatarMemberId()
if memberId then
    local memberInfo = guild.GetMemberInfo( memberId )
    if memberInfo then
        local name = memberInfo.name
    end
end
```

::: info Описание примера
В примере извлекается идентификатор члена гильдии главного игрока. При успешном получении идентификатора запрашивается подробная информация о члене гильдии и извлекается его имя.
:::

## Смотрите также

- [guild.GetMemberInfo](function.guild.GetMemberInfo)