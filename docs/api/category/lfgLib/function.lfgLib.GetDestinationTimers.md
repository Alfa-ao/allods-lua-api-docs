# lfgLib.GetDestinationTimers

Возвращает информацию о таймерах активности LFG.

## Описание

```lua
lfgLib.GetDestinationTimers( destinationId: LfgDestinationId ): table | nil
```

Функция возвращает таблицу с информацией о таймерах активности LFG для указанной целевой локации. В случае возникновения ошибки или при передаче некорректного идентификатора возвращается `nil`.

## Список параметров

- **`destinationId`** (`LfgDestinationId`) - Идентификатор целевой локации.

## Возвращаемые значения

Возвращает `table` | `nil`.

- **`groupQueueTime`** (`number`) - Базовое время (в миллисекундах), отведенное на сбор группы.

- **`timeForDepart`** (`number`) - Фактическое время (в миллисекундах) до предложения отправки группы (даже в неполном составе).

- **`groupStabilizationTime`** (`number`) - Базовое время (в миллисекундах) нахождения собранной группы в LFG до её выкидывания.

## Примеры

### Получение таймеров текущей активности

```lua
local destinationId = lfgLib.GetCurrentDestination()
if destinationId then
    local destinationsTimers = lfgLib.GetDestinationTimers( destinationId )
end
```

::: info Описание примера
В примере сначала извлекается идентификатор текущей целевой локации. Если идентификатор успешно получен, запрашивается информация о таймерах для данной локации.
:::

## Смотрите также

- [lfgLib.GetCurrentDestination](function.lfgLib.GetCurrentDestination)