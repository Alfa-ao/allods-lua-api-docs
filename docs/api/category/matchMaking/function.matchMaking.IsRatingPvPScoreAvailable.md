# matchMaking.IsRatingPvPScoreAvailable

Проверяет доступность получения информации о рейтингах.

## Описание

```lua
matchMaking.IsRatingPvPScoreAvailable(): boolean
```

Функция возвращает флаг, указывающий на доступность получения информации о рейтингах.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `boolean` - `true`, если получение информации о рейтингах доступно, и `false` в противном случае.

## Примеры

### Проверка доступности информации о рейтингах

```lua
local ratingInfoAvailable = matchMaking.IsRatingPvPScoreAvailable()
if ratingInfoAvailable then
    LogInfo( "Rating info available" )
end
```