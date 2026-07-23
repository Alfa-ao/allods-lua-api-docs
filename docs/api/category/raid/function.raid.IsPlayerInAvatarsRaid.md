# raid.IsPlayerInAvatarsRaid
Определяет, находится ли игрок в том же рейде, что и аватар.

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