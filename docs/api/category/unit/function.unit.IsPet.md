# unit.IsPet

Возвращает `true`, если указанный юнит является петом.

## Описание

```lua
unit.IsPet( unitId: ObjectId ): boolean
```

Функция возвращает `true`, если указанный юнит является чьим-либо петом.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор юнита.

## Возвращаемые значения

Возвращает `boolean` - `true`, если указанный юнит является петом.

## Примеры

### Проверка, является ли юнит петом

```lua
local petId = unit.GetActivePet( unitId )
local isPet = unit.IsPet( petId )
```

## Смотрите также

- [unit.GetActivePet](/api/category/unit/function.unit.GetActivePet.md)