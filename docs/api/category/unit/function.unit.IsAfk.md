# unit.IsAfk

Возвращает информацию о статусе AFK игрока.

## Описание

```lua
unit.IsAfk( unitId: ObjectId ): boolean
```

Функция возвращает информацию о статусе AFK игрока.

::: warning Замечание
Если игрок не найден или передан идентификатор NPC или моба, то возвращается `false`.
:::

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор игрока.

## Возвращаемые значения

Возвращает `boolean` - `true`, если игрок AFK.

## Примеры

### Проверка статуса AFK

```lua
local afk = unit.IsAfk( unitId )
if afk then
    common.LogInfo( "Player is AFK" )
end
```