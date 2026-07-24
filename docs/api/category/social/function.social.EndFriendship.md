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
local friendId = social.GetFiriendList()[ 0 ]
if friendId and social.GetFiriendInfo( friendId ).isBestFriend then
    social.EndFriendship( friendId )
end
```

::: info Описание примера
В примере извлекается идентификатор первого побратима из списка посредством вызова `social.GetFiriendList`. Далее проверяется, что побратим существует и является лучшим (`isBestFriend`), после чего вызывается `social.EndFriendship` для завершения дружбы.
:::

## Смотрите также

- [social.GetFiriendList](function.social.GetFiriendList)
- [social.GetFiriendInfo](function.social.GetFiriendInfo)