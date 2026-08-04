# social.GetFriendInfo

Извлекает информацию о друге из списка друзей главного игрока.

## Описание

```lua
social.GetFriendInfo( friendId: ObjectId ): table | nil
```

Функция возвращает таблицу с информацией о друге из списка друзей главного игрока. Некоторые поля могут заполниться не сразу, а с некоторой задержкой: `raceClass`, `sex`, `mapId`, `moodEmote`.

## Список параметров

- **`friendId`** (`ObjectId`) - Идентификатор друга игрока из списка друзей (не является обычным идентификатором игрока).

## Возвращаемые значения

Возвращает `table` | `nil` - таблицу с информацией о друге или `nil`, если друг из списка друзей не найден.

- **`id`** (`ObjectId`) - Идентификатор друга игрока из списка друзей.

- **`isBestFriend`** (`boolean`) - Флаг, указывающий, является ли друг также лучшим другом.

- **`isSimpleFriend`** (`boolean`) - Флаг, указывающий, является ли друг также обычным другом.

- **`name`** (`WString`) - Имя персонажа.

- **`altName`** (`WString`) - Имя перерождения (реморта) персонажа.

- **`description`** (`WString`) - Комментарий главного игрока по данному персонажу.

- **`sysOnlineStatus`** (`string`(`ENUM_AvatarOnlineStatus_*`)) - Состояние друга (онлайн, альт, с мобильного).

- **`isLogged`** (`boolean`) - Флаг нахождения персонажа в игре.

- **`isAlt`** (`boolean`) - Флаг нахождения персонажа в игре как альтернативного персонажа.

- **`level`** (`number`) - Уровень персонажа.

- **`lastOnlineTimeMs`** (`number`) - Время в миллисекундах с последнего захода персонажа в игру. Если персонаж сейчас в игре, значение равно `0`.

- **`raceClass`** (`table` | `nil`) - Информация о расе и классе персонажа.

- **`sex`** (`table` | `nil`) - Описание пола персонажа.

- **`mapId`** (`ObjectId` | `nil`) - Идентификатор карты, на которой находится персонаж, если известна.

- **`zoneName`** (`WString`) - Локализованное название зоны, на которой находится персонаж.

- **`moodEmote`** (`ObjectId` | `nil`) - Идентификатор эмоции настроения, если настроение выставлено у друга.

- **`isSpouse`** (`boolean`) - Флаг, указывающий, является ли друг также супругом.

## Примеры

### Получение информации о друзьях

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
В примере извлекается список друзей и в цикле перебирается каждый элемент. Для каждого идентификатора запрашивается подробная информация о друге, из которой затем получается имя персонажа.
:::

## Смотрите также

- [cartographer.GetZonesMapInfo](/api/category/cartographer/function.cartographer.GetZonesMapInfo.md)
- [LuaRaceClassInfoPart](/articles/LuaRaceClassInfoPart.md)
- [LuaSexInfoPart](/articles/LuaSexInfoPart.md)
- [unit.GetSex](/api/category/unit/function.unit.GetSex.md)
- [ENUM_AvatarOnlineStatus_*](/api/enums/enums.ENUM_Avatar.md)