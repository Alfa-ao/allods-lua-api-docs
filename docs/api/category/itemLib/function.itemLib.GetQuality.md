# itemLib.GetQuality
Извлекает информацию о качестве предмета.

## Описание

```lua
itemLib.GetQuality( itemId: ObjectId ): table|nil
```

Функция возвращает таблицу с информацией о качестве указанного предмета. Если предмет не найден или информация недоступна, функция возвращает `nil`.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения

Возвращает `table` | `nil`.
При успешном получении информации возвращается таблица со следующими полями:

- **`quality`** (`number`(`ITEM_QUALITY_*`)) - Качество предмета.

- **`isNeedVisualize`** (`boolean`) - Флаг, указывающий, требуется ли отображать рамку качества предмета в интерфейсе.

- **`isCursed`** (`boolean`) - Флаг, указывающий, является ли предмет проклятым.

- **`hasSetBonus`** (`boolean`) - Флаг, указывающий, является ли предмет частью набора.

## Примеры

### Получение качества предмета
```lua
local itemQuality = itemLib.GetQuality( itemId )
local quality = itemQuality and itemQuality.quality
```

## Смотрите также

- [ITEM_QUALITY_*](/api/constants/constants.ITEM_QUALITY.md)