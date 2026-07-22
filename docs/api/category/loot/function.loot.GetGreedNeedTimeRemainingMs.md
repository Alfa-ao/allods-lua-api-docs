# loot.GetGreedNeedTimeRemainingMs

Возвращает количество миллисекунд, оставшихся до окончания выбора Greed/Need ролла.

## Описание

```lua
loot.GetGreedNeedTimeRemainingMs( rollId: ObjectId ): number
```

Функция извлекает и возвращает оставшееся время в миллисекундах для завершения процесса выбора Greed/Need ролла.

## Список параметров

- **`rollId`** (`ObjectId`) - Уникальный идентификатор ролла.

## Возвращаемые значения

Возвращает `number` - количество миллисекунд, оставшихся до окончания выбора Greed/Need ролла.

## Примеры

### Получение оставшегося времени

```lua
local timeMs = loot.GetGreedNeedTimeRemainingMs( rollId )
```