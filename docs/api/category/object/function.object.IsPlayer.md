---
description: Возвращает true, если указанный объект является игроком.
---

# object.IsPlayer

Проверяет интерактивный объект как игрока.

## Описание

```lua
object.IsPlayer( objectId: ObjectId ): boolean
```

Если объект не существует или не является `InteractiveObject` (юниты, девайсы, транспорты и т. п.), функция вызывает ошибку.

## Список параметров

- **`objectId`** `(ObjectId)` - идентификатор объекта.

## Возвращаемые значения

Возвращает `boolean` - `true`, если объект является игроком; `false`, если объект не является игроком.

## Примеры

### Проверка объекта на игрока

```lua
local isPlayer = object.IsPlayer( objectId )
```

## Смотрите также

- [object.IsUnit](/api/category/object/function.object.IsUnit.md)