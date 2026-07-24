# unit.GetClassId

Возвращает ресурс класса персонажа.

## Описание

```lua
unit.GetClassId( unitId: ObjectId ): CharacterClassId | nil
```

Функция извлекает и возвращает ресурс класса персонажа. Если указанный юнит не является игроком, возвращается `nil`.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор юнита.

## Возвращаемые значения

Возвращает `CharacterClassId` | `nil` - Идентификатор класса игрока, или `nil`, если это не игрок.

## Примеры

### Получение и проверка класса персонажа

```lua
local classId = unit.GetClassId( unitId )
if classId then
    LogInfo( classId:GetInfo( className ) )
end
```