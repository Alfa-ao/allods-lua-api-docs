# matchMaking.GetRatingURL

Возвращает URL страницы топа рейтинговой арены.

## Описание

```lua
matchMaking.GetRatingURL( arenaType: number ): string | nil
```

Функция формирует и возвращает адрес страницы с топом указанной рейтинговой арены.

## Список параметров

- **`arenaType`** (`number`(`ENUM_RatingArenaType`)) - Тип рейтинговой арены.

## Возвращаемые значения

Возвращает `string` | `nil` - адрес страницы с топом.

## Примеры

### Получение URL топа арены

```lua
local ratingURL = matchMaking.GetRatingURL( ENUM_RatingArenaType_6x6 )
```

## Смотрите также

- [ENUM_RatingArenaType](enums#enum-ratingarenatype)