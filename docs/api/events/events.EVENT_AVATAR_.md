## EVENT_AVATAR_ADDED_TO_FRIEND_LIST

### Описание

```
EVENT_AVATAR_ADDED_TO_FRIEND_LIST
```

Событие присылается, когда другой игрок добавляет главного персонажа в свой список друзей.

### Список параметров

- **`name`** (`WString`) - имя добавившего.

### Смотрите также

- [EVENT_AVATAR_FRIEND_ADDED](/api/events/events.EVENT_AVATAR_.md#event-avatar-friend-added)
- [social.IsFriendListLoaded](/api/category/social/function.social.IsFriendListLoaded.md)

---

## EVENT_AVATAR_ALIVE_CHANGED

### Описание

```
EVENT_AVATAR_ALIVE_CHANGED
```

Событие присылается при смене состояния «жив/мёртв» аватара. Если аватар умер или находится в чистилище, состояние считается `false`.

### Список параметров

- **`alive`** (`boolean`) - жив ли аватар.

### Смотрите также

- [avatar.IsAlive](/api/category/avatar/function.avatar.IsAlive.md)

---

## EVENT_AVATAR_BARRIERS_CHANGED

### Описание

```
EVENT_AVATAR_BARRIERS_CHANGED
```

Событие присылается при изменении состояния барьеров класса паладин.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [EVENT_AVATAR_STATS_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-stats-changed)

---

## EVENT_AVATAR_BINDED_TRANSPORT_CHANGED

### Описание

```
EVENT_AVATAR_BINDED_TRANSPORT_CHANGED
```

Событие присылается при изменении привязанного транспорта главного игрока. Событие присылается каждый раз, когда у главного игрока меняется привязанное транспортное средство (вызвал в ангаре/отозвал и т.п.).

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [EVENT_AVATAR_TRANSPORT_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-transport-changed)

---

## EVENT_AVATAR_BUFF_REMOVING_FAILED

### Описание

```
EVENT_AVATAR_BUFF_REMOVING_FAILED
```

Событие присылается в случае невозможности снять бафф с аватара с помощью `object.RemoveBuff( buffIndex )`. Уведомляет о неудачной попытке снятия баффа.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [object.RemoveBuff](/api/category/object/function.object.RemoveBuff.md)

---

## EVENT_AVATAR_CLASS_FORM_CHANGED

### Описание

```
EVENT_AVATAR_CLASS_FORM_CHANGED
```

Событие присылается, когда меняется форма класса аватара. Уведомляет об изменении формы класса аватара.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [EVENT_AVATAR_STATS_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-stats-changed)

---

## EVENT_AVATAR_CLIENT_ZONE_CHANGED

### Описание

```
EVENT_AVATAR_CLIENT_ZONE_CHANGED
```

Событие присылается при переходе аватара в другую зону. Уведомляет о более мелких (клиентских) подзонах, чем `EVENT_AVATAR_ZONE_CHANGED`.

::: warning Замечание
Данное событие - клиентское, в отличие от серверного `EVENT_AVATAR_ZONE_CHANGED`, подробности см. в последнем.
:::

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [EVENT_AVATAR_ZONE_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-zone-changed)
- [cartographer.GetCurrentZoneInfo](/api/category/cartographer/function.cartographer.GetCurrentZoneInfo.md)

---

## EVENT_AVATAR_CREATED

### Описание

```
EVENT_AVATAR_CREATED
```

Событие присылается при создании игрока. Уведомляет о создании нового игрока в мире.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор созданного игрока.

### Смотрите также

- [avatar.GetId](/api/category/avatar/function.avatar.GetId.md)

---

## EVENT_AVATAR_DESTINY_POINTS_CHANGED

### Описание

```
EVENT_AVATAR_DESTINY_POINTS_CHANGED
```

Событие присылается каждый раз, когда меняется количество Очков Судьбы у персонажа игрока. Уведомляет об изменении количества Очков Судьбы. При изменении бонусного пула Очков Судьбы присылается событие `EVENT_BONUS_POOLS_CHANGED`.

### Список параметров

- **`total`** (`number`) - всего получено/потеряно Очков Судьбы.

- **`bonus`** (`number`) - сколько из этих Очков Судьбы было получено в качестве бонуса из бонусного пула.

### Смотрите также

- [EVENT_BONUS_POOLS_CHANGED](/api/events/events.EVENT_BONUS_.md#event-bonus-pools-changed)
- [avatar.GetDestinyPoints](/api/category/avatar/function.avatar.GetDestinyPoints.md)

---

## EVENT_AVATAR_DIR_CHANGED

### Описание

```
EVENT_AVATAR_DIR_CHANGED
```

Событие присылается при изменении направления аватара более чем на 3 градуса. Уведомляет об изменении направления взгляда/поворота аватара.

### Список параметров

- **`dir`** (`number`) - угол в радианах от 0 до ±3.14.

### Смотрите также

- [EVENT_AVATAR_POS_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-pos-changed)

---

## EVENT_AVATAR_ENTER_PROCEDURAL_DUNGEON

### Описание

```
EVENT_AVATAR_ENTER_PROCEDURAL_DUNGEON
```

Событие присылается при входе главного игрока в процедурный данж.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [EVENT_AVATAR_LEAVE_PROCEDURAL_DUNGEON](/api/events/events.EVENT_AVATAR_.md#event-avatar-leave-procedural-dungeon)

---

## EVENT_AVATAR_EXPERIENCE_CHANGED

### Описание

```
EVENT_AVATAR_EXPERIENCE_CHANGED
```

Событие присылается каждый раз, когда изменился опыт персонажа игрока. Уведомляет об изменении опыта персонажа.

### Список параметров

- **`currentExp`** (`number`) - опыт персонажа.

- **`currentLevelExp`** (`number`) - опыт для получения текущего уровня персонажа.

- **`nextLevelExp`** (`number`) - опыт для получения следующего уровня персонажа.

- **`extraExp`** (`number`) - накопленный бонусный опыт, который может быть переведён в текущий (`currentExp`) при помощи «Фолианта знаний».

### Смотрите также

- [EVENT_AVATAR_PROGRESS_GAINED](/api/events/events.EVENT_AVATAR_.md#event-avatar-progress-gained)

---

## EVENT_AVATAR_FRIEND_ADDED

### Описание

```
EVENT_AVATAR_FRIEND_ADDED
```

Событие присылается при добавлении нового персонажа в список друзей главного игрока.

### Список параметров

- **`name`** (`WString`) - имя персонажа.

### Смотрите также

- [EVENT_AVATAR_FRIEND_REMOVED](/api/events/events.EVENT_AVATAR_.md#event-avatar-friend-removed)
- [EVENT_AVATAR_FRIEND_LIST_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-friend-list-changed)
- [social.IsFriendListLoaded](/api/category/social/function.social.IsFriendListLoaded.md)

---

## EVENT_AVATAR_FRIEND_ALT_NAME_CHANGED

### Описание

```
EVENT_AVATAR_FRIEND_ALT_NAME_CHANGED
```

Событие приходит при изменении имени реморта друга. Уведомляет об изменении альтернативного имени (реморта) друга.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор элемента списка друзей главного игрока.

- **`name`** (`WString`) - имя персонажа.

- **`altName`** (`WString`) - имя реморта персонажа.

### Смотрите также

- [EVENT_AVATAR_FRIEND_INFO_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-friend-info-changed)

---

## EVENT_AVATAR_FRIEND_DESCRIPTION_CHANGED

### Описание

```
EVENT_AVATAR_FRIEND_DESCRIPTION_CHANGED
```

Событие приходит при изменении описания друга. Уведомляет об изменении описания друга в списке.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор элемента списка друзей главного игрока.

### Смотрите также

- [EVENT_AVATAR_FRIEND_INFO_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-friend-info-changed)

---

## EVENT_AVATAR_FRIEND_IGNORE_LISTS_ERROR

### Описание

```
EVENT_AVATAR_FRIEND_IGNORE_LISTS_ERROR
```

Событие приходит при неудачной операции со списком друзей/игнорирования. Уведомляет об ошибке при выполнении операции со списком друзей или списком игнорирования.

### Список параметров

- **`sysError`** (`string`(`ENUM_AvatarFriendIgnoreListsError_...`)) - код ошибки. Значения соответствуют перечислению `ENUM_AvatarFriendIgnoreListsError_...`.

### Смотрите также

- [EVENT_AVATAR_FRIEND_LIST_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-friend-list-changed)
- [EVENT_AVATAR_IGNORE_LIST_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-ignore-list-changed)

---

## EVENT_AVATAR_FRIEND_INFO_CHANGED

### Описание

```
EVENT_AVATAR_FRIEND_INFO_CHANGED
```

Событие приходит при изменении базовых полей описания друга. Уведомляет об изменении базовой информации друга.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор элемента списка друзей главного игрока.

- **`name`** (`WString`) - имя друга.

### Смотрите также

- [EVENT_AVATAR_FRIEND_ALT_NAME_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-friend-alt-name-changed)
- [EVENT_AVATAR_FRIEND_DESCRIPTION_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-friend-description-changed)

---

## EVENT_AVATAR_FRIEND_LEVEL_CHANGED

### Описание

```
EVENT_AVATAR_FRIEND_LEVEL_CHANGED
```

Событие приходит при изменении уровня друга. Уведомляет об изменении уровня персонажа из списка друзей.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор элемента списка друзей главного игрока.

- **`name`** (`WString`) - имя персонажа.

- **`level`** (`number`) - новый уровень персонажа.

### Смотрите также

- [EVENT_AVATAR_FRIEND_INFO_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-friend-info-changed)

---

## EVENT_AVATAR_FRIEND_LIST_CHANGED

### Описание

```
EVENT_AVATAR_FRIEND_LIST_CHANGED
```

Событие приходит при изменении списка друзей. Уведомляет об изменении списка друзей главного игрока.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [EVENT_AVATAR_FRIEND_LIST_LOADED](events.EVENT_AVATAR_.md#event-avatar-friend-list-loaded)
- [EVENT_AVATAR_FRIEND_ADDED](events.EVENT_AVATAR_.md#event-avatar-friend-added)
- [EVENT_AVATAR_FRIEND_REMOVED](events.EVENT_AVATAR_.md#event-avatar-friend-removed)
- [social.IsFriendListLoaded](/api/category/social/function.social.IsFriendListLoaded.md)

---

## EVENT_AVATAR_FRIEND_LIST_LOADED

### Описание

```
EVENT_AVATAR_FRIEND_LIST_LOADED
```

Событие приходит при завершении загрузки списка друзей с сервера. Уведомляет о завершении загрузки списка друзей.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [social.IsFriendListLoaded](/api/category/social/function.social.IsFriendListLoaded.md)

---

## EVENT_AVATAR_FRIEND_MOOD_CHANGED

### Описание

```
EVENT_AVATAR_FRIEND_MOOD_CHANGED
```

Событие приходит при изменении настроения друга. Уведомляет об изменении настроения персонажа из списка друзей.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор элемента списка друзей главного игрока.

### Смотрите также

- [EVENT_AVATAR_FRIEND_INFO_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-friend-info-changed)

---

## EVENT_AVATAR_FRIEND_MUTUAL_CHANGED

### Описание

```
EVENT_AVATAR_FRIEND_MUTUAL_CHANGED
```

Событие приходит при изменении состояния взаимности друга. Уведомляет об изменении взаимности дружбы.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор элемента списка друзей главного игрока.

- **`name`** (`WString`) - имя персонажа.

- **`isMutual`** (`boolean`) - состояние взаимности персонажа.

### Смотрите также

- [EVENT_AVATAR_FRIEND_INFO_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-friend-info-changed)

---

## EVENT_AVATAR_FRIEND_ONLINE_CHANGED

### Описание

```
EVENT_AVATAR_FRIEND_ONLINE_CHANGED
```

Событие приходит при изменении состояния онлайн друга. Уведомляет об изменении онлайн-статуса персонажа из списка друзей.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор элемента списка друзей главного игрока.

- **`name`** (`WString`) - имя персонажа.

- **`isOnline`** (`boolean`) - находится ли персонаж в онлайне.

- **`sysStatus`** (`string`(`ENUM_AvatarOnlineStatus...`)) - онлайн-состояние персонажа. Значения соответствуют перечислению `ENUM_AvatarOnlineStatus...`.

### Смотрите также

- [EVENT_AVATAR_FRIEND_INFO_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-friend-info-changed)

---

## EVENT_AVATAR_FRIEND_REMOVED

### Описание

```
EVENT_AVATAR_FRIEND_REMOVED
```

Событие присылается при удалении персонажа из списка друзей главного игрока.

### Список параметров

- **`name`** (`WString`) - имя персонажа.

### Смотрите также

- [EVENT_AVATAR_FRIEND_ADDED](/api/events/events.EVENT_AVATAR_.md#event-avatar-friend-added)
- [EVENT_AVATAR_FRIEND_LIST_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-friend-list-changed)

---

## EVENT_AVATAR_FRIEND_SEX_CHANGED

### Описание

```
EVENT_AVATAR_FRIEND_SEX_CHANGED
```

Событие приходит при изменении пола друга. Уведомляет об изменении пола персонажа из списка друзей.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор элемента списка друзей главного игрока.

### Смотрите также

- [EVENT_AVATAR_FRIEND_INFO_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-friend-info-changed)

---

## EVENT_AVATAR_FRIEND_ZONE_CHANGED

### Описание

```
EVENT_AVATAR_FRIEND_ZONE_CHANGED
```

Событие приходит при изменении карты, на которой находится друг. Уведомляет о смене зоны/карты персонажа из списка друзей.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор элемента списка друзей главного игрока.

- **`name`** (`WString`) - имя персонажа.

- **`mapId`** (`ObjectId`| `nil`) - идентификатор карты, на которой находится персонаж, если она известна.

### Примеры

#### Получение информации о карте друга

```lua
local mapInfo = cartographer.GetZonesMapInfo( mapId )
if mapInfo then
    LogInfo( "map name: ", mapInfo.name )
end
```

::: info Описание примера
В примере извлекается информация о карте по идентификатору `mapId`, полученному из события. При успешном получении данных выводится имя карты.
:::

### Смотрите также

- [cartographer.GetZonesMapInfo](/api/category/cartographer/function.cartographer.GetZonesMapInfo.md)

---

## EVENT_AVATAR_IGNORE_ADDED

### Описание

```
EVENT_AVATAR_IGNORE_ADDED
```

Событие присылается при добавлении персонажа в список игнорирования главного игрока.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор элемента из списка игнорирования.

- **`name`** (`WString`) - имя персонажа.

### Смотрите также

- [EVENT_AVATAR_IGNORE_REMOVED](/api/events/events.EVENT_AVATAR_.md#event-avatar-ignore-removed)
- [EVENT_AVATAR_IGNORE_LIST_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-ignore-list-changed)
- [social.IsIgnored](/api/category/social/function.social.IsIgnored.md)

---

## EVENT_AVATAR_IGNORE_DESCRIPTION_CHANGED

### Описание

```
EVENT_AVATAR_IGNORE_DESCRIPTION_CHANGED
```

Событие приходит при изменении описания игнорируемого игрока. Уведомляет об изменении описания персонажа в списке игнорирования.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор элемента списка игнорирования главного игрока.

### Смотрите также

- [EVENT_AVATAR_IGNORE_LIST_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-ignore-list-changed)

---

## EVENT_AVATAR_IGNORE_LIST_CHANGED

### Описание

```
EVENT_AVATAR_IGNORE_LIST_CHANGED
```

Событие приходит при изменении списка игнорирования. Уведомляет об изменении списка игнорирования главного игрока.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [EVENT_AVATAR_IGNORE_LIST_LOADED](/api/events/events.EVENT_AVATAR_.md#event-avatar-ignore-list-loaded)
- [EVENT_AVATAR_IGNORE_ADDED](/api/events/events.EVENT_AVATAR_.md#event-avatar-ignore-added)
- [EVENT_AVATAR_IGNORE_REMOVED](/api/events/events.EVENT_AVATAR_.md#event-avatar-ignore-removed)
- [social.IsIgnoreListLoaded](/api/category/social/function.social.IsIgnoreListLoaded.md)

---

## EVENT_AVATAR_IGNORE_LIST_LOADED

### Описание

```
EVENT_AVATAR_IGNORE_LIST_LOADED
```

Событие приходит при завершении загрузки игнор-листа с сервера. Уведомляет о завершении загрузки списка игнорирования.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [social.IsIgnoreListLoaded](/api/category/social/function.social.IsIgnoreListLoaded.md)

---

## EVENT_AVATAR_IGNORE_REMOVED

### Описание

```
EVENT_AVATAR_IGNORE_REMOVED
```

Событие присылается при удалении персонажа из списка игнорирования главного игрока.

### Список параметров

- **`name`** (`WString`) - имя персонажа.

### Смотрите также

- [EVENT_AVATAR_IGNORE_ADDED](/api/events/events.EVENT_AVATAR_.md#event-avatar-ignore-added)
- [EVENT_AVATAR_IGNORE_LIST_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-ignore-list-changed)

---

## EVENT_AVATAR_ITEM_DROPPED

### Описание

```
EVENT_AVATAR_ITEM_DROPPED
```

Сообщение приходит, когда главный игрок теряет предмет. В сообщении приходит `ValuedObject` - объект, в котором содержится информация о предмете. Этот объект можно добавлять в какой-либо `ValuedText`.

::: warning Замечание
Сообщение приходит только в UIState.
:::

### Список параметров

- **`itemObject`** (`ValuedObject`) - объект, содержащий информацию о предмете.

- **`actionType`** (`string`(`ENUM_EnumTakeItemActionType_...`)) - откуда взялся предмет. Значения соответствуют перечислению `ENUM_EnumTakeItemActionType_...`.

### Смотрите также

- [EVENT_AVATAR_ITEM_TAKEN](/api/events/events.EVENT_AVATAR_.md#event-avatar-item-taken)

---

## EVENT_AVATAR_ITEM_TAKEN

### Описание

```
EVENT_AVATAR_ITEM_TAKEN
```

Сообщение приходит, когда главный игрок получает предмет. В сообщении приходит `ValuedObject` - объект, в котором содержится информация о предмете. Этот объект можно добавлять в какой-либо `ValuedText`.

::: warning Замечание
Сообщение приходит только в UIState.
:::

### Список параметров

- **`itemObject`** (`ValuedObject`) - объект, содержащий информацию о предмете.

- **`actionType`** (`string`(`ENUM_EnumTakeItemActionType_...`)) - откуда взялся предмет. Значения соответствуют перечислению `ENUM_EnumTakeItemActionType_...`.

### Смотрите также

- [EVENT_AVATAR_ITEM_DROPPED](/api/events/events.EVENT_AVATAR_.md#event-avatar-item-dropped)

---

## EVENT_AVATAR_ITEM_TAKEN_BY_GROUPMATE

### Описание

```
EVENT_AVATAR_ITEM_TAKEN_BY_GROUPMATE
```

Сообщение приходит, когда согрупник или соотрядник главного игрока получает предмет. В сообщении приходит `ValuedObject` - объект, в котором содержится информация о предмете. Этот объект можно добавлять в какой-либо `ValuedText`.

::: warning Замечание
Сообщение приходит только в UIState.
:::

### Список параметров

- **`playerId`** (`ObjectId`| `nil`) - идентификатор согрупника, если возможно его получить.

- **`itemObject`** (`ValuedObject`) - объект, содержащий информацию о предмете.

- **`actionType`** (`string`(`ENUM_EnumTakeItemActionType_...`)) - откуда взялся предмет. Значения соответствуют перечислению `ENUM_EnumTakeItemActionType_...`.

### Смотрите также

- [EVENT_AVATAR_ITEM_TAKEN](/api/events/events.EVENT_AVATAR_.md#event-avatar-item-taken)

---

## EVENT_AVATAR_LEAVE_PROCEDURAL_DUNGEON

### Описание

```
EVENT_AVATAR_LEAVE_PROCEDURAL_DUNGEON
```

Событие присылается при выходе главного игрока из процедурного данжа.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [EVENT_AVATAR_ENTER_PROCEDURAL_DUNGEON](/api/events/events.EVENT_AVATAR_.md#event-avatar-enter-procedural-dungeon)

---

## EVENT_AVATAR_LOGOUT_CANCELLED

### Описание

```
EVENT_AVATAR_LOGOUT_CANCELLED
```

Событие присылается, если игрок отменил выход из миссии (с помощью `mission.CancelLogout()`). Уведомляет об отмене выхода из миссии.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [mission.CancelLogout](/api/category/mission/function.mission.CancelLogout.md)
- [EVENT_AVATAR_WILL_BE_REMOVED](/api/events/events.EVENT_AVATAR_.md#event-avatar-will-be-removed)

---

## EVENT_AVATAR_MAP_CHANGED

### Описание

```
EVENT_AVATAR_MAP_CHANGED
```

Событие присылается при переходе аватара на другую карту. Уведомляет о смене карты аватара.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [EVENT_AVATAR_ZONE_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-zone-changed)
- [EVENT_AVATAR_CLIENT_ZONE_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-client-zone-changed)

---

## EVENT_AVATAR_MAP_INFO_AVAILABLE

### Описание

```
EVENT_AVATAR_MAP_INFO_AVAILABLE
```

Событие присылается, когда становится доступна информация о местонахождении аватара. Только после этого события можно пытаться вызывать функции, связанные с картой. Уведомляет о готовности данных карты. До получения данного события вызов функций картографа может быть некорректен.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [cartographer.GetCurrentZoneInfo](/api/category/cartographer/function.cartographer.GetCurrentZoneInfo.md)

---

## EVENT_AVATAR_MAP_MODIFIERS_CHANGED

### Описание

```
EVENT_AVATAR_MAP_MODIFIERS_CHANGED
```

Событие присылается, если изменились модификаторы карты на карте главного игрока. Уведомляет об изменении модификаторов текущей карты.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [EVENT_AVATAR_MAP_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-map-changed)

---

## EVENT_AVATAR_MEDAL_FINISHED

### Описание

```
EVENT_AVATAR_MEDAL_FINISHED
```

Событие присылается при выполнении достижения аватаром. Уведомляет о завершении достижения.

### Список параметров

- **`id`** (`number`) - идентификатор достижения.

### Смотрите также

- [order.GetAchievements](/api/category/order/function.order.GetAchievements.md)

---

## EVENT_AVATAR_MONEY_CHANGED

### Описание

```
EVENT_AVATAR_MONEY_CHANGED
```

Событие присылается каждый раз, когда изменилось количество денег у игрока. Уведомляет об изменении количества денег у главного игрока.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [EVENT_AVATAR_MONEY_TAKEN](/api/events/events.EVENT_AVATAR_.md#event-avatar-money-taken)
- [EVENT_AVATAR_MONEY_DROPPED](/api/events/events.EVENT_AVATAR_.md#event-avatar-money-dropped)

---

## EVENT_AVATAR_MONEY_DROPPED

### Описание

```
EVENT_AVATAR_MONEY_DROPPED
```

Сообщение приходит, когда главный игрок потерял деньги.

::: warning Замечание
Сообщение приходит только в UIState.
:::

### Список параметров

- **`money`** (`number`) - количество денег.

- **`actionType`** (`string`(`ENUM_EnumTakeItemActionType_...`)) - почему потеряны деньги. Значения соответствуют перечислению `ENUM_EnumTakeItemActionType_...`.

### Смотрите также

- [EVENT_AVATAR_MONEY_TAKEN](/api/events/events.EVENT_AVATAR_.md#event-avatar-money-taken)
- [EVENT_AVATAR_MONEY_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-money-changed)

---

## EVENT_AVATAR_MONEY_TAKEN

### Описание

```
EVENT_AVATAR_MONEY_TAKEN
```

Сообщение приходит, когда главный игрок получает деньги.

::: warning Замечание
Сообщение приходит только в UIState.
:::

### Список параметров

- **`money`** (`number`) - количество денег.

- **`actionType`** (`string`(`ENUM_EnumTakeItemActionType_...`)) - откуда получены деньги. Значения соответствуют перечислению `ENUM_EnumTakeItemActionType_...`.

### Смотрите также

- [EVENT_AVATAR_MONEY_DROPPED](/api/events/events.EVENT_AVATAR_.md#event-avatar-money-dropped)
- [EVENT_AVATAR_MONEY_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-money-changed)

---

## EVENT_AVATAR_MONEY_TAKEN_BY_GROUPMATE

### Описание

```
EVENT_AVATAR_MONEY_TAKEN_BY_GROUPMATE
```

Сообщение приходит, когда согрупник или соотрядник главного игрока получает деньги.

::: warning Замечание
Сообщение приходит только в UIState.
:::

### Список параметров

- **`playerId`** (`ObjectId`| `nil`) - идентификатор согрупника, если возможно его получить.

- **`money`** (`number`) - количество денег.

- **`actionType`** (`string`(`ENUM_EnumTakeItemActionType_...`)) - откуда взяты деньги. Значения соответствуют перечислению `ENUM_EnumTakeItemActionType_...`.

### Смотрите также

- [EVENT_AVATAR_MONEY_TAKEN](/api/events/events.EVENT_AVATAR_.md#event-avatar-money-taken)

---

## EVENT_AVATAR_POS_CHANGED

### Описание

```
EVENT_AVATAR_POS_CHANGED
```

Событие присылается при изменении координат аватара. Уведомляет об изменении позиции аватара в мире.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [EVENT_AVATAR_DIR_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-dir-changed)

---

## EVENT_AVATAR_PROGRESS_GAINED

### Описание

```
EVENT_AVATAR_PROGRESS_GAINED
```

Событие присылается, если главный игрок получил один из типов опыта для развития. Это может быть обычный опыт (experience), репутация с какой-либо фракцией, слава за PvP-сражения. Уведомляет о получении опыта любого типа для развития персонажа.

### Список параметров

- **`type`** (`number`(`ENUM_DevelopmentTrack_...`)) - тип опыта. Значения соответствуют перечислению `ENUM_DevelopmentTrack_...`.

- **`sysType`** (`string`(`ENUM_DevelopmentTrack_...`)) - строковое представление типа опыта. Значения соответствуют перечислению `ENUM_DevelopmentTrack_...`.

- **`source`** (`number`(`ENUM_DevelopmentSource_...`)) - тип источника опыта. Значения соответствуют перечислению `ENUM_DevelopmentSource_...`.

- **`sysSource`** (`string`(`ENUM_DevelopmentSource_...`)) - строковое представление типа источника опыта. Значения соответствуют перечислению `ENUM_DevelopmentSource_...`.

- **`total`** (`number`) - полученное количество опыта.

- **`bonus`** (`number`) - сколько из этого опыта было получено за бонусные очки.

- **`level`** (`number`) - уровень.

- **`value`** (`number`) - текущее значение.

- **`isPvPExperience`** (`boolean`) - этот опыт был получен за PvP.

- **`factionId`** (`FactionId`) - фракция (для `ENUM_DevelopmentTrack_Reputation`).

### Смотрите также

- [EVENT_AVATAR_EXPERIENCE_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-experience-changed)

---

## EVENT_AVATAR_PSIONIC_CHANNEL_CHANGED

### Описание

```
EVENT_AVATAR_PSIONIC_CHANNEL_CHANGED
```

Событие присылается каждый раз, когда меняется доступ в классовый канал чата псиоников. Уведомляет об изменении доступа в классовый канал чата псиоников.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [EVENT_AVATAR_PSIONIC_CONTACT_ADDED](/api/events/events.EVENT_AVATAR_.md#event-avatar-psionic-contact-added)

---

## EVENT_AVATAR_PSIONIC_CONTACT_ADDED

### Описание

```
EVENT_AVATAR_PSIONIC_CONTACT_ADDED
```

Событие присылается каждый раз, когда у псионика (основного игрока) появляется псионический контакт. Уведомляет о появлении нового псионического контакта.

### Список параметров

- **`type`** (`number`(`PSIONIC_CONTACT_XXX`)) - тип контакта. Значения соответствуют перечислению `PSIONIC_CONTACT_XXX`.

### Смотрите также

- [EVENT_AVATAR_PSIONIC_CONTACT_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-psionic-contact-changed)
- [EVENT_AVATAR_PSIONIC_CONTACT_REMOVED](/api/events/events.EVENT_AVATAR_.md#event-avatar-psionic-contact-removed)

---

## EVENT_AVATAR_PSIONIC_CONTACT_CHANGED

### Описание

```
EVENT_AVATAR_PSIONIC_CONTACT_CHANGED
```

Событие присылается каждый раз, когда у псионика (основного игрока) меняется состояние (цель или длительность (`durationMs`, но не `remainingMs`)) определённого псионического контакта. Уведомляет об изменении состояния псионического контакта.

### Список параметров

- **`type`** (`number`(`PSIONIC_CONTACT_XXX`)) - тип контакта. Значения соответствуют перечислению `PSIONIC_CONTACT_XXX`.

### Смотрите также

- [EVENT_AVATAR_PSIONIC_CONTACT_ADDED](/api/events/events.EVENT_AVATAR_.md#event-avatar-psionic-contact-added)
- [EVENT_AVATAR_PSIONIC_CONTACT_REMOVED](/api/events/events.EVENT_AVATAR_.md#event-avatar-psionic-contact-removed)

---

## EVENT_AVATAR_PSIONIC_CONTACT_REMOVED

### Описание

```
EVENT_AVATAR_PSIONIC_CONTACT_REMOVED
```

Событие присылается каждый раз, когда у псионика (основного игрока) исчезает псионический контакт. Уведомляет об исчезновении псионического контакта.

### Список параметров

- **`type`** (`number`(`PSIONIC_CONTACT_XXX`)) - тип контакта. Значения соответствуют перечислению `PSIONIC_CONTACT_XXX`.

### Смотрите также

- [EVENT_AVATAR_PSIONIC_CONTACT_ADDED](/api/events/events.EVENT_AVATAR_.md#event-avatar-psionic-contact-added)
- [EVENT_AVATAR_PSIONIC_CONTACT_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-psionic-contact-changed)

---

## EVENT_AVATAR_PSIONIC_DANGER_SENSE_LOCATED

### Описание

```
EVENT_AVATAR_PSIONIC_DANGER_SENSE_LOCATED
```

Событие приходит периодически, когда псионик определяет, что около него есть вражеский PC. Для этого он должен использовать способность DangerSense. Периодичность события определяется серверной механикой.

Октант направления на врага возвращается числом от 0 до 7. Размер октанта - одна восьмая окружности. Середина нулевого октанта - направление на север. Далее номера октантов увеличиваются по часовой стрелке:

- 0 - север
- 1 - северо-восток
- 2 - восток
- 3 - юго-восток
- 4 - юг
- 5 - юго-запад
- 6 - запад
- 7 - северо-запад

### Список параметров

- **`octant`** (`number`) - номер октанта, в котором замечен враг.

- **`hidden`** (`boolean`) - `true`, если враг невидим.

### Смотрите также

- [EVENT_AVATAR_PSIONIC_DANGER_SENSE_TARGET](/api/events/events.EVENT_AVATAR_.md#event-avatar-psionic-danger-sense-target)

---

## EVENT_AVATAR_PSIONIC_DANGER_SENSE_TARGET

### Описание

```
EVENT_AVATAR_PSIONIC_DANGER_SENSE_TARGET
```

Событие присылается каждый раз, когда псионик определяет, что его поселектил вражеский PC. Для этого он должен использовать способность DangerSense. Уведомляет о том, что вражеский игрок выбрал псионика в качестве цели.

### Список параметров

- **`unitId`** (`ObjectId`) - ID игрока, поселектившего псионика.

### Смотрите также

- [EVENT_AVATAR_PSIONIC_DANGER_SENSE_LOCATED](/api/events/events.EVENT_AVATAR_.md#event-avatar-psionic-danger-sense-located)

---

## EVENT_AVATAR_PSIONIC_READ_THOUGHT

### Описание

```
EVENT_AVATAR_PSIONIC_READ_THOUGHT
```

Событие присылается каждый раз, когда псионик читает мысли другого игрока или NPC. Для этого он должен обладать пассивным умением ReadThoughts. Уведомляет об успешном прочтении мысли.

### Список параметров

- **`unitId`** (`ObjectId`) - ID юнита, у которого прочитали мысль.

- **`thought`** (`WString`) - сама мысль.

### Смотрите также

- [EVENT_AVATAR_PSIONIC_UNREADABLE_THOUGHT](/api/events/events.EVENT_AVATAR_.md#event-avatar-psionic-unreadable-thought)

---

## EVENT_AVATAR_PSIONIC_UNREADABLE_THOUGHT

### Описание

```
EVENT_AVATAR_PSIONIC_UNREADABLE_THOUGHT
```

Событие присылается каждый раз, когда псионик читает мысли другого игрока, но не может их понять (противоположная фракция). Для этого он должен обладать пассивным умением ReadThoughts. Уведомляет о невозможности прочтения мысли из-за принадлежности к противоположной фракции.

### Список параметров

- **`unitId`** (`ObjectId`) - ID юнита, у которого прочитали мысль.

- **`factionName`** (`WString`) - имя фракции того игрока, мысль которого прочитал псионик.

### Смотрите также

- [EVENT_AVATAR_PSIONIC_READ_THOUGHT](/api/events/events.EVENT_AVATAR_.md#event-avatar-psionic-read-thought)

---

## EVENT_AVATAR_STALKER_CARTRIDGE_BELT_CHANGED

### Описание

```
EVENT_AVATAR_STALKER_CARTRIDGE_BELT_CHANGED
```

Событие присылается каждый раз, когда у сталкера (основного игрока) меняется что-либо в колчане. Уведомляет об изменении содержимого колчана сталкера.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [EVENT_AVATAR_STALKER_DAMAGE_POOL_ADDED](/api/events/events.EVENT_AVATAR_.md#event-avatar-stalker-damage-pool-added)

---

## EVENT_AVATAR_STALKER_DAMAGE_POOL_ADDED

### Описание

```
EVENT_AVATAR_STALKER_DAMAGE_POOL_ADDED
```

Событие присылается при появлении барьеров дамага у лучника. Уведомляет о появлении пула урона сталкера.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [avatar.GetStalkerDamagePoolInfo](/api/category/avatar/function.avatar.GetStalkerDamagePoolInfo.md)
- [EVENT_AVATAR_STALKER_DAMAGE_POOL_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-stalker-damage-pool-changed)
- [EVENT_AVATAR_STALKER_DAMAGE_POOL_REMOVED](/api/events/events.EVENT_AVATAR_.md#event-avatar-stalker-damage-pool-removed)

---

## EVENT_AVATAR_STALKER_DAMAGE_POOL_CHANGED

### Описание

```
EVENT_AVATAR_STALKER_DAMAGE_POOL_CHANGED
```

Событие присылается при изменении состояния барьеров дамага у лучника. Уведомляет об изменении состояния пула урона сталкера.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [avatar.GetStalkerDamagePoolInfo](/api/category/avatar/function.avatar.GetStalkerDamagePoolInfo.md)
- [EVENT_AVATAR_STALKER_DAMAGE_POOL_ADDED](/api/events/events.EVENT_AVATAR_.md#event-avatar-stalker-damage-pool-added)
- [EVENT_AVATAR_STALKER_DAMAGE_POOL_REMOVED](/api/events/events.EVENT_AVATAR_.md#event-avatar-stalker-damage-pool-removed)

---

## EVENT_AVATAR_STALKER_DAMAGE_POOL_REMOVED

### Описание

```
EVENT_AVATAR_STALKER_DAMAGE_POOL_REMOVED
```

Событие присылается при исчезновении барьеров дамага у лучника. Уведомляет об исчезновении пула урона сталкера.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [avatar.GetStalkerDamagePoolInfo](/api/category/avatar/function.avatar.GetStalkerDamagePoolInfo.md)
- [EVENT_AVATAR_STALKER_DAMAGE_POOL_ADDED](/api/events/events.EVENT_AVATAR_.md#event-avatar-stalker-damage-pool-added)
- [EVENT_AVATAR_STALKER_DAMAGE_POOL_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-stalker-damage-pool-changed)

---

## EVENT_AVATAR_STATS_CAN_IMPROVE_CHANGED

### Описание

```
EVENT_AVATAR_STATS_CAN_IMPROVE_CHANGED
```

Событие присылается при изменении доступности распределения свободных пунктов врождённых характеристик персонажа.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [avatar.CanImproveInnateStats](/api/category/avatar/function.avatar.CanImproveInnateStats.md)

---

## EVENT_AVATAR_STATS_CHANGED

### Описание

```
EVENT_AVATAR_STATS_CHANGED
```

Событие присылается при изменении характеристик аватара: базовых, брони, сопротивляемости.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [avatar.GetInnateStats](/api/category/avatar/function.avatar.GetInnateStats.md)
- [avatar.GetPower](/api/category/avatar/function.avatar.GetPower.md)

---

## EVENT_AVATAR_TARGET_CHANGED

### Описание

```
EVENT_AVATAR_TARGET_CHANGED
```

Событие приходит при смене таргета игроком. Уведомляет об изменении текущей цели аватара.

### Список параметров

- **`isTargetDead`** (`boolean`| `nil`) - `true`, когда таргет поменялся в результате его смерти, иначе `nil`.

### Смотрите также

- [avatar.GetTarget](/api/category/avatar/function.avatar.GetTarget.md)
- [EVENT_AVATAR_TARGET_TARGET_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-target-target-changed)

---

## EVENT_AVATAR_TARGET_RECOMMENDED

### Описание

```
EVENT_AVATAR_TARGET_RECOMMENDED
```

Событие присылается с рекомендацией сервера об изменении цели аватара на указанную.

### Список параметров

- **`targetId`** (`ObjectId`) - рекомендуемая цель.

### Смотрите также

- [EVENT_AVATAR_TARGET_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-target-changed)

---

## EVENT_AVATAR_TARGET_TARGET_CHANGED

### Описание

```
EVENT_AVATAR_TARGET_TARGET_CHANGED
```

Событие присылается при изменении основной цели основной цели (это не опечатка) аватара. Уведомляет об изменении цели текущей цели аватара.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [EVENT_AVATAR_TARGET_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-target-changed)

---

## EVENT_AVATAR_TRANSPORT_CHANGED

### Описание

```
EVENT_AVATAR_TRANSPORT_CHANGED
```

Событие присылается каждый раз, когда у главного игрока меняется транспортное средство (появляется, исчезает). Уведомляет об изменении активного транспорта главного игрока.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [EVENT_AVATAR_BINDED_TRANSPORT_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-binded-transport-changed)
- [EVENT_TRANSPORT_OBSERVING_STARTED](/api/events/events.EVENT_TRANSPORT_.md#event-transport-observing-started)
- [EVENT_TRANSPORT_OBSERVING_FINISHED](/api/events/events.EVENT_TRANSPORT_.md#event-transport-observing-finished)

---

## EVENT_AVATAR_UNLOCK_ADDED

### Описание

```
EVENT_AVATAR_UNLOCK_ADDED
```

Событие присылается при получении какого-либо анлока главным игроком. Например, может измениться доступность слота для экипировки и т.д. Уведомляет о получении нового анлока.

### Список параметров

- **`unlockId`** (`ObjectId`) - идентификатор анлока.

- **`unlockName`** (`WString`) - название анлока.

- **`unlockEndTime`** (`number`| `nil`) - дата окончания действия анлока, если анлок временный, иначе `nil`.

### Смотрите также

- [EVENT_AVATAR_UNLOCK_REMOVED](/api/events/events.EVENT_AVATAR_.md#event-avatar-unlock-removed)
- [EVENT_AVATAR_UNLOCK_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-unlock-changed)
- [EVENT_AVATAR_UNLOCKS_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-unlocks-changed)

---

## EVENT_AVATAR_UNLOCK_CHANGED

### Описание

```
EVENT_AVATAR_UNLOCK_CHANGED
```

Событие присылается при изменении состояния анлока.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор анлока.

### Смотрите также

- [EVENT_AVATAR_UNLOCK_ADDED](/api/events/events.EVENT_AVATAR_.md#event-avatar-unlock-added)
- [EVENT_AVATAR_UNLOCKS_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-unlocks-changed)

---

## EVENT_AVATAR_UNLOCK_REMOVED

### Описание

```
EVENT_AVATAR_UNLOCK_REMOVED
```

Событие присылается при потере какого-либо анлока главным игроком. Например, может измениться доступность слота для экипировки и т.д. Уведомляет о потере анлока.

### Список параметров

- **`unlockId`** (`ObjectId`) - идентификатор анлока.

- **`unlockName`** (`WString`) - название анлока.

### Смотрите также

- [EVENT_AVATAR_UNLOCK_ADDED](/api/events/events.EVENT_AVATAR_.md#event-avatar-unlock-added)
- [EVENT_AVATAR_UNLOCKS_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-unlocks-changed)

---

## EVENT_AVATAR_UNLOCKS_CHANGED

### Описание

```
EVENT_AVATAR_UNLOCKS_CHANGED
```

Событие присылается при изменении состояний залоченности для аватара. Например, может измениться доступность слота для экипировки и т.д. Уведомляет об общем изменении состояний анлоков аватара.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [EVENT_AVATAR_UNLOCK_ADDED](/api/events/events.EVENT_AVATAR_.md#event-avatar-unlock-added)
- [EVENT_AVATAR_UNLOCK_REMOVED](/api/events/events.EVENT_AVATAR_.md#event-avatar-unlock-removed)
- [EVENT_AVATAR_UNLOCK_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-unlock-changed)

---

## EVENT_AVATAR_USED_OBJECT_CHANGED

### Описание

```
EVENT_AVATAR_USED_OBJECT_CHANGED
```

Событие присылается при смене (получении, потере) используемого устройства. Уведомляет об изменении используемого устройства аватара.

### Список параметров

- **`isActive`** (`boolean`) - `true`, если на момент отправки события аватар использует устройство.

- **`type`** (`number`(`USDEV_...`)| `nil`) - тип используемого устройства или `nil` (если тип не определён или использование устройства прекращено). Значения соответствуют перечислению `USDEV_...`.

### Смотрите также

- [USDEV_*](/api/constants/constants.USDEV.md)

---

## EVENT_AVATAR_WALK_MODE_CHANGED

### Описание

```
EVENT_AVATAR_WALK_MODE_CHANGED
```

Событие присылается при изменении режима движения игрока (шагом/бегом). Уведомляет о смене режима передвижения.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [EVENT_AVATAR_POS_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-pos-changed)

---

## EVENT_AVATAR_WARRIOR_COMBAT_ADVANTAGE_CHANGED

### Описание

```
EVENT_AVATAR_WARRIOR_COMBAT_ADVANTAGE_CHANGED
```

Событие присылается каждый раз, когда у основного игрока-воина (Warrior) меняется боевой дух. Уведомляет об изменении боевого духа воина.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [EVENT_AVATAR_WARRIOR_DAMAGE_POOL_ADDED](/api/events/events.EVENT_AVATAR_.md#event-avatar-warrior-damage-pool-added)

---

## EVENT_AVATAR_WARRIOR_DAMAGE_POOL_ADDED

### Описание

```
EVENT_AVATAR_WARRIOR_DAMAGE_POOL_ADDED
```

Событие присылается при появлении барьера дамага у воина. Уведомляет о появлении пула урона воина.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [avatar.GetWarriorDamagePoolInfo](/api/category/avatar/function.avatar.GetWarriorDamagePoolInfo.md)
- [EVENT_AVATAR_WARRIOR_DAMAGE_POOL_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-warrior-damage-pool-changed)
- [EVENT_AVATAR_WARRIOR_DAMAGE_POOL_REMOVED](/api/events/events.EVENT_AVATAR_.md#event-avatar-warrior-damage-pool-removed)

---

## EVENT_AVATAR_WARRIOR_DAMAGE_POOL_CHANGED

### Описание

```
EVENT_AVATAR_WARRIOR_DAMAGE_POOL_CHANGED
```

Событие присылается при изменении состояния барьера дамага у воина. Уведомляет об изменении состояния пула урона воина.

### Список параметров

- **`value`** (`number`) - текущее значение дамага в барьере воина.

- **`limit`** (`number`) - предельное значение дамага в барьере воина.

### Смотрите также

- [avatar.GetWarriorDamagePoolInfo](/api/category/avatar/function.avatar.GetWarriorDamagePoolInfo.md)
- [EVENT_AVATAR_WARRIOR_DAMAGE_POOL_ADDED](/api/events/events.EVENT_AVATAR_.md#event-avatar-warrior-damage-pool-added)
- [EVENT_AVATAR_WARRIOR_DAMAGE_POOL_REMOVED](/api/events/events.EVENT_AVATAR_.md#event-avatar-warrior-damage-pool-removed)

---

## EVENT_AVATAR_WARRIOR_DAMAGE_POOL_REMOVED

### Описание

```
EVENT_AVATAR_WARRIOR_DAMAGE_POOL_REMOVED
```

Событие присылается при исчезновении барьера дамага у воина. Уведомляет об исчезновении пула урона воина.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [avatar.GetWarriorDamagePoolInfo](/api/category/avatar/function.avatar.GetWarriorDamagePoolInfo.md)
- [EVENT_AVATAR_WARRIOR_DAMAGE_POOL_ADDED](/api/events/events.EVENT_AVATAR_.md#event-avatar-warrior-damage-pool-added)
- [EVENT_AVATAR_WARRIOR_DAMAGE_POOL_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-warrior-damage-pool-changed)

---

## EVENT_AVATAR_WILL_BE_REMOVED

### Описание

```
EVENT_AVATAR_WILL_BE_REMOVED
```

Событие присылается раз в секунду после того, как игрок пытается выйти из миссии (`mission.Logout()`), но находится в бою. В этом случае выход будет отложен на некоторое время. Уведомляет об обратном отсчёте до выхода из миссии во время боя.

### Список параметров

- **`delay`** (`number`) - количество секунд до окончательного выхода из миссии.

### Смотрите также

- [mission.Logout](/api/category/mission/function.mission.Logout.md)
- [mission.CancelLogout](/api/category/mission/function.mission.CancelLogout.md)
- [EVENT_AVATAR_LOGOUT_CANCELLED](/api/events/events.EVENT_AVATAR_.md#event-avatar-logout-cancelled)

---

## EVENT_AVATAR_ZONE_CHANGED

### Описание

```
EVENT_AVATAR_ZONE_CHANGED
```

Событие присылается при переходе персонажа в другую зону. Для более подробного уведомления (но только при наличии UI) следует использовать клиентское `EVENT_AVATAR_CLIENT_ZONE_CHANGED`.

::: warning Замечание
Серверные координаты могут отличаться от клиентских, поэтому клиентская информация о текущей зоне во время прихода этого события может не соответствовать таковой на сервере. В частности, для функции `cartographer.GetCurrentZoneInfo`. Например, возвращаемая этой функцией информация может не меняться при приходе `EVENT_AVATAR_ZONE_CHANGED` и наоборот, её смена не означает, что будет прислано серверное уведомление.
:::

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [EVENT_AVATAR_CLIENT_ZONE_CHANGED](/api/events/events.EVENT_AVATAR_.md#event-avatar-client-zone-changed)
- [cartographer.GetCurrentZoneInfo](/api/category/cartographer/function.cartographer.GetCurrentZoneInfo.md)