# mission.GetMonthDaysCount
Возвращает количество дней указанного месяца и года.

## Описание

```lua
mission.GetMonthDaysCount( month: number, year: number ): number
```

Функция определяет и возвращает количество дней в заданных месяце и году.

## Список параметров

- **`month`** (`number`) - Номер месяца. Нумерация начинается с `1`.

- **`year`** (`number`) - Номер года.

## Возвращаемые значения

Возвращает `number` - количество дней в указанном месяце.

## Примеры

### Получение количества дней в феврале 2012 года

```lua
local days = mission.GetMonthDaysCount( 2, 2012 )
LogInfo( "days count: ", days )
```