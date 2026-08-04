# social.IsFriendListLoaded
Проверяет факт загрузки списка друзей.

## Описание

```lua
social.IsFriendListLoaded(): boolean
```

Функция возвращает статус загрузки списка друзей.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `boolean` - `true`, если список друзей загружен, и `false` в противном случае.

## Примеры

### Проверка загрузки списка друзей

```lua
if social.IsFriendListLoaded() then
    -- Список друзей успешно загружен
end
```

## Смотрите также

- [EVENT_AVATAR_FRIEND_LIST_LOADED](/api/events/events.EVENT_AVATAR_.md#event-avatar-friend-list-loaded)