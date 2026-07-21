# itemLib.GetActionGroupsInfo

Возвращает таблицу с информацией о бонусах, предоставляемых предметом к группам заклинаний.

## Описание

```lua
itemLib.GetActionGroupsInfo( itemId: ObjectId ): table | nil
```

Функция извлекает информацию о бонусах, которые указанный предмет предоставляет к группам заклинаний. Результат представляет собой индексированный от `0` список таблиц, каждая из которых содержит идентификатор группы заклинаний и набор модификаторов характеристик персонажа, активных во время применения заклинаний из данной группы.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета, для которого запрашивается информация о бонусах к группам заклинаний.

## Возвращаемые значения

Возвращает `table` | `nil` - `nil` в случае отсутствия информации о бонусах. Иначе возвращается таблица со списком таблиц (индексация от `0`), каждая из которых содержит информацию о бонусе к определённой группе заклинаний:

- **`actionGroupId`** (`ActionGroupId` | `nil`) - Идентификатор группы заклинаний.
- **`statBonuses`** (`table`) - Таблица с бонусами к характеристикам персонажа во время использования заклинаний из группы `actionGroupId`. Ключом выступает системный номер характеристики, значением - величина прибавки.
    - `ключ` (`number`(`ENUM_InnateStats`)) - Системный номер характеристики.
    - `значение` (`number` | `nil`) - Прибавка к характеристике. Если прибавка отсутствует, значение равно `nil`.

## Примеры

### Получение бонусов предмета к группам заклинаний

```lua
local bonuses = itemLib.GetActionGroupsInfo( itemId )
if bonuses then
    for _, bonus in ipairs( bonuses ) do
        for stat, value in pairs( bonus.statBonuses ) do
            common.LogInfo( "  stat #", stat, " has bonus ", value )
        end
    end
end
```

## Смотрите также

- [ActionGroupId](types.ActionGroupId)
- [avatar.GetActionGroupStatBonus](function.avatar.GetActionGroupStatBonus)
- [ENUM_InnateStats](ENUM_InnateStats)
- [avatar.GetInnateStats](function.avatar.GetInnateStats)