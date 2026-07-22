# lfgLib.GetDestinationVisits

Возвращает информацию о посещениях локации, относящейся к LFG.

## Описание

```lua
lfgLib.GetDestinationVisits( destinationId: LfgDestinationId ): table | nil
```

Функция извлекает и возвращает детальную информацию о количестве посещений указанной локации системы поиска группы главным игроком за текущий день и неделю, а также задает максимальные лимиты посещений. В случае возникновения ошибки или отсутствия информации возвращается `nil`.

## Список параметров

- **`destinationId`** (`LfgDestinationId`) - Идентификатор целевой локации.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица с информацией о посещениях локации, либо `nil` в случае ошибки.

- **`todayVisits`** (`number` | `nil`) - Количество посещений, совершенных главным игроком за текущий день.
- **`weeklyVisits`** (`number` | `nil`) - Количество посещений, совершенных главным игроком за текущую неделю.
- **`maxVisitsPerDay`** (`number`) - Максимальное количество посещений локации в день. Значение `0` указывает на отсутствие ограничений.
- **`maxVisitsPerWeek`** (`number`) - Максимальное количество посещений локации в неделю. Значение `0` указывает на отсутствие ограничений.

## Примеры

### Получение информации о посещениях текущей локации

```lua
local destinationId = lfgLib.GetCurrentDestination()
if destinationId then
    local destinationsVisits = lfgLib.GetDestinationVisits( destinationId )
end
```

::: info Описание примера
В примере сначала получается идентификатор текущей целевой локации с помощью `lfgLib.GetCurrentDestination()`. Если идентификатор успешно получен, извлекается информация о посещениях этой локации через `lfgLib.GetDestinationVisits()`.
:::

## Смотрите также

- [lfgLib.GetCurrentDestination](function.lfgLib.GetCurrentDestination)