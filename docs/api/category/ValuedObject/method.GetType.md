# ValuedObject:GetType

Возвращает тип объекта ValuedObject.

## Описание

```lua
ValuedObject:GetType(): number
```

Функция возвращает тип подставляемого игрового объекта.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `number`(`VAL_OBJ_TYPE_*`) - тип подставляемого игрового объекта.

## Примеры

### Получение типа объекта

```lua
local type = itemValObj:GetType()
```

## Смотрите также

- [ValuedObject](ValuedObject)
- [VAL_OBJ_TYPE_*](VAL_OBJ_TYPE_*)