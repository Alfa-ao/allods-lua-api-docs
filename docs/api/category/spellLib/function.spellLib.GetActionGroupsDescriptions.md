# spellLib.GetActionGroupsDescriptions
Возвращает список дополнительных описаний групп, к которым принадлежит заклинание.

## Описание

```lua
spellLib.GetActionGroupsDescriptions( id: SpellId ): table
```

Функция возвращает индексированный с единицы список дополнительных описаний заклинания из групп, к которым оно принадлежит.

## Список параметров

- **`id`** (`SpellId`) - Идентификатор умения.

## Возвращаемые значения

Возвращает `table` - индексированный список дополнительных описаний заклинания из групп, к которым оно принадлежит. Элементы таблицы имеют тип `WString`.

## Примеры

### Получение описаний групп заклинания
```lua
local spellbook = avatar.GetSpellBook()
local spellGroupsDescs = spellbook[ 1 ] and spellLib.GetActionGroupsDescriptions( spellbook[ 1 ] )
if spellGroupsDescs then
    LogInfo( spellGroupsDescs[ 1 ] )
end
```

::: info Описание примера
В примере сначала получается книга заклинаний персонажа. Если первый элемент книги существует, извлекаются дополнительные описания групп для этого заклинания, после чего выводится первое описание в лог.
:::

## Смотрите также

- [avatar.GetSpellBook](/api/category/avatar/function.avatar.GetSpellBook.md)