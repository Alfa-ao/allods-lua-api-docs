# WidgetSafe:GetBackgroundColor

Возвращает цвет фонового слоя контрола.

## Описание

```lua
WidgetSafe:GetBackgroundColor(): Color
```

Функция возвращает цвет фонового слоя контрола. Сам фоновый слой должен быть в наличии. Описание цвета представлено в типе `Color`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `Color` - цвет слоя.

## Примеры

### Получение цвета фона

```lua
local color = wtElement:GetBackgroundColor()
LogInfo( "color (r/g/b/a): ", color.r, "/", color.g, "/", color.b, "/", color.a )
```

## Смотрите также

- [Color](sdfgdsfgdsfg)