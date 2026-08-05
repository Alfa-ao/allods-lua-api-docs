# spellLib.GetValuedObject
Возвращает новый экземпляр `ValuedObject` для заклинания.

## Описание

```lua
spellLib.GetValuedObject( spellId: ObjectId ): ValuedObject
```

Функция возвращает новый экземпляр `ValuedObject` для заклинания. Тип объекта - `VAL_OBJ_TYPE_SPELL`. Текст - имя заклинания. Изображение - иконка заклинания. Поле `Id` - идентификатор ресурса заклинания.

::: warning Замечание
Поскольку `ValuedObject` является `userdata`, Lua работает с такими объектами по ссылке, а не по значению.
:::

## Список параметров

- **`spellId`** (`ObjectId`) - Идентификатор ресурса заклинания.

## Возвращаемые значения

Возвращает `ValuedObject` - экземпляр `ValuedObject` для заклинания.

## Примеры

### Получение объекта заклинания
```lua
local spellId = spellInfo.id
local valuedObject = spellLib.GetValuedObject( spellId )
```

## Смотрите также

- [VAL_OBJ_TYPE_SPELL](/api/constants/constants.VAL_OBJ_TYPE_.md)