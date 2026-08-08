# WidgetSafe:GetRealRect

Возвращает текущее расположение контрола в абсолютных координатах (в пикселях).

## Описание

```lua
WidgetSafe:GetRealRect(): table
```

Функция возвращает таблицу с текущим расположением контрола в абсолютных координатах (в пикселях).

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - таблица с координатами и размерами контрола:

- **`x1`** (`number`) - координата левого края контрола.

- **`y1`** (`number`) - координата верхнего края контрола.

- **`x2`** (`number`) - координата правого края контрола.

- **`y2`** (`number`) - координата нижнего края контрола.

- **`x`** (`number`) - ширина контрола (x2-x1).

- **`y`** (`number`) - высота контрола (y2-y1).

## Примеры

### Получение координат и позиционирование тултипа

```lua
local rect = wtItem:GetRealRect()

local place = wtTooltip:GetPlacementPlain()
place.alignX = WIDGET_ALIGN_LOW_ABS
place.alignY = WIDGET_ALIGN_LOW_ABS
place.posX = params.rect.x1
place.posY = params.rect.y1
wtTooltip:SetPlacementPlain( place )
```

::: info Описание примера
Получаются абсолютные координаты контрола `wtItem` через метод `GetRealRect()`. Затем извлекается текущее размещение тултипа `wtTooltip` через `GetPlacementPlain()`, выравнивание устанавливается в абсолютные координаты (`WIDGET_ALIGN_LOW_ABS`), а позиция привязывается к левому верхнему углу контрола (`rect.x1`, `rect.y1`). Обновлённое размещение применяется через `SetPlacementPlain()`.
:::

## Смотрите также

- [WidgetSafe:GetPlacementPlain](method.GetPlacementPlain.md)
- [WidgetSafe:SetPlacementPlain](method.SetPlacementPlain.md)