# spellLib.GetActionGroups
Возвращает список групп, к которым принадлежит заклинание.

## Описание

```lua
spellLib.GetActionGroups( id: SpellId ): table | nil
```

Функция извлекает и возвращает индексированный с единицы список идентификаторов групп действий, к которым принадлежит заданное умение. В случае возникновения ошибки при получении списка возвращается `nil`.

## Список параметров

- **`id`** (`SpellId`) - Уникальный идентификатор умения.

## Возвращаемые значения

Возвращает `table` | `nil` - индексированный с `1` список идентификаторов групп действий (`ActionGroupId`).

## Примеры

### Получение групп действий для первого заклинания

```lua
local spellbook = avatar.GetSpellBook()
local spellGroups = spellbook[1] and spellLib.GetActionGroups( spellbook[1] )
```

## Смотрите также

- [ActionGroupId](/api/types/ActionGroupId.md)
- [avatar.GetActionGroupStatBonus](/api/category/avatar/function.avatar.GetActionGroupStatBonus.md)
- [avatar.GetSpellBook](/api/category/avatar/function.avatar.GetSpellBook.md)