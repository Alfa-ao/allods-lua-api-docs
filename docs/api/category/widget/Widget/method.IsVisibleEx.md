# WidgetSafe:IsVisibleEx

Определяет видимость контрола с учётом видимости всех его родителей.

## Описание

```lua
WidgetSafe:IsVisibleEx(): boolean
```

Функция возвращает логическое значение, определяющее видимость виджета с учётом видимости всех его родителей. Если хотя бы один родитель в цепочке не виден, возвращается `false`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `boolean` - `true`, если виджет виден с учётом видимости всех его родителей (если хотя бы один из цепочки родителей не виден, то и виджет-потомок не виден), иначе `false`.

## Примеры

### Проверка видимости виджета

```lua
local visible = widget:IsVisibleEx()
```

## Смотрите также

- [WidgetSafe:IsVisible](method.IsVisible.md)
- [WidgetSafe:Show](method.Show.md)
- [EVENT_WIDGET_SHOW_CHANGED](/api/events/events.EVENT_WIDGET_.md#event-widget-show-changed)