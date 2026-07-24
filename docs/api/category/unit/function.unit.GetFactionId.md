# unit.GetFactionId

Возвращает ресурс фракции указанного юнита.

## Описание

```lua
unit.GetFactionId( unitId: ObjectId ): FactionId
```

Функция извлекает и возвращает ресурс фракции, к которой принадлежит юнит с заданным идентификатором.

## Список параметров

- **`unitId`** (`ObjectId`) - Уникальный идентификатор юнита.

## Возвращаемые значения

Возвращает `FactionId` - ресурс фракции.

## Примеры

### Получение и вывод названия фракции юнита

```lua
local factionId = unit.GetFactionId( unitId )
LogInfo( "Unit faction: ", factionId:GetInfo().name )
```