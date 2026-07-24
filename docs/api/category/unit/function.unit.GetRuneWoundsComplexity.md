# unit.GetRuneWoundsComplexity

Возвращает информацию о рунической сложности ран юнита.

## Описание

```lua
unit.GetRuneWoundsComplexity( unitId: ObjectId ): number
```

Функция возвращает числовое значение рунической сложности ран юнита.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор юнита.

## Возвращаемые значения

Возвращает `number` - руническая сложность ран юнита.

## Примеры

### Базовый вызов

```lua
local complexity = unit.GetRuneWoundsComplexity( unitId )
```