# guild.CorrectMemberBalance

Производит коррекцию баланса члена гильдии в гильдейском банке.

## Описание

```lua
guild.CorrectMemberBalance( memberId: ObjectId, changeSum: number, comment: WString )
```

Функция производит коррекцию баланса члена гильдии в гильдейском банке.

## Список параметров

- **`memberId`** (`ObjectId`) - Идентификатор члена гильдии.

- **`changeSum`** (`number`) - Величина изменения в меди.

- **`comment`** (`WString`) - Комментарий.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Коррекция баланса члена гильдии

```lua
guild.CorrectMemberBalance( members[ 0 ], 1000, comment )
```