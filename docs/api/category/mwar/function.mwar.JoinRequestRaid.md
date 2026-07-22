# mwar.JoinRequestRaid

Инициирует вступление рейдом в сражение Доминиона.

## Описание

```lua
mwar.JoinRequestRaid( targetGuildId: ObjectId )
```

Функция отправляет запрос на вступление рейдом в сражение Доминиона против указанной гильдии.

## Список параметров

- **`targetGuildId`** (`ObjectId`) - Идентификатор гильдии, с которой будет сражение.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Отправка запроса на вступление в сражение

```lua
mwar.JoinRequestRaid( targetGuildId )
```

## Смотрите также

- [mwar.GetRatingProgressInfo](function.mwar.GetRatingProgressInfo)