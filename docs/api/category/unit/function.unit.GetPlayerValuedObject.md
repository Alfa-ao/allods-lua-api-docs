# unit.GetPlayerTitle

Возвращает титул игрока.

## Описание

```lua
unit.GetPlayerTitle( unitId: ObjectId ): table | nil
```

Функция извлекает и возвращает информацию о титуле игрока по идентификатору юнита. Если получить информацию не удалось, возвращается `nil`.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор юнита. Не может быть `nil`.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица с информацией о титуле юнита или `nil`, если информация недоступна.

- **`name`** (`WString`) - Титул юнита.

- **`id`** (`ObjectId`) - Идентификатор титула.

## Примеры

### Получение и вывод титула игрока

```lua
local title = unit.GetPlayerTitle( unitId )
if title then
    LogInfo( title.name )
end
```

## Смотрите также

- [EVENT_PLAYER_TITLE_CHANGED](../events#event-player-title-changed)