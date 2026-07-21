# itemLib.GetExtraDescsRatings

Возвращает список рейтингов, соответствующих дополнительным строкам описания предмета.

## Описание

```lua
itemLib.GetExtraDescsRatings( itemId: ObjectId ): table | nil
```

Извлечение списка рейтингов, соответствующих дополнительным строкам описания предмета, полученного посредством вызова `itemLib.GetExtraDescs`.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица, содержащая список рейтингов, индексированный от `0`. Если данные не найдены, возвращается `nil`.

- **`name`** (`WString`) - Имя переменной, откуда взят соответствующий рейтинг.

- **`numberValue`** (`number`) - Численное значение рейтинга.

- **`textValue`** (`ValuedText` | `nil`) - Имя рейтинга, локализованный текст.

## Примеры

### Обработка рейтингов дополнительных описаний

```lua
local extraDescs = itemLib.GetExtraDescs( itemId )
local desc0 = extraDescs and extraDescs[ 0 ]
local extraDescsRatings = itemLib.GetExtraDescsRatings( itemId )
local ratings0 = extraDescsRatings and extraDescsRatings[ 0 ]

if desc0 then
    common.LogInfo( desc0 )
    if ratings0 then
        for _, rating in pairs( ratings0 ) do
            common.LogInfo( rating.textValue, ": ", rating.numberValue )
        end
    end
end
```

::: info Описание примера
В примере извлекаются дополнительные описания предмета и соответствующие им рейтинги. Если описания и рейтинги существуют, происходит итерация по таблице рейтингов с выводом их текстового имени и численного значения в лог.
:::

## Смотрите также

- [itemLib.GetExtraDescs](function.itemLib.GetExtraDescs)