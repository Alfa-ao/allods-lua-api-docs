# itemLib.CanCreateAuction

Проверяет возможность выставления предмета на аукцион.

## Описание

```lua
itemLib.CanCreateAuction( itemId: ObjectId ): boolean
```

Функция проверяет, разрешено ли выставление указанного предмета на аукцион.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения

Возвращает `boolean` - `true`, если предмет можно выставить на аукцион.

## Примеры

### Проверка возможности создания аукциона

```lua
local itemCanCreateAuction = itemLib.CanCreateAuction( itemId )
```