# itemLib.CanActivateForUseOnMount
Проверяет возможность активации предмета для применения на маунте.

## Описание
```lua
itemLib.CanActivateForUseOnMount( itemId: ObjectId ): boolean|nil
```
Функция проверяет возможность активации предмета для применения на маунте. Исходный предмет должен обладать свойством `IsUseOnMountAndTakeActions`.

## Список параметров
- **`itemId`** (`ObjectId`) - Идентификатор активируемого предмета.

## Возвращаемые значения
Возвращает `boolean` | `nil` - `true`, если активация возможна, `false`, если невозможна, `nil` - в случае возникновения ошибки.

## Примеры
### Проверка возможности активации предмета
```lua
local canActivate = false
if itemLib.IsUseOnMountAndTakeActions( itemId ) then
    canActivate = itemLib.CanActivateForUseOnMount( itemId )
end
```
::: info Описание примера
В примере проверяется наличие у предмета свойства `IsUseOnMountAndTakeActions`, после чего выполняется проверка возможности его активации для применения на маунте.
:::

## Смотрите также
- [avatar.UseItemOnMountAndTakeActions](function.avatar.UseItemOnMountAndTakeActions)
- [itemLib.IsUseOnMountAndTakeActions](function.itemLib.IsUseOnMountAndTakeActions)