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
Возвращает `table` | `nil` - индексированный `с единицы` список идентификаторов групп действий (`ActionGroupId`); `nil`, если при получении списка групп произошла ошибка.

## Примеры
### Получение групп действий для первого заклинания
```lua
local spellbook = avatar.GetSpellBook()
local spellGroups = spellbook[1] and spellLib.GetActionGroups( spellbook[1] )
```
::: info Описание примера
В примере сначала извлекается книга заклинаний главного персонажа. Затем проверяется наличие первого элемента в списке и, если он существует, для него запрашивается список групп действий с использованием логического оператора `and`.
:::

## Смотрите также
- [ActionGroupId](asdfasdfad)
- [avatar.GetActionGroupStatBonus](../avatar/function.avatar.GetActionGroupStatBonus)
- [avatar.GetSpellBook](../avatar/function.avatar.GetSpellBook)