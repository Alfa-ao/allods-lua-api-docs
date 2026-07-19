# changeRoom.IsZoomOnFar
Определяет, отзумлена ли камера на максимум.

## Описание
```lua
changeRoom.IsZoomOnFar(): boolean
```
Функция возвращает логическое значение, указывающее на то, что камера отзумлена на максимум при выборе или создании персонажа. При изменении состояния зума передается событие `EVENT_CHANGE_ROOM_ZOOM_TRIGGER_CHANGED`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `boolean` — `true`, если камера отзумлена на максимум, и `false` в противном случае.

## Примеры
### Переключение зума, если он не установлен на максимум
```lua
if changeRoom.IsZoomEnabled() and not changeRoom.IsZoomOnFar() then
  changeRoom.ToggleZoom()
end
```
::: info Описание примера
В примере проверяется, включена ли возможность зума (`changeRoom.IsZoomEnabled()`), и если камера при этом не отзумлена на максимум (`not changeRoom.IsZoomOnFar()`), инициируется переключение зума (`changeRoom.ToggleZoom()`).
:::

## Смотрите также
- [EVENT_CHANGE_ROOM_ZOOM_TRIGGER_CHANGED](events.changeRoom#event-change-room-zoom-trigger-changed)
- [changeRoom.IsZoomEnabled](function.changeRoom.IsZoomEnabled)
- [changeRoom.ToggleZoom](function.changeRoom.ToggleZoom)