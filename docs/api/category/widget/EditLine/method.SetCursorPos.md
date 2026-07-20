# EditLineSafe:SetCursorPos

Задает позицию курсора для EditLine.

## Описание

```lua
EditLineSafe:SetCursorPos( index: number )
```

Функция задает позицию курсора для элемента EditLine.

## Список параметров

- **`index`** (`number`) - Позиция курсора. Нумерация начинается с `0`.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Установка курсора в начало

```lua
wtEditLine:SetCursorPos( 0 )
```