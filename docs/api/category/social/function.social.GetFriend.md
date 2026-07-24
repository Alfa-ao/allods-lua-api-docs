# social.GetFriend

Возвращает идентификатор друга по его имени из списка друзей главного игрока.

## Описание

```lua
social.GetFriend( name: WString ): ObjectId | nil
```

Функция извлекает и возвращает идентификатор друга по его имени из списка друзей главного игрока.

## Список параметров

- **`name`** (`WString`) - Имя друга.

## Возвращаемые значения

Возвращает `ObjectId` | `nil` - Идентификатор друга игрока из списка друзей (это не обычный идентификатор игрока), если такой друг есть.

## Примеры

### Получение информации о друге по цели

```lua
local friendId = social.GetFriend( object.GetName( avatar.GetTarget() ) )
if friendId then
    local friendInfo = social.GetFriendInfo( friendId )
end
```

::: info Описание примера
В примере извлекается имя текущего целевого объекта, после чего производится поиск его идентификатора в списке друзей. При успешном нахождении запрашивается полная информация о друге.
:::

## Смотрите также

- [social.GetFriendInfo](function.social.GetFriendInfo)
- [object.GetName](../object/function.object.GetName)
- [avatar.GetTarget](../avatar/function.avatar.GetTarget)