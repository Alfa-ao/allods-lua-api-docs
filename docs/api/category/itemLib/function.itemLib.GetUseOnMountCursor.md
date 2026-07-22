# itemLib.GetUseOnMountCursor
Возвращает алиас курсора для использования на маунте с выполнением кастомных действий.

## Описание
```lua
itemLib.GetUseOnMountCursor( itemId: ObjectId ): string
```
Функция возвращает алиас курсора для использования на маунте с выполнением кастомных действий.

## Список параметров
- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения
Возвращает `string` - алиас курсора.

## Примеры
### Получение и установка курсора
```lua
local cursor = itemLib.GetUseOnMountCursor( itemId )
common.SetCursor( cursor )
```
::: info Описание примера
В примере извлекается алиас курсора для указанного предмета и устанавливается через функцию `common.SetCursor`.
:::

## Смотрите также

- [common.SetCursor](../common/function.common.SetCursor)