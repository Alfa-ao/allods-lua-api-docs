# TextViewSafe:GetValuedText

Возвращает текст, находящийся в контроле.

## Описание

```lua
TextViewSafe:GetValuedText(): WString
```

Функция возвращает текстовое содержимое контрола.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `WString` - текст, находящийся в контроле.

## Примеры

### Получение и вывод текста контрола

```lua
local text = wtTextView:GetValuedText()
LogInfo( userMods.FromValuedText( text, false ) )
```

::: info Описание примера
Извлекается текст из контрола `wtTextView` и выводится в информационный лог после преобразования из формата ValuedText.
:::