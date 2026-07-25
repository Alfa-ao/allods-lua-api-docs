# soulProgressLib.GetSelectedTalents
Возвращает активированные таланты души.

## Описание

```lua
soulProgressLib.GetSelectedTalents(): table
```

Функция возвращает список идентификаторов активных талантов (узлов дерева талантов души).

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - список идентификаторов активных талантов (узлов дерева талантов души). Элементы таблицы имеют тип `number`.

## Примеры

### Получение списка активных талантов
```lua
local talents = soulProgressLib.GetSelectedTalents()
```

## Смотрите также

- [soulProgressLib.RerollSoulTalents](function.soulProgressLib.RerollSoulTalents)