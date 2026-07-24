# spellLib.GetRequiredResources

Возвращает список предметов, требующихся для применения умения.

## Описание

```lua
spellLib.GetRequiredResources( id: SpellId ): table
```

Функция возвращает список идентификаторов предметов, необходимых для применения умения.

## Список параметров

- **`id`** (`SpellId`) - Идентификатор умения.

## Возвращаемые значения

Возвращает `table` - индексированный с 1 список идентификаторов предметов, необходимых для применения умения. Элементы списка имеют тип `ObjectId`.

## Примеры

### Получение списка ресурсов для умения

```lua
local spellbook = avatar.GetSpellBook()
local spellResources = spellLib.GetRequiredResources( spellbook[1] )
local itemId = spellResources[ 0 ]
info.count = itemId and itemLib.GetOverallStackCount( itemId )
common.LogInfo( info.count )
```

::: info Описание примера
В примере получается книга заклинаний персонажа, после чего для первого умения извлекается список требуемых ресурсов. Затем берется предмет из списка, вычисляется его общее количество и выводится в лог.
:::

## Смотрите также

- [avatar.GetSpellBook](../avatar/function.avatar.GetSpellBook)
- [itemLib.GetOverallStackCount](../itemLib/function.itemLib.GetOverallStackCount)