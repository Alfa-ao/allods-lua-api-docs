# QuestLocation

QuestLocation описывает одну точку на карте.

Таблица с полями:

```
zonesMapId: ObjectId - идентификатор интерфейсной карты зоны точки
position: GamePosition - координаты точки
isIndoor: boolean - true, если точка цели/сдачи квеста находится в помещении
radius: number or nil - радиус зоны точки. nil, если радиус не указан или нулевой
```

## Смотрите также

- [GamePosition](/api/types/GamePosition.md)
- [cartographer.GetZonesMapInfo](/api/category/cartographer/function.cartographer.GetZonesMapInfo.md)