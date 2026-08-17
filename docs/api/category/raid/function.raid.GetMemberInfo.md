# raid.GetMemberInfo

Возвращает информацию о члене рейда.

[<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-UniqueId) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-UniqueId) <Badge type="warning" text="Process" />

## Описание

```lua
raid.GetMemberInfo( memberId: WString | UniqueId | ObjectId ): table
```

Функция извлекает и возвращает таблицу с информацией о персонаже.

::: warning Замечание
При поиске по нику (`WString`) возможна коллизия на межсерверных активностях.
:::

## Список параметров

- **`memberId`** (`WString` | `UniqueId` | `ObjectId`) - идентификатор персонажа.

## Возвращаемые значения

Возвращает `table` - таблица с информацией о персонаже, содержащая следующие поля:

- **`id`** (`ObjectId` | `nil`) - идентификатор персонажа или `nil`, если его нет в игре (порвалась связь и т.п.).

- **`uniqueId`** (`UniqueId` | `nil`) - `nil`, если нет информации; иначе уникальный постоянный идентификатор персонажа (равен параметру `memberId`).

- **`name`** (`WString`) - имя персонажа.

- **`className`** (`string`) - системное название класса игрока (нелокализуемое).

- **`classLocalName`** (`WString`) - лорное название класса игрока (локализуемое).

- **`level`** (`number` | `nil`) - уровень игрока или `nil`, если он не известен в данный момент.

- **`state`** (`number`(`RAID_MEMBER_STATE_*`)) - состояние игрока.

- **`isInCombat`** (`boolean`) - если `true`, то игрок в бою.

## Примеры

### Получение информации о члене рейда

```lua
local member = raid.GetMemberInfo( memberId )
```

## Смотрите также

- [RAID_MEMBER_STATE_*](/api/constants/constants.RAID_MEMBER_STATE.md)
- [raid.GetMembers](/api/category/raid/function.raid.GetMembers.md)