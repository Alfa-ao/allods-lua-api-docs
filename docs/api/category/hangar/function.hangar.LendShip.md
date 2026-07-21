# hangar.LendShip
Передает активный корабль во временное пользование другому аватару.

## Описание
```lua
hangar.LendShip( friendId: ObjectId )
```
Аватар должен быть лучшим другом и быть онлайн (см. `social.GetFriendList()`, поля `isBestFriend` и `sysOnlineStatus`).

## Список параметров
- **`friendId`** (`ObjectId`) - Идентификатор аватара, которому передается корабль; это не обычный идентификатор игрока, а тот, который возвращает `social.GetFriendList()`.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Передача корабля
```lua
hangar.LendShip( friendId )
```

## Смотрите также
- [hangar.CanLendShip](function.hangar.CanLendShip)
- [social.GetFriendList](function.social.GetFriendList)
- [social.GetFriendInfo](function.social.GetFriendInfo)