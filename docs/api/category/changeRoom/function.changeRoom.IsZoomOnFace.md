# changeRoom.IsZoomOnFace
Определяет, назумлена ли камера на лицо при выборе или создании персонажа.

## Описание
```lua
changeRoom.IsZoomOnFace(): boolean
```
Функция возвращает логическое значение, указывающее на состояние зума камеры в интерфейсе выбора или создания персонажа. Если камера сфокусирована на лице, возвращается `true`, в противном случае — `false`. При изменении данного состояния передается событие `EVENT_CHANGE_ROOM_ZOOM_TRIGGER_CHANGED`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `boolean` — `true`, если камера назумлена на лицо, и `false` в противном случае.

## Примеры
### Переключение зума при отсутствии фокуса на лице
```lua
if changeRoom.IsZoomEnabled() and not changeRoom.IsZoomOnFace() then
  changeRoom.ToggleZoom()
end
```
::: info Описание примера
В примере выполняется проверка того, включен ли зум (`changeRoom.IsZoomEnabled()`), и не сфокусирована ли камера на лице (`not changeRoom.IsZoomOnFace()`). Если зум включен, но лицо не в фокусе, инициируется переключение зума через вызов `changeRoom.ToggleZoom()`.
:::

## Смотрите также
- [EVENT_CHANGE_ROOM_ZOOM_TRIGGER_CHANGED](events.changeRoom#event-change-room-zoom-trigger-changed)
- [changeRoom.IsZoomEnabled](function.changeRoom.IsZoomEnabled)
- [changeRoom.ToggleZoom](function.changeRoom.ToggleZoom)