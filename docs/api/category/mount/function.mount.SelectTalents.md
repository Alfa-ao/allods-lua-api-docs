# mount.SelectTalents
Выбирает таланты для указанного маунта, если они доступны.

## Описание
```lua
mount.SelectTalents( mountId: ObjectId, talents: table )
```
Функция отправляет запрос на выбор и применение талантов для маунта с заданным идентификатором. Таланты передаются в виде таблицы, где ключом выступает номер слота, а значением — идентификатор ресурса таланта. В случае успешного выполнения запроса сервером, клиенту передается событие `EVENT_STABLE_MOUNT_TALENTS_CHANGED`.

::: warning Замечание
При выборе талантов необходимо соблюдать следующие ограничения:
1. Таланты должны быть выбраны исключительно из списка доступных, получаемого через `mount.GetAvailableTalents( mountId )`.
2. Количество выбираемых талантов должно строго соответствовать числу доступных слотов талантов.
3. Один и тот же талант не может быть назначен в несколько слотов одновременно.
:::

## Список параметров
- **`mountId`** (`ObjectId`)
Уникальный идентификатор маунта, для которого производится выбор талантов.

- **`talents`** (`table`)
Таблица выбранных талантов. Ключом является номер слота (индексация начинается с 1), а значением — идентификатор ресурса таланта (`MountTalentId`) или `nil`, если слот необходимо очистить.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Выбор всех доступных талантов для экзо-маунта
```lua
local exoMountId = mount.GetExoMount()
local availableTalents = mount.GetAvailableTalents( exoMountId )
local talents = {}

for slotIndex, slotTalents in ipairs( availableTalents ) do
	talents[slotIndex] = slotTalents[1]
end

mount.SelectTalents( exoMountId, talents )
```
::: info Описание примера
В примере сначала получается идентификатор текущего экзо-маунта через `mount.GetExoMount()`. Затем запрашивается список доступных талантов с помощью `mount.GetAvailableTalents()`. Формируется таблица `talents`, в которую записываются первые доступные таланты для каждого слота. После формирования таблицы вызывается `mount.SelectTalents()` для применения выбранных талантов.
:::

## Смотрите также
- [mount.GetExoMount](mount.GetExoMount)
- [mount.GetSelectedTalents](mount.GetSelectedTalents)
- [mount.GetAvailableTalents](mount.GetAvailableTalents)
- [EVENT_STABLE_MOUNT_TALENTS_CHANGED](events.mount#event-stable-mount-talents-changed)