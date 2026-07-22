# lfgLib.IsDepartAvailable

Проверяет, выполнены ли все условия для отправки игрока в выбранную локацию.

## Описание

```lua
lfgLib.IsDepartAvailable( destinationId: LfgDestinationId ): boolean
```

Функция выполняет проверку предикатов, определяющих возможность отправки главного персонажа в указанную локацию.

## Список параметров

- **`destinationId`** (`LfgDestinationId`) - Идентификатор целевой локации.

## Возвращаемые значения

Возвращает `boolean` - `true`, если все условия для отправки соблюдены, и `false` в противном случае.

## Примеры

### Проверка и отправка в локацию

```lua
if lfgLib.IsDepartAvailable( destinationId ) then
    lfgLib.Depart( destinationId )
end
```

::: info Описание примера
В примере проверяется возможность отправки в локацию. Если условия соблюдены, инициируется процесс отправки с помощью функции `lfgLib.Depart`.
:::

## Смотрите также

- [lfgLib.GetDestinationRequirements](function.lfgLib.GetDestinationRequirements)
- [EVENT_LFG_DESTINATION_AVAILABLE_CHANGED](events.lfg#event_lfg_destination_available_changed)