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

Возвращает `table` | `nil` - список рангов достижения, индексация в котором начинается с 1.

- **`completeProgress`** (`number`) - Количество очков прогресса, необходимых для завершения ранга.

- **`name`** (`wstring`) - Название ранга.

- **`description`** (`wstring`) - Описание ранга.

- **`image`** (`TextureId`) - Картинка ранга.

- **`score`** (`number`) - Количество очков за выполнение ранга.

- **`reward`** (`table`) - Награда, таблица с полями.

- **`description`** (`wstring`) - Описание награды.

## Примеры

### Получение рангов достижения

```lua
local categories = medalsLib.GetCategories()
local medalRanks = medalsLib.GetMedalRanks(categories[0].subCategories[0].medals[0])
```

::: info Описание примера
В примере запрашивается список категорий достижений, после чего извлекается идентификатор достижения из первой подкатегории первой категории. Полученный идентификатор передается в функцию для получения списка рангов.
:::

## Смотрите также

- [medalsLib.GetCategories](function.medalsLib.GetCategories)
- [MedalId](types.MedalId)