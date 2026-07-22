# itemLib.GetValuedObject

Создает и возвращает новый экземпляр ValuedObject по идентификатору предмета.

## Описание

```lua
itemLib.GetValuedObject( itemId: ObjectId ): ValuedObject
```

Функция формирует новый экземпляр ValuedObject для заданного предмета. Возвращаемый объект содержит следующие данные:

- **Тип объекта** - VAL_OBJ_TYPE_ITEM.

- **Текст** - имя предмета.

- **Изображение** - иконка предмета.

- **Id** - Id объекта предмета.

::: warning Замечание
Поскольку ValuedObject является userdata, Lua работает с ними по ссылке, а не по значению.
:::

## Список параметров

- **`itemId`** (`ObjectId`) - Id объекта предмета.

## Возвращаемые значения

Возвращает `ValuedObject` - экземпляр ValuedObject.

## Примеры

### Создание ValuedObject для предмета из инвентаря

```lua
local itemId = inventoryIds[0]
local valuedObject = itemLib.GetValuedObject( itemId )
```