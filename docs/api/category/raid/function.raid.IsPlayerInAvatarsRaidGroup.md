# raid.IsPlayerInAvatarsRaidGroup

Проверяет, находится ли игрок в той же группе рейда, что и аватар.

## Описание

```lua
raid.IsPlayerInAvatarsRaidGroup( playerName: WString | ObjectId | UniqueId ): boolean
```

Функция проверяет, состоит ли указанный игрок в той же группе рейда, что и главный персонаж.

## Список параметров

- **`playerName`** (`WString` | `ObjectId` | `UniqueId`) - Имя или идентификатор игрока.

## Возвращаемые значения

Возвращает `boolean` - `true`, если игрок находится в той же группе рейда, что и аватар, и `false` в противном случае.

## Примеры

### Проверка нахождения игрока в группе рейда

```lua
local inRaidGroup = raid.IsPlayerInAvatarsRaidGroup( playerName )
```