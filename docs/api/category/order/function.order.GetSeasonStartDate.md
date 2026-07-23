# order.GetSeasonStartDate

Возвращает дату начала сезона.

## Описание

```lua
order.GetSeasonStartDate(): table | nil
```

Функция возвращает таблицу с датой начала сезона.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` | `nil` - таблицу с датой начала сезона или `nil`, если данные недоступны.

Структура возвращаемой таблицы:

- **`d`** (`number`) - день начала сезона.

- **`m`** (`number`) - месяц начала сезона.

- **`month`** (`number`) - номер месяца, уменьшенный на 1.

- **`y`** (`number`) - год начала сезона.

- **`sysMonth`** (`number`(`ENUM_MONTH_*`)) - системное перечисление месяца.

## Примеры

### Получение даты начала сезона

```lua
local startDate = order.GetSeasonStartDate()
if startDate then
    LogInfo("Сезон начался: ", startDate.d, ".", startDate.m, ".", startDate.y)
end
```

- [ENUM_MONTH_*](sdfsdf)