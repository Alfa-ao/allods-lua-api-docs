# remort.GetAbilitiesForSharing
Возвращает список умений, которые главный игрок может расшарить для использования своим альтом (реморт).

## Описание

```lua
remort.GetAbilitiesForSharing(): table
```

Функция возвращает список умений, которые главный игрок может расшарить для использования своим альтом (реморт).

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - список, индексированный с 1, содержащий следующие поля:

- **`abilityId`** (`AbilityId` | `nil`) - идентификатор ресурса умения.

- **`spellId`** (`SpellId` | `nil`) - идентификатор ресурса заклинания.

- **`isSelected`** (`boolean`) - флаг, указывающий, что умение выбрано (расшарено) в данный момент.

## Примеры

### Получение списка умений для расшаривания
```lua
local abilities = remort.GetAbilitiesForSharing()
for i, entry in ipairs( abilities ) do
    local abilityId = entry.abilityId
    local abilityInfo = abilityId and avatar.GetAbilityinfo( abilityId ) or {}
    local spellId = entry.spellId
    local spellInfo = spellId and avatar.GetSpellInfo( spellId ) or {}
end
```

::: info Описание примера
В примере запрашивается список умений для расшаривания. Далее в цикле перебираются полученные записи, и для каждой записи извлекаются идентификаторы умения и заклинания. С использованием логических операторов происходит получение дополнительной информации об умении и заклинании, если их идентификаторы не равны `nil`.
:::

## Смотрите также

- [avatar.GetAbilityinfo](function.avatar.GetAbilityinfo)
- [avatar.GetSpellInfo](function.avatar.GetSpellInfo)