# unit.Select

Выделяет юнит заданным декалом и цветом типа Color.

## Описание

```lua
unit.Select( unitId: ObjectId, visible: boolean, decalId: DecalObjectId, color: Color | nil, thickness: float | nil )
```

Функция выделяет юнит заданным декалом и цветом типа `Color`.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор юнита.

- **`visible`** (`boolean`) - Определяет, показать или убрать выделение.

- **`decalId`** (`DecalObjectId`) - Идентификатор декала.

- **`color`** (`Color` | `nil`) - Цвет выделения.

- **`thickness`** (`float` | `nil`) - Толщина выделения.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Управление выделением юнита

```lua
local color = { r = 1, g = 1, b = 1, a = 0 }
unit.Select( unitId, true, decalId, color, 2 )

unit.Select( unitId, false, nil, nil, nil )
```

## Смотрите также

- [Color](/api/types/LuaApi.md)