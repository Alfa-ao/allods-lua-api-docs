# avatar.GetActionGroupStatBonus
Возвращает информацию о бонусе к характеристикам аватара при использовании заклинаний из указанной группы.

## Описание
```lua
avatar.GetActionGroupStatBonus( actionGroupId: ActionGroupId ): table | nil
```
Возвращает таблицу с бонусами к характеристикам или `nil` при передаче некорректного аргумента. В таблице ключом выступает системный номер характеристики, а значением — числовое прибавление к ней, получаемое заклинанием из указанной группы.

## Список параметров
- **`actionGroupId`** (`ActionGroupId`)
Идентификатор группы заклинаний.

## Возвращаемые значения
- **`table`** — таблица с бонусами к характеристикам. Содержит пары ключ-значение:
  - Ключ (`number`): системный номер характеристики (соответствует `ENUM_InnateStats`).
  - Значение (`number`): прибавка к характеристике, которую получает заклинание из группы.
- **`nil`** — возвращается в случае передачи некорректного аргумента.

## Примеры
### Получение и вывод бонусов к характеристикам для группы заклинаний
```lua
local spellbook = avatar.GetSpellBook()
local spellGroups = spellbook[0] and avatar.GetSpellActionGroups( spellbook[0] )
if spellGroups and spellGroups[ 0 ] then
  common.LogInfo( avatar.GetActionGroupInfo(spellGroups[0]).name )
  
  local bonuses = avatar.GetActionGroupStatBonus(spellGroups[0])
  if bonuses then
    for stat, bonus in pairs(bonuses) do
      common.LogInfo( "  stat #", stat, " has bonus ", bonus )
    end
  end
end
```
::: info Описание примера
В примере извлекается книга заклинаний, получаются группы действий для первой записи и выводится имя группы. Далее перебирается таблица бонусов к характеристикам для нулевой группы и выводится информация о каждой характеристике и её бонусе.
:::

## Смотрите также
- `ActionGroupId`
- `spellLib.GetActionGroups`
- `ENUM_InnateStats`
- `avatar.GetInnateStats`