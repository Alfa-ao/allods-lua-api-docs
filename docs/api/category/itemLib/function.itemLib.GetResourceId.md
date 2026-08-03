# itemLib.GetResourceId
Возвращает идентификатор ресурса предмета.

## Описание

```lua
itemLib.GetResourceId( itemId: ObjectId ): ItemId
```

Функция возвращает идентификатор ресурса предмета.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения

Возвращает `ItemId` - идентификатор ресурса предмета (ResourceId).

## Примеры

### Получение идентификатора ресурса

```lua
local resourceId = itemLib.GetResourceId( itemId )
```

## Смотрите также

- [ResourceId](/api/category/ResourceId/index.md)
- [ResourceId:IsEqual](/api/category/ResourceId/method.IsEqual.md)
- [ResourceId:GetInfo](/api/category/ResourceId/method.GetInfo.md)