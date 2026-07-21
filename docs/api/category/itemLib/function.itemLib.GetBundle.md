# itemLib.GetBundle

Возвращает список предметов, входящих в бандл, если указанный предмет является бандлом.

## Описание

```lua
itemLib.GetBundle( itemId: ObjectId ): table | nil
```

Функция возвращает индексированный с 0 список идентификаторов предметов, входящих в состав бандла.

::: warning Замечание
При появлении бандла на клиенте информация о его составе приходит не сразу, а через некоторое время. После изменения приходит событие `EVENT_GAME_ITEM_CHANGED` и соответствующие события об изменениях в слоте контейнера, если предмет находится в контейнере (сумка, экипировка и т.п.).
:::

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения

Возвращает `table` | `nil` - индексированный с 0 список идентификаторов предметов, входящих в бандл, если предмет является бандлом, или `nil`, если предмет не является бандлом.

## Примеры

### Получение первого предмета из бандла

```lua
local bundle = itemLib.GetBundle( itemId )
local firstBundleItemId = bundle and bundle[ 0 ]
if firstBundleItemId then
    local bundleItemInfo = itemLib.GetItemInfo( firstBundleItemId )
    LogInfo( bundleItemInfo.name )
end
```

::: info Описание примера
В примере запрашивается список предметов бандла. Если бандл существует и содержит хотя бы один предмет, извлекается информация о первом предмете с помощью `itemLib.GetItemInfo`, после чего его имя выводится в лог.
:::

## Смотрите также

- [EVENT_GAME_ITEM_CHANGED](events.game#event-game-item-changed)
- [itemLib.GetItemInfo](function.itemLib.GetItemInfo)