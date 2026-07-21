# hangar.SummonShip

Вызывает корабль из ангара по указанному идентификатору.

## Описание

```lua
hangar.SummonShip( shipId: ObjectId )
```

Функция вызывает корабль, находящийся в ангаре, из списка, возвращаемого функцией `hangar.GetShips()`. Для вызова необходимо передать идентификатор целевого корабля.

## Список параметров

- **`shipId`** (`ObjectId`) - Идентификатор корабля, который необходимо вызвать из ангара.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Вызов первого корабля из списка ангара

```lua
local ships = hangar.GetShips()
if ships and ships[0] then
    hangar.SummonShip( ships[0] )
end
```

::: info Описание примера
В примере извлекается список кораблей из ангара посредством вызова `hangar.GetShips()`. При наличии списка и первого корабля в нём производится вызов данного корабля с помощью `hangar.SummonShip()`.
:::

## Смотрите также

- [hangar.GetShips](function.hangar.GetShips)
- [hangar.GetActiveShip](function.hangar.GetActiveShip)
- [hangar.UnsummonShip](function.hangar.UnsummonShip)