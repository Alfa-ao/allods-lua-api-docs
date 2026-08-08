# unit.GetTransport

Возвращает идентификатор транспортного средства, на котором находится юнит.

## Описание

```lua
unit.GetTransport( unitId: ObjectId ): ObjectId | nil
```

Функция возвращает идентификатор транспортного средства, на котором находится указанный юнит. Если юнит не находится на транспорте или транспорт не найден, функция возвращает `nil`.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор юнита.

## Возвращаемые значения

Возвращает `ObjectId` | `nil` - идентификатор транспортного средства, на котором находится юнит, или `nil`, если юнит не находится на транспорте или транспорт не найден.

## Примеры

### Получение идентификатора транспорта главного персонажа

```lua
local transportId = unit.GetTransport( avatar.GetId() )
if transportId then
    local energy = transport.GetEnergy( transportId )
end
```

::: info Описание примера
Выполняется получение идентификатора транспортного средства, на котором находится главный персонаж. Если транспорт найден (значение не `nil`), запрашивается уровень энергии транспорта с помощью функции `transport.GetEnergy`.
:::

## Смотрите также

- [avatar.GetId](/api/category/avatar/function.avatar.GetId.md)
- [transport.GetEnergy](/api/category/transport/function.transport.GetEnergy.md)