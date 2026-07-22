# mwar.GetCommonInfo
Возвращает ряд общих параметров механики Доминион.

## Описание
```lua
mwar.GetCommonInfo(): table | nil
```
Функция возвращает структуру данных, содержащую общие параметры механики Доминион. Если информация отсутствует, возвращается `nil`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` | `nil` - если информация доступна, таблица с полями, иначе `nil`:

- **`serviceResourceIncreaseMax`** (`number`) - максимальное значение увеличения эффективности при создании обслуживающего ресурса ("Могущество").

- **`serviceResourceIncomeIncrease`** (`number`) - шаг увеличения эффективности при создании обслуживающего ресурса.

- **`serviceResourceExchangeCost`** (`number`) - стоимость покупки (в меди) одной единицы обслуживающего ресурса.

- **`serviceResourceCostIncrease`** (`number`) - увеличение стоимости покупки с каждым увеличением эффективности (множитель).

- **`serviceResource`** (`CurrencyId` | `nil`) - обслуживающий ресурс гильдии игрока ("Могущество").

- **`regionProgressIncome`** (`number`)

- **`pvpResource`** (`CurrencyId` | `nil`) - PvP-ресурс гильдии игрока ("Слава").

- **`pveResource`** (`CurrencyId` | `nil`) - PvE-ресурс гильдии игрока ("Престиж").

- **`mapProgressCounterCap`** (`number`) - максимальное значение прогресса карты Доминион.

- **`serviceResourceExchangeFactor`** (`number`) - курс обмена PvP- и PvE-ресурсов на обслуживающий ресурс.

- **`minResourceEffectivnessFactor`** (`number`) - коэффициент уменьшения эффективности покупки обслуживающего ресурса при большой разнице между PvP- и PvE-ресурсами.

- **`maxInitialAttackSectorsCount`** (`number`) - максимальное количество секторов, которое можно атаковать изначально.

- **`championFightsTimes`** (`table` | `nil`) - список возможных времён начала сражений за сектора, индексированная целыми числами (начиная от 0) таблица, формат элементов:

  - `entries` (`table` | `nil`) - список времён начала раундов сражения, значения - `TimeTableId`.

## Примеры
### Получение общих параметров механики Доминион
```lua
local info = mwar.GetCommonInfo()
```

## Смотрите также
- [mwar.SetSectorBattleTime](function.mwar.SetSectorBattleTime)
- [CurrencyId:GetInfo()](#)
- [TimeTableId](#)