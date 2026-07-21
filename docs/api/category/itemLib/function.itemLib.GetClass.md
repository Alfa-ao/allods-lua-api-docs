# itemLib.GetClass

Возвращает идентификатор класса предмета.

## Описание

```lua
itemLib.GetClass( itemId: ObjectId ): ItemClassId | nil
```

Функция возвращает идентификатор класса предмета в виде userdata из семейства ResourceId. Информацию о полученном классе можно получить с помощью функции `itemLib.GetClassInfo`.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения

Возвращает `ItemClassId` | `nil` - идентификатор класса предмета, userdata из семейства ResourceId, или `nil`, если класс не определен. Информацию из неё можно получить функцией `itemLib.GetClassInfo`.

## Примеры

### Получение информации о классе предмета

```lua
local itemClassId = itemLib.GetClass( itemId )
local itemClassInfo = itemClassId and itemLib.GetClassInfo( itemClassId )
local itemClassName = itemClassInfo and itemClassInfo.name
```

::: info Описание примера
В примере выполняется запрос идентификатора класса предмета. Если идентификатор успешно получен, извлекается подробная информация о классе и его имя. Используется логическое И для безопасного обращения к полям.
:::

## Смотрите также

- [itemLib.GetClassInfo](function.itemLib.GetClassInfo)