# loot.SelectWinnerForLoot

Назначает победителя для Master ролла.

## Описание

```lua
loot.SelectWinnerForLoot( rollId: ObjectId, winnerId: ObjectId )
```

Функция назначает победителя для Master ролла, передавая предмет указанному игроку.

## Список параметров

- **`rollId`** (`ObjectId`) - Уникальный идентификатор ролла.

- **`winnerId`** (`ObjectId`) - Уникальный идентификатор игрока, получающего лут.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Назначение победителя

```lua
loot.SelectWinnerForLoot( rollId, winnerId )
```