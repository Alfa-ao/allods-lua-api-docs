# unit.GetReputationLevel

Возвращает текущий уровень репутации с мобом.

## Описание

```lua
unit.GetReputationLevel( mobId: ObjectId ): number
```

Функция возвращает текущий уровень репутации с указанным мобом.

## Список параметров

- **`mobId`** (`ObjectId`) - Идентификатор моба.

## Возвращаемые значения

Возвращает `number` - текущий уровень репутации.

## Примеры

### Получение уровня репутации

```lua
local level = unit.GetReputationLevel( mobId )
```

## Смотрите также

- [REPUTATION_LEVEL_*](../constants#reputation-level)