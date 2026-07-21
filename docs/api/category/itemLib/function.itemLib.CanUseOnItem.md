# itemLib.CanUseOnItem

Проверяет возможность применения одного предмета на другом.

## Описание

```lua
itemLib.CanUseOnItem( sourceId: ObjectId, targerId: ObjectId ): boolean | nil
```

Функция выполняет проверку возможности применения одного предмета на другом.

## Список параметров

- **`sourceId`** (`ObjectId`) - Идентификатор предмета, который используют.

- **`targerId`** (`ObjectId`) - Идентификатор предмета, на котором используют.

## Возвращаемые значения

Возвращает `boolean` | `nil` - `true`, если применение возможно, `false`, если невозможно, `nil` - неопределенность, возникает когда у используемого предмета отсутствуют специальные предикаты.

## Примеры

### Проверка возможности применения предмета

```lua
if itemLib.CanUseOnItem( sourceId, targerId ) then
    avatar.UseOnItemAndTakeActions( sourceId, targerId )
end
```

## Смотрите также

- [avatar.UseItemOnItemAndTakeActions](function.avatar.UseItemOnItemAndTakeActions)
- [itemLib.IsUseOnItemAndTakeActions](function.itemLib.IsUseOnItemAndTakeActions)
- [itemLib.CanActivateForUseOnItem](function.itemLib.CanActivateForUseOnItem)