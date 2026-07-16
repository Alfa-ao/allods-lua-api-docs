# avatar.HasHearthStone
Возвращает признак наличия камня возвращения (HearthStone) у аватара.

## Описание
```lua
avatar.HasHearthStone(): boolean
```
Функция возвращает логическое значение, указывающее на наличие камня возвращения (HearthStone) у главного персонажа.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `boolean` — `true`, если у аватара имеется камень возвращения (HearthStone), и `false` в противном случае.

## Примеры
### Проверка наличия камня возвращения
```lua
if avatar.HasHearthStone() then
    LogInfo( "Avatar has HearthStone" )
end
```