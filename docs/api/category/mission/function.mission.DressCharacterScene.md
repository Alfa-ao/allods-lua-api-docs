# mission.DressCharacterScene

Примеривает вещь на модели персонажа в указанной сцене.

## Описание

```lua
mission.DressCharacterScene( index: number, items: table | nil )
```

Примерка вещей доступна только для главного и инспектируемого игрока. Допускается примерка только одной вещи. Для сброса примерки передается `nil` в качестве идентификатора.

## Список параметров

- **`index`** (`number`) - Индекс сцены, от `0` до `GetMaxCharacterSceneCount() - 1`.

- **`items`** (`table` | `nil`) - Индексированная с `0` таблица идентификаторов вещей (`ObjectId`). При передаче `nil` примерка сбрасывается.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Примерка предмета

```lua
local itemMallItemInfo = avatar.GetItemInfo( itemMallItemId )
if itemMallItemInfo then
    mission.DressCharacterScene( 0, { itemMallItemInfo.itemId } )
end
```

::: info Описание примера
В примере запрашивается информация о предмете. Если предмет существует, его идентификатор передается в функцию для примерки в нулевую сцену.
:::

## Смотрите также

- [avatar.GetItemInfo](function.avatar.GetItemInfo)
- [GetMaxCharacterSceneCount](function.GetMaxCharacterSceneCount)