# social.EndFriendship

Завершает дружбу главного игрока с указанным побратимом.

## Описание

```lua
social.EndFriendship( friendId )
```

Функция прекращает дружескую связь главного игрока с побратимом, идентификатор которого передан в качестве параметра.

## Список параметров

- **`friendId`** (`ObjectId`) - Идентификатор побратима.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Прекращение дружбы с лучшим побратимом

```lua
local friendId = social.GetFriendList()[ 0 ]
if friendId and social.GetFriendInfo( friendId ).isBestFriend then
    social.EndFriendship( friendId )
end
```

::: info Описание примера
В примере извлекается идентификатор первого побратима из списка посредством вызова `social.GetFriendList`. Далее проверяется, что побратим существует и является лучшим (`isBestFriend`), после чего вызывается `social.EndFriendship` для завершения дружбы.
:::

## Смотрите также

- [social.GetFriendList](/api/category/social/function.social.GetFriendList.md)
- [social.GetFriendInfo](/api/category/social/function.social.GetFriendInfo.md)