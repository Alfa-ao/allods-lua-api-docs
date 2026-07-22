# lfgLib.Depart

Немедленно отправляет участников группы в выбранный пункт назначения.

## Описание

```lua
lfgLib.Depart( destinationId: LfgDestinationId )
```

При этом в некоторые пункты (например, астральные сектора) отправка инициируется только лидером группы и после утверждения отправки всеми участниками группы на совместном голосовании. В остальные пункты игрок отправляется самостоятельно, причем пункт отправки не совпадает с целью подбора группы.

## Список параметров

- **`destinationId`** (`LfgDestinationId`) - идентификатор цели.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Отправка в текущий пункт назначения

```lua
local destinationId = lfgLib.GetCurrentDestination()
if destinationId then
    lfgLib.Depart( destinationId )
end
```

::: info Описание примера
Получается текущий пункт назначения с помощью `lfgLib.GetCurrentDestination`. Если пункт найден, инициируется отправка в него через `lfgLib.Depart`.
:::

## Смотрите также

- [lfgLib.GetCurrentDestination](function.lfgLib.GetCurrentDestination)