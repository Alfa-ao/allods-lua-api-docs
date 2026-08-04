# social.GetFriendList
Возвращает список друзей текущего аватара игрока.

## Описание

```lua
social.GetFriendList(): table
```

Функция возвращает индексированную с `0` таблицу с идентификаторами друзей из списка друзей игрока. Подробности о каждом элементе списка можно получить с помощью функции `social.GetFriendInfo()`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - индексированная с `0` таблица с идентификаторами (`ObjectId`) друзей из списка друзей игрока.

## Примеры

### Итерация по списку друзей
```lua
local friends = social.GetFriendList()
for i = 0, GetTableSize( friends ) - 1 do
    local friendInfo = social.GetFriendInfo( friends[i] )
    if friendInfo then
        local friendName = friendInfo.name
    end
end
```

::: info Описание примера
В примере запрашивается список идентификаторов друзей. Затем в цикле происходит итерация по полученной таблице и извлечение подробной информации о каждом друге с помощью `social.GetFriendInfo()`.
:::

## Смотрите также

- [social.GetFriendInfo](/api/category/social/function.social.GetFriendInfo.md)