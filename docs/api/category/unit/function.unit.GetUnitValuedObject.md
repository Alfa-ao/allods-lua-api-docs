# unit.GetUnitValuedObject

Возвращает новый экземпляр `ValuedObject` по идентификатору существа.

## Описание

```lua
unit.GetUnitValuedObject( unitId: ObjectId ): ValuedObject
```

Функция формирует и возвращает объект типа `VAL_OBJ_TYPE_CREATURE`, где текстом является имя существа, изображение отсутствует, а идентификатором выступает имя существа (`WString`).

::: warning Замечание
Поскольку `ValuedObject` является userdata, Lua работает с ними по ссылке, а не по значению.
:::

## Список параметров

- **`unitId`** (`ObjectId`) - Уникальный идентификатор существа.

## Возвращаемые значения

Возвращает `ValuedObject` - экземпляр `ValuedObject`.

## Примеры

### Получение объекта цели

```lua
local targetId = avatar.GetTarget()
local valuedObject = unit.GetUnitValuedObject( targetId )
```

## Смотрите также

- [avatar.GetTarget](/api/category/avatar/function.avatar.GetTarget.md)