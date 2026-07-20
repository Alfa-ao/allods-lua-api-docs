# EditLineSafe:GetCursorPos

Возвращает позицию курсора в EditLine.

## Описание

```lua
EditLineSafe:GetCursorPos(): number
```

Функция возвращает позицию курсора в EditLine.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `number`.

- **`position`** (`number`) - Позиция курсора, `[0..]`.

## Примеры

### Получение позиции курсора

```lua
local index = wtEditLine:GetCursorPos()
```