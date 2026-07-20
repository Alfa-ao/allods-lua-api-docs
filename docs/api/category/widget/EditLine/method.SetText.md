# EditLineSafe:SetText

Задает текст для EditLine.

## Описание

```lua
EditLineSafe:SetText( text: WString )
```

Функция устанавливает указанный текст для элемента EditLine.

## Список параметров

- **`text`** (`WString`) - Устанавливаемый текст.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Установка текста

```lua
wtEditLine:SetText( userMods.ToWString( "текст" ) )
```