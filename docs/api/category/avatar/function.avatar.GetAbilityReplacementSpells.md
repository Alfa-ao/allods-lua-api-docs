# avatar.GetAbilityReplacementSpells
Возвращает список идентификаторов подменяющих заклинаний для указанного умения.

## Описание
```lua
avatar.GetAbilityReplacementSpells( abilityId: number ): table | nil
```
Функция извлекает и возвращает таблицу с идентификаторами заклинаний, которые подменяют указанное умение. Если подменяющие заклинания отсутствуют, возвращается `nil`. Индексация элементов в возвращаемой таблице начинается с 1.

## Список параметров
- **`abilityId`** (`number`)
Идентификатор ресурса умения.

## Возвращаемые значения
- `table` — Таблица идентификаторов ресурсов заклинаний. Индексация начинается с 1.
- `nil` — Возвращается в случае, если подменяющие заклинания для указанного умения отсутствуют.

## Примеры
### Получение и вывод названия подменяющего заклинания
```lua
local abilities = avatar.GetAbilities()
local abilityInfo = avatar.GetAbilityInfo( abilities[0] )

if abilityInfo and abilityInfo.hasReplacementSpell then
  local spells = avatar.GetAbilityReplacementSpells( abilities[0] ) or nil
  local spellInfo = spells and spellLib.GetDescription( spells[0] ) or nil
  
  if spellInfo then
    common.LogInfo( tostring( spellInfo.name ) .. ", " )
  end
end
```
::: info Описание примера
Проверяется наличие умения и флага подмены, после чего извлекается и выводится в лог название первого подменяющего заклинания.
:::