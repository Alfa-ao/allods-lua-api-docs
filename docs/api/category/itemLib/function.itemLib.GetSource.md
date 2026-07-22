# itemLib.GetSource

Возвращает происхождение предмета.

## Описание

```lua
itemLib.GetSource( itemId: ObjectId ): string | nil
```

Определяет источник получения предмета по его идентификатору.

## Список параметров

- **`itemId`** (`ObjectId`) - Уникальный идентификатор предмета.

## Возвращаемые значения

Возвращает `string`(`ENUM_ItemSource_*`) | `nil` - источник получения предмета, или `nil`, если предмет не найден.

## Примеры

### Получение источника предмета

```lua
local itemSource = itemLib.GetSource( itemId )
```

## Смотрите также

- [ENUM_ItemSource_*](../constants#enum-itemsource)