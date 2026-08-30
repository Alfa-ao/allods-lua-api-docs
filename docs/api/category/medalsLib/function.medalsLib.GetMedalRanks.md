# medalsLib.GetMedalRanks

Возвращает список рангов достижения.

## Описание

```lua
medalsLib.GetMedalRanks( medalId: ObjectId ): table | nil
```

Функция возвращает таблицу со списком рангов указанного достижения. Если ранги не найдены, возвращается `nil`.

## Список параметров

- **`medalId`** (`ObjectId`) - Идентификатор достижения.

## Возвращаемые значения

<!--
Возвращает `table` | `nil` - список рангов достижения, индексация в котором начинается с 1.

- **`completeProgress`** (`number`) - Количество очков прогресса, необходимых для завершения ранга.

- **`name`** (`wstring`) - Название ранга.

- **`description`** (`wstring`) - Описание ранга.

- **`image`** (`TextureId`) - Картинка ранга.

- **`score`** (`number`) - Количество очков за выполнение ранга.

- **`reward`** (`table`) - Награда, таблица с полями.

- **`description`** (`wstring`) - Описание награды.
-->

Возвращает `table` | `nil` - список `MedalRankId` рангов достижения, индексация в котором начинается с 1.

## Примеры

### Получение рангов достижения

```lua
local medals = medalsLib.GetMedals() -- table(1344) { [0] => number(183617), ... }
local rank = medalsLib.GetMedalRanks( medals[0] ) -- table { [1] => MedalRankId }
local info = rank[1]:GetInfo()
--[[ log( info )
table(3) {
    ["completeProgress"] => number(1)
    ["description"] => WString(17) "Получить питомца."
    ["score"] => number(10)
} ]]
```

## Смотрите также

- [MedalId](/api/types/MedalId.md)
- [MedalRankId](/api/types/MedalRankId.md)