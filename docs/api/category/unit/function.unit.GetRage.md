# unit.GetRage
Возвращает количество Гнева, накопленное у юнита.

## Описание

```lua
unit.GetRage( unitId: ObjectId ): number
```

Функция возвращает количество Гнева, накопленное у юнита. При изменении этой величины передается событие `EVENT_UNIT_RAGE_CHANGED`.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор юнита.

## Возвращаемые значения

Возвращает `number` - количество Гнева, от 0 до 100.

## Примеры

### Получение количества Гнева
```lua
local rage = unit.GetRage( unitId )
```

## Смотрите также

- [EVENT_UNIT_RAGE_CHANGED](/api/events/events.EVENT_UNIT_.md#event-unit-rage-changed)