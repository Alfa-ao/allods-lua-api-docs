# remortCreation.IsZoomEnabled
Определяет возможность приближения камеры к лицу при выборе или создании персонажа.

## Описание

```lua
remortCreation.IsZoomEnabled(): boolean
```

Функция возвращает состояние доступности приближения камеры к лицу персонажа. В данном состоянии также допускается изменение масштаба колесом мыши. При изменении состояния передается событие `EVENT_REMORT_ZOOM_TRIGGER_CHANGED`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `boolean` - `true`, если можно приблизить камеру к лицу.

## Примеры

### Проверка и переключение масштаба
```lua
if remortCreation.IsZoomEnabled() and not remortCreation.IsZoomOnFace() then
    remortCreation.ToggleZoom()
end
```

::: info Описание примера
В примере проверяется возможность приближения камеры и текущее состояние масштаба. Если приближение доступно и камера не направлена на лицо, вызывается функция переключения масштаба.
:::

## Смотрите также

- [EVENT_REMORT_ZOOM_TRIGGER_CHANGED](/api/events/events.EVENT_REMORT_.md#event-remort-zoom-trigger-changed)
- [remortCreation.IsZoomOnFace](/api/category/remortCreation/function.remortCreation.IsZoomOnFace.md)
- [remortCreation.ToggleZoom](/api/category/remortCreation/function.remortCreation.ToggleZoom.md)