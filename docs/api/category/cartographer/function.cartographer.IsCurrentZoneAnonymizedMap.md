# cartographer.IsCurrentZoneAnonymizedMap
Проверяет, является ли карта, на которой находится персонаж, анонимной.

## Описание
```lua
cartographer.IsCurrentZoneAnonymizedMap(): boolean
```
Функция возвращает логическое значение, указывающее на то, является ли текущая карта, на которой находится персонаж, анонимной.

## Список параметров
Функция не принимает параметров.

## Возвращаемые значения
Возвращает `boolean` — `true`, если текущая карта является анонимной, и `false` в противном случае.

## Примеры
### Вывод статуса анонимной карты в лог
```lua
local isAnonymized = cartographer.IsCurrentZoneAnonymizedMap()
LogInfo( "Текущая карта анонимна: ", tostring( isAnonymized ) )
```