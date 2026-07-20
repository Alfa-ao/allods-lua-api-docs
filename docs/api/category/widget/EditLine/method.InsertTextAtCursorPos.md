# EditLineSafe:InsertTextAtCursorPos

Вставляет текст в текущую позицию курсора EditLine.

## Описание

```lua
EditLineSafe:InsertTextAtCursorPos( text: WString )
```

Функция заменяет выделенный фрагмент текста в EditLine на вставляемый текст, либо вставляет текст в текущую позицию курсора при отсутствии выделения.

## Список параметров

- **`text`** (`WString`) - Вставляемый текст.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Вставка текста в EditLine

```lua
wtEditLine:InsertTextAtCursorPos( debugCommon.ToWString( "текст" ) )
```