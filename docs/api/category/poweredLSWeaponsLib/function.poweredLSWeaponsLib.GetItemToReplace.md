# poweredLSWeaponsLib.GetItemToReplace

Возвращает идентификатор предмета для замены павер-итема на основе класса заменяемого предмета.

## Описание

```lua
poweredLSWeaponsLib.GetItemToReplace( powerItemId: ObjectId, itemClass: ItemClassId ): ObjectId | nil
```

Функция извлекает и возвращает идентификатор предмета, предназначенного для замены указанного павер-итема, в зависимости от класса заменяемого предмета.

## Список параметров

- **`powerItemId`** (`ObjectId`) - Идентификатор павер-итема.

- **`itemClass`** (`ItemClassId`) - Класс заменяемого предмета.

## Возвращаемые значения

Возвращает `ObjectId` | `nil` - идентификатор предмета для замены, если он найден; иначе `nil`.

## Примеры

### Получение предмета для замены

```lua
local itemId = poweredLSWeaponsLib.GetItemToReplace( powerItemId, itemClass )
local itemInfo = itemLib.GetItemInfo( itemId )
```

::: info Описание примера

В примере сначала запрашивается идентификатор предмета для замены с помощью функции `poweredLSWeaponsLib.GetItemToReplace`. Затем по полученному идентификатору извлекается полная информация о предмете через `itemLib.GetItemInfo`.

:::

## Смотрите также

- [itemLib.GetItemInfo](../itemLib/function.itemLib.GetItemInfo)