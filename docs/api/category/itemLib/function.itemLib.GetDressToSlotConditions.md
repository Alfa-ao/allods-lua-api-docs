# itemLib.GetDressToSlotConditions

Возвращает информацию о возможности экипировки предмета в указанный слот.

## Описание

```lua
itemLib.GetDressToSlotConditions( itemId: ObjectId, dressSlot: number, ignoredConditions: table | nil ): table
```

Функция возвращает подробную информацию о возможности одеть предмет в указанный слот экипировки, включая первое выполненное или невыполненное условие и полный список всех невыполненных условий.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

- **`dressSlot`** (`number`) - Слот в экипировке персонажа.

- **`ignoredConditions`** (`table` | `nil`) - Список условий, которые необходимо игнорировать при проверке. Элементы таблицы имеют тип `string` (`ENUM_DressResult_*`).

## Возвращаемые значения

Возвращает `table`.

- **`sysFirstCondition`** (`string` (`ENUM_DressResult_*`)) - Первое выполненное или невыполненное условие, определяющее возможность экипировки.

- **`failedConditions`** (`table`) - Таблица невыполненных условий. Ключом выступает имя условия (`string` (`ENUM_DressResult_*`)), а значением всегда является `boolean` (`true`).

## Примеры

### Проверка условий экипировки предмета

```lua
local conditions = itemLib.GetDressToSlotConditions( itemId, dressSlot )
if conditions.sysFirstCondition ~= "ENUM_DressResult_Success" then
    if conditions.failedConditions[ "ENUM_DressResult_WrongCharacterClass" ] then
        LogInfo( "Неподходящий класс" )
    end
end
```

::: info Описание примера
В примере запрашиваются условия экипировки предмета. Если первое условие не равно успешному, выполняется проверка наличия конкретного невыполненного условия в таблице с последующим выводом сообщения в лог.
:::

## Смотрите также

- [ENUM_DressResult_*](ссылка_1)