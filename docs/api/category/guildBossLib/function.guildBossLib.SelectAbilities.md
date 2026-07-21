# guildBossLib.SelectAbilities
Осуществляет выбор заклинаний и способностей босса гильдии.

## Описание
```lua
guildBossLib.SelectAbilities( abilities: table )
```
Функция осуществляет выбор заклинаний и способностей босса гильдии.

## Список параметров
- **`abilities`** (`table`)
Список выбранных заклинаний и способностей босса гильдии.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Выбор способностей босса гильдии
```lua
local bossInfo = guildBossLib.IsExist() and guildBossLib.GetInfo()
if bossInfo and bossInfo.currentState then
    local availableSlots = bossInfo.states[bossInfo.currentState].availableAbilitySlots
    local slotsInfo = guildBossLib.GetAbilitiesSlots()
    local availableSpellsInFirstSlot = availableSlots and slotsInfo and slotsInfo[availableSlots[0]].spells
    if availableSpellsInFirstSlot then
        guildBossLib.SelectAbilities( availableSpellsInFirstSlot[0] )
    end
end
```

::: info Описание примера
В примере сначала проверяется наличие босса гильдии и получается информация о нем. Затем извлекаются доступные слоты способностей и информация о слотах. Если для первого доступного слота есть заклинания, вызывается функция выбора способностей с передачей первого заклинания из списка.
:::

## Смотрите также
- [guildBossLib.IsExist](function.guildBossLib.IsExist)
- [guildBossLib.GetInfo](function.guildBossLib.GetInfo)
- [guildBossLib.GetAbilitiesSlots](function.guildBossLib.GetAbilitiesSlots)