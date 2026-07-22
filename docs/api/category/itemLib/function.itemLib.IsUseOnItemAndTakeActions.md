# itemLib.IsUseOnItemAndTakeActions
Определяет пригодность предмета для использования на другой предмет с проверкой предикатов и выполнением кастомных действий.

## Описание
```lua
itemLib.IsUseOnItemAndTakeActions( itemId: ObjectId, count: number ): boolean
```
Функция проверяет возможность использования предмета на другой предмет с учетом заданного количества, наборов предикатов и выполнения кастомных действий.

## Список параметров
- **`itemId`** (`ObjectId`) - идентификатор предмета.

- **`count`** (`number`) - количество предметов, используемых из стека (по умолчанию - 1).

## Возвращаемые значения
Возвращает `boolean` - true, если это предмет для использования на другие предметы с выполнением кастомных действий.

## Примеры
### Проверка предмета
```lua
local isUseOnItemAndTakeActions = itemLib.IsUseOnItemAndTakeActions( itemId, 3 )
```

## Смотрите также
- [avatar.UseItemOnItemAndTakeActions](function.avatar.UseItemOnItemAndTakeActions)
- [itemLib.CanActivateForUseOnItem](function.itemLib.CanActivateForUseOnItem)