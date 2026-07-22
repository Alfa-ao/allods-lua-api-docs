# itemLib.IsCursed

Показывает, проклят ли предмет.

## Описание

```lua
itemLib.IsCursed( itemId: ObjectId ): boolean
```

Функция возвращает признак наличия проклятия у предмета.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения

Возвращает `boolean` - `true`, если предмет проклят.

## Примеры

### Проверка предмета на проклятие

```lua
local itemIsCursed = itemLib.IsCursed( itemId )
```