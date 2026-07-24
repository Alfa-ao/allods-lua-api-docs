# remortCreation.ToggleZoom

Переключает назумленность камеры на лицо персонажа в экранах выбора или создания нового персонажа.

## Описание

```lua
remortCreation.ToggleZoom()
```

Функция переключает состояние зума камеры: если перед вызовом камера была назумлена на лицо (в крайней ближней точке), она отдаляется, иначе камера назумливается на лицо (в крайнюю ближнюю точку).

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Переключение зума при определенных условиях

```lua
if remortCreation.IsZoomEnabled() and not remortCreation.IsZoomOnFace() then
    remortCreation.ToggleZoom()
end
```

::: info Описание примера
В примере проверяется доступность зума и его текущее направление. Если зум включен, но не направлен на лицо, вызывается функция переключения.
:::

## Смотрите также

- [remortCreation.IsZoomEnabled](function.remortCreation.IsZoomEnabled)
- [remortCreation.IsZoomOnFace](function.remortCreation.IsZoomOnFace)