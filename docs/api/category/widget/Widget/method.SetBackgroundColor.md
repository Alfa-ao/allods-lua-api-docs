# WidgetSafe:SetBackgroundColor

Задает цвет для фонового слоя контрола.

## Описание

```lua
WidgetSafe:SetBackgroundColor( color: Color )
```

Фоновый слой должен присутствовать. Описание цвета представлено в типе `Color`.

## Список параметров

- **`color`** (`Color`) - Новый цвет для слоя.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Использование метода

```lua
wtElement:SetBackgroundColor( { r = 1.0; g = 0.0; b = 0.0; a = 1.0 } )
wtElement:SetBackgroundColor( { r = 1.0 } ) -- изменит только красную компоненту цвета
```

## Смотрите также

- [Color](Color)