# unit.GetZonesMapId

Возвращает Id интерфейсной карты зоны, на которой находится игрок.

## Описание

```lua
unit.GetZonesMapId( unitId: ObjectId ): ObjectId | nil
```

Функция возвращает Id интерфейсной карты зоны, на которой находится игрок. Работает только для главного игрока, членов его группы и рейда, а так же для игроков, задетекченных детекторами, если такие есть.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор юнита.

## Возвращаемые значения

Возвращает `ObjectId` | `nil` - Id интерфейсной карты, если карта игрока найдена.

## Примеры

### Получение Id карты и установка текстуры

```lua
local zonesMapId = unit.GetZonesMapId( playerId )
if zonesMapId then
    local zonesMapInfo = cartographer.GetZonesMapInfo( zonesMapId )
    if zonesMapInfo then
        wtMap:SetBackgroundTexture( zonesMapInfo.texture )
    end
end
```

## Смотрите также

- [cartographer.GetZonesMapInfo](../cartographer/function.cartographer.GetZonesMapInfo)