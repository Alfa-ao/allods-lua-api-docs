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

- [lfgLib.GetDestinationRequirements](function.lfgLib.GetDestinationRequirements)
- [EVENT_LFG_DESTINATION_AVAILABLE_CHANGED](events#event-lfg-destination-available-changed)