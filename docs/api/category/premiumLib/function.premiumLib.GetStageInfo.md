# premiumLib.GetStageInfo

Возвращает информацию о стадии премиума.

## Описание

```lua
premiumLib.GetStageInfo( stage: number ): table | nil
```

Функция извлекает и возвращает детальную информацию о заданной стадии премиума. Если указанная стадия не найдена, функция возвращает `nil`.

## Список параметров

- **`stage`** (`number`) - Стадия премиума.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица с информацией о стадии или `nil`, если стадия не найдена.

- **`description`** (`WString`) - Описание стадии.

- **`buffs`** (`table` | `nil`) - Список эффектов (`BuffId`). Индексация начинается с 1. Значение равно `nil`, если список пуст.

## Примеры

### Получение информации о стадии

```lua
local stageInfo = premiumLib.GetStageInfo( 1 )
```

## Смотрите также

- [EVENT_PREMIUM_STAGE_CHANGED](events#event-premium-stage-changed)