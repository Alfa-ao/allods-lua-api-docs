# avatar.GetActionGroupSpells
Возвращает список идентификаторов заклинаний из указанной группы для заданного класса персонажа.

## Описание
```lua
avatar.GetActionGroupSpells( actionGroupId: number, characterClassId: number ): table
```
Извлекает и возвращает таблицу с идентификаторами заклинаний, которые входят в указанную группу и доступны для заданного класса персонажа. Возвращаемая таблица индексируется с нуля.

## Список параметров
- **`actionGroupId`** (`number`)
Идентификатор ресурса группы заклинаний.

- **`characterClassId`** (`number`)
Идентификатор ресурса класса игрока.

## Возвращаемые значения
Возвращает таблицу (`table`), содержащую идентификаторы заклинаний (`number`). Таблица индексируется с нуля.

## Примеры
### Получение и вывод названий заклинаний группы
```lua
local actionGroupId = 1
local characterClassId = 2

local spells = avatar.GetActionGroupSpells(actionGroupId, characterClassId)

for index, spellId in pairs(spells) do
    local spellInfo = avatar.GetSpellInfo(spellId)
    if spellInfo then
        common.LogInfo(spellInfo.name)
    end
end
```
::: info Описание примера
В примере запрашиваются заклинания для заданной группы и класса. Далее происходит итерация по полученной таблице с использованием `pairs`, так как таблица индексируется с нуля. Для каждого идентификатора извлекается полная информация о заклинании и выводится его название в лог.
:::

## Смотрите также
- [ActionGroupId](constants.action-group-id)
- [CharacterClassId](constants.character-class-id)
- [avatar.GetSpellInfo](avatar.getspellinfo)