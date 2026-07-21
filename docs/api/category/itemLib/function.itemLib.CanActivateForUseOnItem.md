# itemLib.CanActivateForUseOnItem

Проверяет возможность активации предмета для применения на другом предмете.

## Описание

```lua
itemLib.CanActivateForUseOnItem( sourceId: ObjectId ): boolean | nil
```

Функция проверяет возможность активации предмета для применения на другом предмете. Исходный предмет должен обладать свойством `IsUseOnItemAndTakeActions`.

## Список параметров

- **`sourceId`** (`ObjectId`) - Идентификатор активируемого предмета.

## Возвращаемые значения

Возвращает `boolean` | `nil` - `true`, если активация возможна, `false`, если невозможна, `nil` - неопределенность, возникает, когда переданный идентификатор предмета не валиден.

## Примеры

### Проверка возможности активации предмета

```lua
local canActivate = false
if itemLib.IsUseOnItemAndTakeActions( sourceId ) then
    canActivate = itemLib.CanActivateForUseOnItem( sourceId )
end
```

::: info Описание примера
В примере проверяется наличие свойства `IsUseOnItemAndTakeActions` у исходного предмета. Если свойство присутствует, выполняется проверка возможности активации предмета для применения на другом предмете с сохранением результата в локальную переменную.
:::

## Смотрите также

- [avatar.UseItemOnItemAndTakeActions](function.avatar.UseItemOnItemAndTakeActions)
- [itemLib.IsUseOnItemAndTakeActions](function.itemLib.IsUseOnItemAndTakeActions)