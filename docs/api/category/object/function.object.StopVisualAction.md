# object.StopVisualAction

Останавливает визуальный скрипт на интерактивном объекте в определенном канале.

## Описание

```lua
object.StopVisualAction( objectId: ObjectId, channelIndex: number )
```

Функция останавливает визуальный скрипт на интерактивном объекте в определенном канале.

## Список параметров

- **`objectId`** (`ObjectId`) - Идентификатор объекта.

- **`channelIndex`** (`number`(`VIS_ACTION_*`)) - Индекс канала визуального скрипта.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Остановка визуального скрипта

```lua
object.StopVisualAction( objectId, VIS_ACTION_NPC_TALK )
```

## Смотрите также

- [VisActionId](../constants#visactionid)
- [VIS_ACTION_*](../constants#vis-action)