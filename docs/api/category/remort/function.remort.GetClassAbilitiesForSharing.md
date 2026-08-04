# remort.GetClassAbilitiesForSharing
Возвращает список умений, доступных для передачи альтернативному персонажу игроком указанного класса.

## Описание

```lua
remort.GetClassAbilitiesForSharing( classId: CharacterClassId ): table
```

Функция возвращает таблицу с перечнем умений и заклинаний, которые главный персонаж указанного класса может сделать доступными для своего альтернативного персонажа.

## Список параметров

- **`classId`** (`CharacterClassId`) - Идентификатор ресурса класса игрока.

## Возвращаемые значения

Возвращает `table` - Список умений, индексированный с 1.

- **`abilityId`** (`AbilityId` | `nil`) - Идентификатор ресурса умения.

- **`spellId`** (`SpellId` | `nil`) - Идентификатор ресурса заклинания.

- **`isSelected`** (`boolean`) - Флаг, указывающий, выбрано ли умение для передачи в данный момент.

## Примеры

### Получение и обработка списка передаваемых умений
```lua
local abilities = remort.GetClassAbilitiesForSharing( avatar.GetClassId() )
for i, entry in ipairs( abilities ) do
    local abilityId = entry.abilityId
    local abilityInfo = abilityId and avatar.GetAbilityInfo( abilityId ) or {}
    local spellId = entry.spellId
    local spellInfo = spellId and avatar.GetSpellInfo( spellId ) or {}
end
```

::: info Описание примера
В примере запрашивается список умений для текущего класса персонажа. Затем в цикле перебираются полученные записи, и для каждой записи извлекается информация об умении или заклинании при условии наличия соответствующего идентификатора.
:::

## Смотрите также

- [avatar.GetClassId](/api/category/avatar/function.avatar.GetClassId.md)
- [avatar.GetAbilityInfo](/api/category/avatar/function.avatar.GetAbilityInfo.md)