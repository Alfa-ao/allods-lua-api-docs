# avatar.GetActionGroupStatBonus

Возвращает информацию о бонусе к характеристикам аватара при использовании заклинаний из указанной группы.

## Описание

```lua
avatar.GetActionGroupStatBonus( actionGroupId: ActionGroupId ): table | nil
```
Возвращает таблицу с бонусами к характеристикам или `nil` при передаче некорректного аргумента. В таблице ключом выступает системный номер характеристики, а значением - числовое прибавление к ней, получаемое заклинанием из указанной группы.

## Список параметров

- **`actionGroupId`** (`ActionGroupId`) - Идентификатор группы заклинаний.

## Возвращаемые значения
- **`table`** - таблица с бонусами к характеристикам. Содержит пары ключ-значение:
  - Ключ (`number`): системный номер характеристики (соответствует `ENUM_InnateStats`).
  - Значение (`number`): прибавка к характеристике, которую получает заклинание из группы.
- **`nil`** - возвращается в случае передачи некорректного аргумента.

## Примеры

### Получение и вывод бонусов к характеристикам для группы заклинаний

```lua
local spellbook = avatar.GetSpellBook()
local spellGroups = spellbook[1] and spellLib.GetActionGroups( spellbook[1] )
--[[ table(2) {
    [1] => userdata(ActionGroupId) = {
        GetInfo = table(1) {
            ["name"] => WString(41) "Эффекты, сбрасывающие сундук Арены Смерти"
        }
    }
    [2] => userdata(ActionGroupId) = {
        GetInfo = table(1) {
            ["name"] => WString(28) "Способности ездового питомца"
        }
    }
} ]]

if spellGroups and spellGroups[ 2 ] then
    log( userMods.FromWString( spellGroups[2]:GetInfo().name ) ) -- string(28) "Способности ездового питомца"
    
    local bonuses = avatar.GetActionGroupStatBonus(spellGroups[2]) -- table(0) {}
    if bonuses then
        for stat, bonus in pairs(bonuses) do
            log( "  stat #", stat, " has bonus ", bonus )
        end
    end
end
```

::: info Описание примера
В примере извлекается книга заклинаний, получаются группы действий для первой записи и выводится имя группы. Далее перебирается таблица бонусов к характеристикам для нулевой группы и выводится информация о каждой характеристике и её бонусе.
:::

## Смотрите также

- [spellLib.GetActionGroups](/api/category/spellLib/function.spellLib.GetActionGroups.md)
- [ENUM_InnateStats](/api/enums/enums.ENUM_InnateStats.md)
- [avatar.GetInnateStats](/api/category/avatar/function.avatar.GetInnateStats.md)