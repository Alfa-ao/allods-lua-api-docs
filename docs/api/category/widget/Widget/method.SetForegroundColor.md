# WidgetSafe:SetForegroundColor

Задает цвет для переднего слоя виджета.

## Описание

```lua
WidgetSafe:SetForegroundColor( color: Color )
```

Задает цвет для переднего слоя виджета. Сам передний слой должен быть в наличии.

## Список параметров

- **`color`** (`Color`) - Новый цвет для слоя.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Задание цвета переднего слоя

```lua
wtElement:SetForegroundColor( { r = 1.0; g = 0.0; b = 0.0; a = 1.0 } )
wtElement:SetForegroundColor( { r = 1.0 } ) -- изменит только красную компоненту цвета
```

## Смотрите также

- [Color](/api/types/LuaApi.md)