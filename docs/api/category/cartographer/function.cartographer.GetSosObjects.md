# cartographer.GetSosObjects
Возвращает таблицу с идентификаторами объектов SOS.

## Описание
```lua
cartographer.GetSosObjects(): table
```
Функция возвращает индексированную с единицы таблицу, содержащую уникальные идентификаторы объектов SOS. Объекты SOS представляют собой специальные маркеры на карте, которые появляются при использовании другим игроком фракции главного персонажа особого фейерверка.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` — индексированную с единицы таблицу, содержащую идентификаторы (`ObjectId`) объектов SOS.

## Примеры
### Перебор и получение информации об объектах SOS
```lua
for _, sosObjectId in ipairs( cartographer.GetSosObjects() ) do
    local sosObject = cartographer.GetSosInfo( sosObjectId )
end
```

## Смотрите также
- [cartographer.GetSosInfo](function.cartographer.GetSosInfo)