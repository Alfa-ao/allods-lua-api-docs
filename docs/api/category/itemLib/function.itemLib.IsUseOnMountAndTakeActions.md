# itemLib.IsUseOnMountAndTakeActions

Проверяет, является ли предмет доступным для использования на ездовом животном с выполнением кастомных действий.

## Описание

```lua
itemLib.IsUseOnMountAndTakeActions( itemId: ObjectId ): boolean
```

Функция выполняет проверку доступности использования предмета на ездовом животном с учетом предикатов и кастомных действий.

## Список параметров

- **`itemId`** (`ObjectId`) - Уникальный идентификатор предмета.

## Возвращаемые значения

Возвращает `boolean` - `true`, если предмет доступен для использования на ездовом животном с выполнением кастомных действий, и `false` в противном случае.

## Примеры

### Проверка доступности использования предмета

```lua
local isUseOnMountAndTakeActions = itemLib.IsUseOnMountAndTakeActions( itemId )
```

## Смотрите также

- [avatar.UseItemOnMountAndTakeActions](../avatar/function.avatar.UseItemOnMountAndTakeActions)
- [itemLib.CanActivateForUseOnMount](function.itemLib.CanActivateForUseOnMount)