# spellLib.GetRequirements

Возвращает информацию о требованиях к использованию заклинания.

## Описание

```lua
spellLib.GetRequirements( id: SpellId ): table | nil
```

Функция извлекает и возвращает таблицу с информацией о требованиях к использованию заклинания. Если заклинание не найдено, возвращается `nil`.

## Список параметров

- **`id`** (`SpellId`) - Уникальный идентификатор заклинания.

## Возвращаемые значения

Возвращает `table` | `nil` - информация о требованиях к использованию заклинания, или `nil`, если заклинание не найдено.

- **`casterConditions`** (`RequirementsTable`) - список условий на кастующем.

- **`casterResources`** (`RequirementsTable`) - список ресурсов на кастующем.

- **`targetConditions`** (`RequirementsTable`) - список условий на цели.

## Примеры

### Получение требований к использованию заклинания

```lua
local spellbook = avatar.GetSpellBook()
local reqs = spellLib.GetRequirements( spellbook[0] )

local firstRequirement = nil

if reqs then
    local req = reqs.casterConditions[0]
    if req then
        if req.type then
            req = req.childs[0]
            if req then
                firstRequirement = req.sysCause
            end
        else
            firstRequirement = req.sysCause
        end
    end
end
```

::: info Описание примера
В примере сначала получается книга заклинаний персонажа. Затем извлекаются требования для первого заклинания из книги. Если требования существуют, проверяется наличие условий на кастующем. При наличии вложенных условий извлекается первое дочернее условие, иначе берется основное. В результате определяется системная причина первого требования.
:::

## Смотрите также

- [RequirementsTable](/api/types/RequirementsTable.md)