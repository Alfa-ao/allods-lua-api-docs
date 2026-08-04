# remortCreation.IsZoomOnFar
Определяет, отзумлена ли камера на максимум при выборе или создании персонажа.

## Описание

```lua
remortCreation.IsZoomOnFar(): boolean
```

Функция возвращает состояние максимального зума камеры. При изменении состояния зума передается событие `EVENT_REMORT_ZOOM_TRIGGER_CHANGED`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `boolean` - `true`, если камера отзумлена на максимум, и `false` в противном случае.

## Примеры

### Проверка и изменение состояния зума
```lua
if remortCreation.IsZoomEnabled() and not remortCreation.IsZoomOnFar() then
    remortCreation.ToggleZoom()
end
```

::: info Описание примера
В примере проверяется, включен ли зум и не находится ли камера в состоянии максимального отдаления. Если условия выполняются, вызывается функция переключения зума.
:::

## Смотрите также

- [EVENT_REMORT_ZOOM_TRIGGER_CHANGED](/api/events/events.EVENT_REMORT_.md#event-remort-zoom-trigger-changed)
- [remortCreation.IsZoomEnabled](/api/category/remortCreation/function.remortCreation.IsZoomEnabled.md)
- [remortCreation.ToggleZoom](/api/category/remortCreation/function.remortCreation.ToggleZoom.md)