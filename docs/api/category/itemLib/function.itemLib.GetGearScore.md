# itemLib.GetGearScore

Возвращает значение рейтинга предмета.

## Описание

```lua
itemLib.GetGearScore( itemId: ObjectId ): number | nil
```

Функция извлекает и возвращает числовое значение рейтинга указанного предмета.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения

Возвращает `number` | `nil` - значение рейтинга предмета.

## Примеры

### Получение рейтинга предмета

```lua
local gearScore = itemLib.GetGearScore( itemId )
```