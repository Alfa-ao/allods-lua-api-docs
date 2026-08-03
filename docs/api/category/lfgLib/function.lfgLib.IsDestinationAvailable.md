# lfgLib.IsDestinationAvailable

Проверяет возможность отправки игрока в выбранную локацию.

## Описание

```lua
lfgLib.IsDestinationAvailable( destinationId: LfgDestinationId ): boolean
```

Функция проверяет, соблюдены ли все условия для отправки игрока в целевую локацию с заданным идентификатором.

## Список параметров

- **`destinationId`** (`LfgDestinationId`) - Идентификатор целевой локации.

## Возвращаемые значения

Возвращает `boolean` - `true`, если игрок может отправиться в локацию, и `false`, если условия не соблюдены.

## Примеры

### Проверка и отправка в локацию

```lua
if lfgLib.IsDestinationAvailable( destinationId ) then
    lfgLib.Depart( destinationId )
end
```

## Смотрите также

- [lfgLib.GetDestinationRequirements](/api/category/lfgLib/function.lfgLib.GetDestinationRequirements.md)
- [EVENT_LFG_DESTINATION_AVAILABLE_CHANGED](/api/events/events.EVENT_LFG_.md#event-lfg-destination-available-changed)