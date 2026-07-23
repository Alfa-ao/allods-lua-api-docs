# premiumLib.GetInfo
Возвращает общую информацию о премиуме.

## Описание
```lua
premiumLib.GetInfo(): table
```
Функция возвращает таблицу, содержащую информацию о премиуме.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` - таблица с информацией о премиуме:

- **`stageNumber`** (`number`) - стадия

- **`bonusStageNumber`** (`number`) - бонусные ступени

- **`totalStages`** (`number`) - общее количество возможных ступеней

- **`stageProgress`** (`number`) - прогресс стадии

- **`sumToNextStage`** (`number`) - сумма до следующей стадии

- **`totalProgress`** (`number`) - общий прогресс

- **`totalSum`** (`number`) - общая сумма

## Примеры
### Получение информации о премиуме
```lua
local premiumInfo = premiumLib.GetInfo()
```

## Смотрите также
- [EVENT_PREMIUM_CHANGED](../events#event-premium-changed)