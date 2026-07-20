# group.IsCreatureInGroup
Возвращает `true`, если указанный игрок или наемник-NPC находится в группе главного игрока.

## Описание
```lua
group.IsCreatureInGroup( id: WString | ObjectId | UniqueId ): boolean
```
Функция проверяет принадлежность указанного игрока или наемника-NPC к группе главного игрока.

## Список параметров
- **`id`** (`WString` | `ObjectId` | `UniqueId`) - Имя или идентификатор юнита.

## Возвращаемые значения
Возвращает `boolean` - `true`, если указанный юнит находится в группе.

## Примеры
### Проверка нахождения юнита в группе
```lua
if group.IsCreatureInGroup( unitId ) then
    common.LogInfo( "Юнит находится в группе." )
end
```