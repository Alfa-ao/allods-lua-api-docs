# unit.SetPlayerTitle

Устанавливает текущий титул персонажа.

## Описание

```lua
unit.SetPlayerTitle( unitId: ObjectId, titleId: ObjectId | nil )
```

Установка титула доступна только для собственного персонажа.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор персонажа.

- **`titleId`** (`ObjectId` | `nil`) - Идентификатор титула или `nil` для сброса титула.

## Возвращаемые значения

Возвращает `boolean` - `true` в случае успеха, иначе `false`.

## Примеры

### Установка первого доступного титула

```lua
local titles = unit.GetPlayerTitles( unitId )
if titles then
    unit.SetPlayerTitle( unitId, titles[ 1 ].id )
end
```

::: info Описание примера
В примере сначала запрашивается список доступных титулов персонажа. Если список успешно получен, происходит установка первого титула из полученного списка.
:::

## Смотрите также

- [EVENT_PLAYER_TITLE_CHANGED](/api/events/events.EVENT_PLAYER_.md)
- [unit.GetPlayerTitles](/api/category/unit/function.unit.GetPlayerTitles.md)