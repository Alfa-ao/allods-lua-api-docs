# itemLib.CanActivateForUseItem
Проверяет возможность активации предмета для применения на другом предмете.

## Описание
```lua
itemLib.CanActivateForUseItem( sourceId: ObjectId ): boolean | nil
```
Функция проверяет, можно ли активировать исходный предмет для применения на другом предмете. Исходный предмет должен обладать свойством `IsUseItemAndTakeActions`.

## Список параметров
- **`sourceId`** (`ObjectId`) - Идентификатор активируемого предмета.

## Возвращаемые значения
Возвращает `boolean` | `nil` - `true`, если активация возможна, `false`, если невозможна, `nil` - неопределенность, возникающая когда переданный идентификатор предмета не валиден.

## Примеры
### Проверка возможности активации предмета
```lua
local canActivate = false
if itemLib.IsUseItemAndTakeActions( sourceId ) then
    canActivate = itemLib.CanActivateForUseItem( sourceId )
end
```
::: info Описание примера
В примере сначала проверяется, обладает ли предмет свойством `IsUseItemAndTakeActions`. Если условие выполняется, производится проверка возможности активации предмета для применения на другом предмете с сохранением результата в локальную переменную.
:::

## Смотрите также
- [avatar.UseItemAndTakeActions](function.avatar.UseItemAndTakeActions)
- [itemLib.IsUseItemAndTakeActions](function.itemLib.IsUseItemAndTakeActions)