# unit.IsTagged

Проверяет, помечен ли моб каким-либо игроком.

## Описание

```lua
unit.IsTagged( unitId: ObjectId ): boolean
```

Функция возвращает статус пометки моба, что означает вступление игрока в бой с данным мобом и получение всего лута этим игроком.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор моба.

## Возвращаемые значения

Возвращает `boolean` - `true`, если моб помечен каким-либо игроком.

## Примеры

### Проверка статуса пометки моба

```lua
local isTagged = unit.IsTagged( unitId )
local isTaggedByMainPlayer = unit.IsTaggedByMainPlayer( unitId )
```

## Смотрите также

- [EVENT_UNIT_TAG_CHANGED](events.unit#event-unit-tag-changed)
- [unit.IsTaggedByMainPlayer](function.unit.IsTaggedByMainPlayer)