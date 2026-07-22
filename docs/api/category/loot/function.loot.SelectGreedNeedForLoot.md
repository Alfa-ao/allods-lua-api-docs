# loot.SelectGreedNeedForLoot
Осуществляет выбор для ролла Greed/Need.

## Описание
```lua
loot.SelectGreedNeedForLoot( rollId: ObjectId, choice: number )
```
Осуществление выбора для ролла Greed/Need.

## Список параметров
- **`rollId`** (`ObjectId`) - Уникальный идентификатор ролла. Не может быть nil.

- **`choice`** (`number`(`CHOICE_GREED_NEED_*`)) - Выбор.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Выбор паса для ролла
```lua
choice = CHOICE_GREED_NEED_PASS
loot.SelectGreedNeedForLoot( rollId, choice )
```

## Смотрите также
- [CHOICE_GREED_NEED_*](#)