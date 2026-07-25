# WidgetSafe:GetForegroundColor

Возвращает цвет переднего слоя контрола.

## Описание

```lua
WidgetSafe:GetForegroundColor(): Color
```

Функция возвращает цвет переднего слоя контрола. Сам передний слой должен быть в наличии.

::: warning Замечание
Метод доступен для всех типов виджетов (WidgetSafe).
:::

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `Color` - цвет слоя.

## Примеры

### Получение и вывод цвета переднего слоя

```lua
local color = wtElement:GetForegroundColor()
LogInfo( "color (r/g/b/a): ", color.r, "/", color.g, "/", color.b, "/", color.a )
```

## Смотрите также

- [Color](dfgdfg)