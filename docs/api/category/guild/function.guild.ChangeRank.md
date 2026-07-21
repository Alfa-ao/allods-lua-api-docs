# guild.ChangeRank
Изменяет ранг члена гильдии.

## Описание
```lua
guild.ChangeRank( memberId: ObjectId, rank: number )
```
Функция изменяет ранг члена гильдии на заданный.

## Список параметров
- **`memberId`** (`ObjectId`) - Идентификатор члена гильдии.

- **`rank`** (`number`) - Новый ранг игрока.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Изменение ранга
```lua
guild.ChangeRank( memberId, rank )
```