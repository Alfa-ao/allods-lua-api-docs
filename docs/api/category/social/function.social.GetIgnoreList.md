# social.GetIgnoreList
Возвращает список игнорирования текущего аватара игрока.

## Описание
```lua
social.GetIgnoreList(): table
```
Функция возвращает индексированную с `0` таблицу с идентификаторами элементов из списка игнорирования текущего аватара игрока. Подробности о каждом элементе списка можно получить посредством вызова `social.GetIgnoreInfo()`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` (`ObjectId`) - индексированную с `0` таблицу с идентификаторами элементов из списка игнорирования игрока.

## Примеры
### Получение и обход списка игнорирования
```lua
local ignories = social.GetIgnoreList()
for i = 0, GetTableSize( ignories ) - 1 do
    local ignoreInfo = social.GetIgnoreInfo( ignories[ i ] )
    if ignoreInfo then
        local ignoreName = ignoreInfo.name
    end
end
```
::: info Описание примера
В примере извлекается список идентификаторов игнорируемых игроков. Далее в цикле происходит обход полученной таблицы и запрос подробной информации о каждом элементе посредством вызова `social.GetIgnoreInfo()`.
:::

## Смотрите также
- [social.GetIgnoreInfo](function.social.GetIgnoreInfo)