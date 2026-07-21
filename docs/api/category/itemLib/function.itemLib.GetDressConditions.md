# itemLib.GetDressConditions
Возвращает подробную информацию о возможности экипировки предмета, включая первое выполненное или невыполненное условие и полный список всех невыполненных условий.

## Описание
```lua
itemLib.GetDressConditions( itemId: ObjectId, ignoredConditions: table | nil ): table
```
Функция выполняет проверку условий для экипировки предмета и возвращает таблицу с результатами.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

- **`ignoredConditions`** (`table` | `nil`) - Список строк (`ENUM_DressResult_*`), которые необходимо игнорировать при проверке.

## Возвращаемые значения

Возвращает `table` - таблица с информацией о результатах проверки:

- **`sysFirstCondition`** (`string`(`ENUM_DressResult_*`)) - Первое выполненное или невыполненное условие, определяющее возможность экипировки предмета.

- **`failedConditions`** (`table`) - Таблица невыполненных условий, где ключом является имя условия (`ENUM_DressResult_*`), а значением всегда выступает `true`.

## Примеры

### Проверка условий экипировки предмета

```lua
local conditions = itemLib.GetDressConditions( itemId, { "ENUM_DressResult_InCombat" } )
-- or
conditions = itemLib.GetDressConditions( itemId )
if conditions.sysFirstCondition ~= "ENUM_DressResult_Success" then
    if conditions.failedConditions[ "ENUM_DressResult_WrongChararacterClass" ] then
        LogInfo( "Неподходящий класс" )
    end
end
```

::: info Описание примера
В примере выполняется проверка условий экипировки предмета с игнорированием условия нахождения в бою. Если основное условие не является успешным, производится дополнительная проверка на наличие невыполненного условия неподходящего класса персонажа с выводом соответствующего сообщения в лог.
:::

## Смотрите также

- [ENUM_DressResult_*](enumerations#enum_dressresult)