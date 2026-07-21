# itemLib.GetExchangeInfo

Проверяет возможность обмена предмета на бирже наград.

## Описание

```lua
itemLib.GetExchangeInfo( itemId: ObjectId ): table | nil
```

Функция возвращает таблицу с информацией о возможности обмена предмета на бирже наград или `nil`, если идентификатор предмета некорректен.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица с информацией об обмене или `nil`, если идентификатор предмета некорректен.

- **`isRewardsExchange`** (`boolean`) - Признак наличия предмета на бирже наград.

- **`canExchange`** (`boolean`) - Признак возможности продажи предмета на биржу.

## Примеры

### Проверка возможности обмена

```lua
local info = itemLib.GetExchangeInfo( itemId )
if info and info.isRewardsExchange then
    LogInfo( "Обмен возможен" )
end
```