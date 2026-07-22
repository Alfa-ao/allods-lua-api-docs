# lfgLib.GetCurrentDestination

Возвращает текущую цель подбора группы.

## Описание

```lua
lfgLib.GetCurrentDestination(): LfgDestinationId | nil
```

Функция возвращает идентификатор текущей цели подбора группы.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `LfgDestinationId` | `nil` - идентификатор текущей цели подбора группы.

## Примеры

### Получение и использование текущей цели подбора

```lua
local destinationId = lfgLib.GetCurrentDestination()
if destinationId then
    lfgLib.Depart( destinationId )
end
```

::: info Описание примера
В примере запрашивается идентификатор текущей цели подбора группы. Если цель успешно получена, выполняется отправление в подземелье с помощью функции `lfgLib.Depart`.
:::

## Смотрите также

- [lfgLib.Depart](function.lfgLib.Depart)