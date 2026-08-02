# itemLib.CanUseOnMount
Проверяет возможность применения предмета на маунте.

## Описание

```lua
itemLib.CanUseOnMount( itemId: ObjectId, mountId: ObjectId ): boolean | nil
```

Функция возвращает результат проверки возможности применения предмета на маунте.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета, который применяется.

- **`mountId`** (`ObjectId`) - Идентификатор маунта, на котором применяется предмет.

## Возвращаемые значения

Возвращает `boolean` | `nil` - `true`, если применение возможно, `false`, если невозможно.

## Примеры

### Проверка возможности применения предмета на маунте
```lua
if itemLib.CanUseOnMount( itemId, mountId ) then
    avatar.UseOnMountAndTakeActions( itemId, mountId )
end
```

## Смотрите также

- [avatar.UseItemOnMountAndTakeActions](/api/category/avatar/function.avatar.UseItemOnMountAndTakeActions.md)
- [itemLib.IsUseOnMountAndTakeActions](/api/category/itemLib/function.itemLib.IsUseOnMountAndTakeActions.md)
- [itemLib.CanActivateForUseOnMount](/api/category/itemLib/function.itemLib.CanActivateForUseOnMount.md)