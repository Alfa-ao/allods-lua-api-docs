# remortCreation.IsZoomOnFace

Проверяет, назумлена ли камера на лицо при выборе или создании персонажа.

## Описание

```lua
remortCreation.IsZoomOnFace(): boolean
```

Функция возвращает состояние масштабирования камеры. При изменении состояния приходит событие `EVENT_REMORT_ZOOM_TRIGGER_CHANGED`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `boolean` - `true`, если камера назумлена на лицо.

## Примеры

### Проверка и переключение масштабирования камеры

```lua
if remortCreation.IsZoomEnabled() and not remortCreation.IsZoomOnFace() then
    remortCreation.ToggleZoom()
end
```

::: info Описание примера
В примере проверяется, включено ли масштабирование и не назумлена ли камера на лицо. Если условия выполняются, вызывается функция переключения масштабирования.
:::

## Смотрите также

- [EVENT_REMORT_ZOOM_TRIGGER_CHANGED](events.remort#event-remort-zoom-trigger-changed)
- [remortCreation.IsZoomEnabled](function.remortCreation.IsZoomEnabled)
- [remortCreation.ToggleZoom](function.remortCreation.ToggleZoom)