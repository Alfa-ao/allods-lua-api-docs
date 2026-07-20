# group.GetMemberInfo

Возвращает информацию о члене группы, включая главного игрока.

## Описание

```lua
group.GetMemberInfo( id: WString | UniqueId | ObjectId ): table | nil
```

Функция извлекает и возвращает информацию о члене группы, включая главного игрока. Если информация отсутствует, функция возвращает `nil`.

::: warning Замечание
При поиске по нику (`WString`) возможна коллизия на межсерверных активностях.
:::

## Список параметров

- **`id`** (`WString` | `UniqueId` | `ObjectId`) - Идентификатор игрока.

## Возвращаемые значения

Возвращает `table` или `nil`.

- **`name`** (`WString`) - Имя персонажа.

- **`state`** (`number` | `GROUP_MEMBER_STATE`) - Состояние персонажа.

- **`isInCombat`** (`boolean`) - Флаг нахождения игрока в бою.

- **`id`** (`ObjectId` | `nil`) - Идентификатор персонажа. Значение `nil` возвращается, если персонажа нет поблизости.

- **`uniqueId`** (`UniqueId`) - Постоянный идентификатор персонажа.

- **`level`** (`number` | `nil`) - Уровень игрока. Значение `nil` возвращается, если уровень не известен.

- **`className`** (`string` | `nil`) - Системное название класса игрока.

- **`classLocalName`** (`WString` | `nil`) - Лорное название класса игрока.

## Примеры

### Получение информации о члене группы

```lua
local memberInfo = group.GetMemberInfo( memberId )
```

## Смотрите также

- [GROUP_MEMBER_STATE](enumerations.group#group_member_state)
- [raid.GetMemberInfo](function.raid.GetMemberInfo)
- [group.GetMembers](function.group.GetMembers)