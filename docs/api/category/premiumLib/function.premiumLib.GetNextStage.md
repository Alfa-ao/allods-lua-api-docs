# premiumLib.GetNextStage

Возвращает номер следующей стадии премиума.

## Описание

```lua
premiumLib.GetNextStage(): number | nil
```

Функция возвращает номер следующей стадии премиума, если она существует.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `number` | `nil` - номер следующей стадии премиума, если она существует, или `nil` в противном случае.

## Примеры

### Получение номера следующей стадии

```lua
local nextPremiumStage = premiumLib.GetNextStage()
```

## Смотрите также

- [premiumLib.GetStageInfo](function.premiumLib.GetStageInfo)