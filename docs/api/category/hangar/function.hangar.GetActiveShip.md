# hangar.GetActiveShip

Возвращает идентификатор активного корабля главного игрока.

## Описание

```lua
hangar.GetActiveShip(): ObjectId | nil
```

Функция возвращает идентификатор активного корабля главного игрока или `nil`, если активный корабль отсутствует.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `ObjectId | nil` - идентификатор активного корабля. Если активный корабль отсутствует, возвращается `nil`.

## Примеры

### Получение информации об активном корабле

```lua
local shipId = hangar.GetActiveShip()
if shipId then
    local activeShipInfo = hangar.GetShipInfo( shipId )
end
```

::: info Описание примера
В примере сначала запрашивается идентификатор активного корабля. Если корабль существует, извлекается подробная информация о нем с помощью функции `hangar.GetShipInfo`.
:::

## Смотрите также

- [hangar.SummonShip](function.hangar.SummonShip)
- [hangar.GetShips](function.hangar.GetShips)
- [EVENT_HANGAR_ACTIVE_SHIP_CHANGED](events.hangar#event_hangar_active_ship_changed)