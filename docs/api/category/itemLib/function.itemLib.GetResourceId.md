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
- [ResourceId](ResourceId)
- [ResourceId:IsEqual](ResourceId:IsEqual)
- [ResourceId:GetInfo](ResourceId:GetInfo)