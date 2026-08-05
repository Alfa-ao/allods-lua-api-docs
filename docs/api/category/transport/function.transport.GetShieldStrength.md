# transport.GetShieldStrength

Возвращает информацию о силе щита транспортного средства по заданной стороне.

## Описание

```lua
transport.GetShieldStrength( transportId: ObjectId, side: number ): table
```

Извлечение информации о силе щита транспортного средства по заданной стороне. Сила представлена парой значений: текущим и максимальным. Если транспортное средство не найдено, функция бросает исключение и возвращает таблицу со значениями 0/0.

## Список параметров

- **`transportId`** (`ObjectId`) - Идентификатор транспортного средства.

- **`side`** (`number`(`SHIP_SIDE_*`)) - Сторона транспортного средства.

## Возвращаемые значения

Возвращает `table` - таблицу, содержащую информацию о силе щита:

- **`value`** (`number`) - Сила щита.

- **`maxValue`** (`number`) - Максимальная сила щита.

## Примеры

### Получение прочности щита транспорта

```lua
local transportId = unit.GetTransport( avatar.GetId() )
if transportId then
    local strength = transport.GetShieldStrength( transportId, SHIP_SIDE_FRONT )
    LogInfo( strength.value, " / ", strength.maxValue )
end
```

::: info Описание примера
Получение идентификатора транспорта игрока и вывод текущего и максимального значения прочности лобового щита.
:::

## Смотрите также

- [SHIP_SIDE_*](/api/constants/constants.SHIP_SIDE.md)
- [unit.GetTransport](/api/category/unit/function.unit.GetTransport.md)
- [avatar.GetId](/api/category/avatar/function.avatar.GetId.md)