# remort.ChooseSharedAbilities
Расшаривает умения и заклинания главного игрока для использования альтом.

## Описание

```lua
remort.ChooseSharedAbilities( abilities: table )
```

Функция расшаривает умения и заклинания главного игрока для использования альтом.

## Список параметров

- **`abilities`** (`table`) - Список умений и заклинаний для расшаривания. Элементами таблицы выступают идентификаторы умений (`AbilityId`) или заклинаний (`SpellId`).

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Выбор умений и заклинаний для расшаривания
```lua
local abilities = remort.GetAbilitiesForSharing()
local spells = remort.GetSpellsForSharing() -- deprecated
remort.ChooseSharedAbilities( { abilities[ 2 ], spells[ 0 ] } )
```

::: info Описание примера
В примере запрашиваются списки доступных для расшаривания умений и заклинаний. Затем формируется новая таблица, содержащая второе умение и первое заклинание из полученных списков, которая передается в функцию для их расшаривания.
:::

## Смотрите также

- [remort.GetAbilitiesForSharing](/api/category/remort/function.remort.GetAbilitiesForSharing.md)