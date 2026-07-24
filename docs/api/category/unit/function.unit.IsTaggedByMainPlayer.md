# unit.IsTaggedByMainPlayer

Проверяет, помечен ли моб главным игроком.

## Описание

```lua
unit.IsTaggedByMainPlayer( unitId: ObjectId ): boolean
```

Функция возвращает `true`, если главный игрок вступил с мобом в бой, и весь лут достанется главному игроку.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор моба.

## Возвращаемые значения

Возвращает `boolean` - `true`, если моб помечен главным игроком.

## Примеры

### Проверка пометки моба

```lua
local isTagged = unit.IsTagged( unitId )
local isTaggedByMainPlayer = unit.IsTaggedByMainPlayer( unitId )
```

::: info Описание примера
В примере сначала запрашивается статус пометки моба через `unit.IsTagged`, после чего проверяется, принадлежит ли пометка конкретно главному игроку с помощью `unit.IsTaggedByMainPlayer`.
:::

## Смотрите также

- [EVENT_UNIT_TAG_CHANGED](EVENT_UNIT_TAG_CHANGED)