# itemLib.GetRuneInstrumentInfo

Возвращает информацию об инструменте, если предмет является таковым.

## Описание

```lua
itemLib.GetRuneInstrumentInfo( itemId: ObjectId ): table|nil
```

Извлекает и возвращает таблицу с информацией об инструменте для заданного предмета. Если предмет не является инструментом, возвращается `nil`.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения

Возвращает `table` или `nil`.

- **`isCombiner`** (`boolean`) - Является ли инструмент предназначенным для соединения рун.

## Примеры

### Получение информации об инструменте

```lua
local itemRuneInstrumentInfo = itemLib.GetRuneInstrumentInfo( itemId )
local isCombiner = itemRuneInstrumentInfo and itemRuneInstrumentInfo.isCombiner
```