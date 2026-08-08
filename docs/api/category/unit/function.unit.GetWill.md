# unit.GetWill

Возвращает количество Воли, накопленное у юнита.

## Описание

```lua
unit.GetWill( unitId: ObjectId ): number
```

Функция возвращает количество Воли, накопленное у юнита. При изменении этой величины приходит событие `EVENT_UNIT_WILL_CHANGED`.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор юнита.

## Возвращаемые значения

Возвращает `number` - количество Воли, от 0 до 100.

## Примеры

### Получение количества Воли

```lua
local will = unit.GetWill( unitId )
```

## Смотрите также

- [EVENT_UNIT_WILL_CHANGED](/api/events/events.EVENT_UNIT_.md#event-unit-will-changed)