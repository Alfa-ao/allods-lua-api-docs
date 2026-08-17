# raid.IsPlayerInAvatarsRaid

Определяет, находится ли игрок в том же рейде, что и аватар.

[<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-UniqueId) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-UniqueId) <Badge type="warning" text="Process" />

## Описание

```lua
raid.IsPlayerInAvatarsRaid( player: WString | ObjectId | UniqueId ): boolean
```

Функция возвращает статус нахождения указанного игрока в рейде аватара.

## Список параметров

- **`player`** (`WString` | `ObjectId` | `UniqueId`) - Имя или идентификатор игрока.

## Возвращаемые значения

Возвращает `boolean` - Находится ли игрок в том же рейде, что и аватар.

## Примеры

### Проверка нахождения игрока в рейде
```lua
local inRaid = raid.IsPlayerInAvatarsRaid( playerName )
```