# checkroomLib.GetSpells

Возвращает индексированный с 1 список идентификаторов ресурсов заклинаний одной коллекции гардероба.

## Описание

```lua
checkroomLib.GetSpells( collectionId: CheckRoomCollectionId ): table
```

Функция возвращает таблицу, содержащую идентификаторы ресурсов заклинаний, относящихся к заданной коллекции гардероба. Индексация элементов в возвращаемой таблице начинается с единицы.

## Список параметров

- **`collectionId`** (`CheckRoomCollectionId`) - Идентификатор ресурса коллекции гардероба.

## Возвращаемые значения

Возвращает таблицу (`table`), содержащую идентификаторы ресурсов заклинаний (`SpellId`). Индексация элементов в таблице начинается с единицы.

## Примеры

### Получение списка заклинаний коллекции

```lua
local categories = checkroomLib.GetCategories()
local collections = checkroomLib.GetCollections( categories[ 1 ] )
local spells = checkroomLib.GetSpells( collection[ 1 ] )
local spellState = spellLib.GetState( spells[ 1 ] )
local isSpellLearned = avatar.HasSpell( spells[ 1 ] )
local isHideSpellInCollection = not isSpellLearned and checkroomLib.IsHideSpellWhileNotLearned( spells[ 1 ] )
```

::: info Описание примера
В примере последовательно извлекаются категории, коллекции и заклинания. Далее проверяется состояние заклинания, факт его изучения персонажем и необходимость его скрытия в коллекции, если оно не изучено.
:::

## Смотрите также

- [checkroomLib.IsHideSpellWhileNotLearned](function.checkroomLib.IsHideSpellWhileNotLearned)