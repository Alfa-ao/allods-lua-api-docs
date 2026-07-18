# cartographer.IsCurrentZoneRiftMap
Проверяет, является ли текущая зона рифтом.

## Описание
```lua
cartographer.IsCurrentZoneRiftMap(): boolean
```
Функция проверяет, находится ли текущий персонаж на карте рифта, и возвращает логическое значение результата проверки.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
`boolean` — `true`, если текущая зона является рифтом, и `false` в противном случае.

## Примеры
### Проверка типа текущей зоны
```lua
local isRiftMap = cartographer.IsCurrentZoneRiftMap()
LogInfo( "Является ли зона рифтом: ", isRiftMap )
```