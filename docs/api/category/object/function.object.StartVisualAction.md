# object.StartVisualAction

Привязывает визуальный скрипт к интерактивному объекту по индексу.

## Описание

```lua
object.StartVisualAction( objectId: ObjectId, channelIndex: number, visActionId: VisObjectId )
```

Новый визуальный скрипт удаляет имеющийся визуальный скрипт по тому же каналу (с таким же индексом).

::: warning Замечание
Для удобства вместо числовых индексов рекомендуется определять мнемонические константы (задаются самими дизайнерами).
:::

## Список параметров

- **`objectId`** (`ObjectId`) - Идентификатор объекта.

- **`channelIndex`** (`number`(`VIS_ACTION_*`)) - Индекс канала визуального скрипта. В данный момент имеется канал: `VIS_ACTION_NPC_TALK` - управление визуальным скриптом при разговоре с НПС.

- **`visActionId`** (`VisObjectId`) - Идентификатор визуального объекта (эффекта).

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Привязка визуального скрипта к объекту

```lua
local visActionId = common.GetAddonRelatedVisAction( "Talk" )
if visActionId then
    object.StartVisualAction( objectId, VIS_ACTION_NPC_TALK, visActionId )
end
```

::: info Описание примера
Получается идентификатор визуального действия для разговора. Если идентификатор успешно получен, к объекту привязывается визуальный скрипт по каналу `VIS_ACTION_NPC_TALK`.
:::

## Смотрите также

- [VisActionId](VisActionId)