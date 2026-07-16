# mount.GetAvailableTalents
Возвращает список доступных для выбора талантов маунта.

## Описание
```lua
mount.GetAvailableTalents( mountId: ObjectId ): table | nil
```
Функция возвращает список слотов под таланты указанного маунта. Список доступных талантов может изменяться при изменении анлоков аватара, при этом передается событие `EVENT_AVATAR_UNLOCKS_CHANGED`.

## Список параметров
- **`mountId`** (`ObjectId`)
Идентификатор маунта.

## Возвращаемые значения
Возвращает `table` или `nil`.
Таблица содержит список слотов под таланты (индексация с 1). Каждая ячейка представляет собой таблицу со следующими полями:
- `name` (`WString` | `nil`) — название.
- `description` (`WString` | `nil`) — описание.
- `hasCustomRank` (`boolean`) — `true`, если таланты для данного слота имеют ранги.
- `talents` (`table`) — список доступных для данного слота талантов (индексация с 1), элементы имеют тип `MountTalentId`.

## Примеры
### Получение и выбор талантов для экзо-маунта
```lua
local exoMountId = mount.GetExoMount()
local availableTalents = mount.GetAvailableTalents( exoMountId )
local selectTalents = {}

for slotIndex, slot in ipairs( availableTalents ) do
    selectTalents[ slotIndex ] = slot.talents[ 1 ]
end
```
::: info Описание примера
В примере получается идентификатор экзо-маунта с помощью `mount.GetExoMount`. Затем запрашивается список доступных слотов талантов через `mount.GetAvailableTalents`. В цикле перебираются все слоты, и для каждого выбирается первый доступный талант, который сохраняется в таблицу `selectTalents`.
:::

## Смотрите также
- [mount.GetExoMount](mount.GetExoMount)
- [mount.SelectTalents](mount.SelectTalents)
- `EVENT_AVATAR_UNLOCKS_CHANGED`
- `MountTalentId`