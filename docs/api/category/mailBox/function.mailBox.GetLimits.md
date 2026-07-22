# mailBox.GetLimits

Возвращает ограничения на письма.

## Описание

```lua
mailBox.GetLimits(): table
```

Функция возвращает ограничения на письма.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - таблица с ограничениями:

- **`maxMailItemsCount`** (`number`) - ограничение на максимальное число предметов в письме.

## Примеры

### Получение ограничений

```lua
local limits = mailBox.GetLimits()
LogInfo( "maxMailItemsCount: ", maxMailItemsCount )
```