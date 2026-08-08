# unit.GetPlayerTitles
Возвращает все возможные титулы игрока.

## Описание

```lua
unit.GetPlayerTitles( unitId: ObjectId ): table | nil
```

Функция извлекает и возвращает набор всех возможных титулов игрока.

## Список параметров

- **`unitId`** (`ObjectId`) - идентификатор юнита.

## Возвращаемые значения

Возвращает `table` | `nil` - набор (индексируется с единицы) таблиц с полями:

- **`name`** (`WString`) - титул юнита.

- **`id`** (`ObjectId`) - идентификатор титула.

или `nil`, если получить информацию не удалось.

## Примеры

### Получение и вывод титулов игрока
```lua
local titles = unit.GetPlayerTitles( unitId )
if titles then
    LogInfo( titles )
end
```

## Смотрите также

- [EVENT_PLAYER_TITLE_CHANGED](/api/events/events.EVENT_PLAYER_.md#event-player-title-changed)