# avatar.GetActionGroupSpells

Возвращает список идентификаторов заклинаний из указанной группы для заданного класса персонажа.

## Описание

```lua
avatar.GetActionGroupSpells( actionGroupId: actionGroupId, characterClassId: characterClassId ): table
```
Извлекает и возвращает таблицу с идентификаторами заклинаний, которые входят в указанную группу и доступны для заданного класса персонажа. Возвращаемая таблица индексируется с нуля.

## Список параметров

- **`actionGroupId`** (`actionGroupId`) - Идентификатор ресурса группы заклинаний.

- **`characterClassId`** (`characterClassId`) - Идентификатор ресурса класса игрока.

## Возвращаемые значения

Возвращает таблицу (`table`), содержащую идентификаторы заклинаний (`SpellId`). Таблица индексируется с `0`.

## Примеры

### Получение и вывод названий заклинаний группы

```lua
local spells = avatar.GetActionGroupSpells(actionGroupId, characterClassId)

for index, spellId in pairs(spells) do
    local spellInfo = avatar.GetSpellInfo(spellId) (help)
    if spellInfo then
        common.LogInfo(spellInfo.name)
    end
end
```