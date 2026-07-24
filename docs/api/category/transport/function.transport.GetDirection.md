# transport.GetDirection
Возвращает величину поворота (yaw) транспортного средства в радианах.

## Описание
```lua
transport.GetDirection( transportId: ObjectId ): number
```
Функция извлекает и возвращает текущий угол поворота (yaw) транспортного средства в радианах.

::: warning Замечание
Если транспорт не найден, функция бросает исключение и возвращает 0.
:::

## Список параметров
- **`transportId`** (`ObjectId`) - Уникальный идентификатор транспортного средства.

## Возвращаемые значения
Возвращает `number` - поворот транспортного средства (yaw) в радианах.

## Примеры
### Получение направления транспортного средства
```lua
local transportId = unit.GetTransport( avatar.GetId() )
if transportId then
    local direction = transport.GetDirection( transportId )
end
```

::: info Описание примера
В примере сначала получается идентификатор транспортного средства, на котором находится главный персонаж. Если транспорт существует, извлекается его текущий угол поворота в радианах.
:::

## Смотрите также
- [unit.GetTransport](../unit/function.unit.GetTransport)
- [avatar.GetId](../avatar/function.avatar.GetId)