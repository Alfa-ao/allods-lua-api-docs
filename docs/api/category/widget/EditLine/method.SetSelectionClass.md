# EditLineSafe:SetSelectionClass

Задает оформление для выделенного текста в элементе EditLine.

## Описание

```lua
EditLineSafe:SetSelectionClass( className: string | WString )
```

Функция применяет указанный CSS-класс к выделенному тексту в поле ввода EditLine.

## Список параметров

- **`className`** (`string` | `WString`) - Имя CSS-класса, применяемого к выделенному тексту.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Применение CSS-класса к выделенному тексту

```lua
wtEditLine:SetSelectionClass( "tip_red" )
```