# itemLib.GetRuneInfo

Извлекает информацию о руне, если указанный предмет является руной.

## Описание

```lua
itemLib.GetRuneInfo( itemId: ObjectId ): table|nil
```
Функция возвращает таблицу с информацией о руне, если указанный предмет является руной. В противном случае возвращается `nil`.

## Список параметров

- **`itemId`** (`ObjectId`) - идентификатор предмета.

## Возвращаемые значения

Возвращает `table` | `nil` - информация о руне, если предмет является руной.
- **`level`** (`number`) - уровень руны.

- **`zodiacSignId`** (`ZodiacSignId`) - идентификатор знака зодиака руны.

- **`offensiveBonus`** (`number`) - на какой процент увеличивается атака благодаря руне.

- **`defensiveBonus`** (`number`) - на какой процент увеличивается защита благодаря руне.

- **`upgradedRuneItem`** (`ObjectId` | `nil`) - идентификатор предмета руны следующего уровня, если такая существует.

## Примеры

### Получение информации о знаке зодиака руны

```lua
local itemRuneInfo = itemLib.GetRuneInfo( itemId )
local zodiacSignId = itemRuneInfo and itemRuneInfo.zodiacSignId
local zodiacSignInfo = zodiacSignId and itemLib.GetZodiacSignInfo( zodiacSignId )
```

::: info Описание примера
В примере извлекается информация о руне по её идентификатору. Если предмет является руной, из полученной таблицы извлекается идентификатор знака зодиака, который затем используется для получения подробной информации о самом знаке зодиака посредством вызова `itemLib.GetZodiacSignInfo`.
:::

## Смотрите также

- [itemLib.GetZodiacSignInfo](function.itemLib.GetZodiacSignInfo)