# transport.GetAcceleratorNominalMass

Возвращает номинальную массу транспортного средства для двигателя.

## Описание

```lua
transport.GetAcceleratorNominalMass( transportId: ObjectId ): number | nil
```

Если масса транспортного средства больше номинальной, двигатель будет перегружен. Если транспорт или двигатель не найден, функция возвращает `nil`. Отсутствие двигателя допустимо, однако при отсутствии транспорта будет брошено исключение.

## Список параметров

- **`transportId`** (`ObjectId`) - Идентификатор транспортного средства.

## Возвращаемые значения

Возвращает `number` | `nil` - Номинальная масса транспортного средства, которую способен тянуть двигатель, если эта информация доступна.

## Примеры

### Получение номинальной массы

```lua
local transportId = unit.GetTransport( avatar.GetId() )
if transportId then
    local nominalMass = transport.GetAcceleratorNominalMass( transportId )
end
```

::: info Описание примера
В примере сначала получается идентификатор транспортного средства с помощью функций `unit.GetTransport` и `avatar.GetId`. Если транспортное средство найдено, вызывается функция `transport.GetAcceleratorNominalMass` для получения номинальной массы.
:::

## Смотрите также
- [unit.GetTransport](../unit/function.unit.GetTransport)
- [avatar.GetId](../avatar/function.avatar.GetId)