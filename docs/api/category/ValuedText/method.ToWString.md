# ValuedTextSafe:ToWString

Преобразует ValuedText в WString.

## Описание

```lua
ValuedTextSafe:ToWString(): WString
```

Функция возвращает результирующую строку, сохраняя только видимые символы, при этом вся информация о тегах форматирования утрачивается.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `WString` - результирующая строка.

## Примеры

### Преобразование ValuedText в WString

```lua
local valuedText = common.CreateValuedText( {
    format = wtFormatEdit:GetText(),
    class1 = wtClassEdit:GetText(),
    name1 = wtValueEdit:GetText()
} )

local wstr = valuedText:ToWString()
```

## Смотрите также

- [common.CreateValuedText](/api/category/common/function.common.CreateValuedText)