# guildHallLib.GetTeleportSpell
Возвращает заклинание телепортации в оплот гильдии.

## Описание
```lua
guildHallLib.GetTeleportSpell(): SpellId | nil
```
Функция возвращает заклинание телепортации в оплот гильдии, если оно существует.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `SpellId` | `nil` - заклинание телепортации в оплот гильдии, если оплот гильдии существует, иначе `nil`.

## Примеры
### Получение состояния заклинания телепортации
```lua
local guildHallTeleport = guildHallLib.GetTeleportSpell()
local teleportSpellState = guildHallTeleport and spellLib.GetState( guildHallTeleport )
```
::: info Описание примера
В примере запрашивается заклинание телепортации в оплот гильдии. Если оно существует, выполняется получение его текущего состояния с помощью функции `spellLib.GetState`.
:::

## Смотрите также
- [spellLib.GetState](../spellLib/function.spellLib.GetState)