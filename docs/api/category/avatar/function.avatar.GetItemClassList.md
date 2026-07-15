# avatar.GetItemClassList
Возвращает список классов предметов (ItemClass).

## Описание
```lua
avatar.GetItemClassList(): table
```
Функция возвращает таблицу, содержащую перечисление классов предметов (`ItemClass`), которые может экипировать или использовать главный аватар. Индексация элементов в возвращаемой таблице начинается с нуля.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` — таблицу со значениями типа `ItemClass`, индексированную начиная с `0`.

## Примеры
### Получение и обработка списка доступных классов предметов
```lua
local itemClassList = avatar.GetItemClassList()
if itemClassList then
    for i = 0, GetTableSize(itemClassList) - 1 do
        LogInfo("Доступный класс предмета: ", itemClassList[i])
    end
end
```