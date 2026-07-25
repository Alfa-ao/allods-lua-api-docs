# TextViewSafe:GetWString
Извлекает отображаемую строку из текущего текста, утрачивая все невидимые элементы (теги, стили и т.п.).

## Описание

```lua
TextViewSafe:GetWString()
```

Функция возвращает текстовое содержимое виджета без невидимых элементов. Для получения форматированной строки надлежит использовать сочетание `TextViewSafe:GetValuedText()` и `userMods.FromValuedText()`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `WString` - текстовое содержимое виджета.

## Примеры

### Получение текстового содержимого
```lua
local textContent = wtTextView:GetWString()
```

## Смотрите также

- [TextViewSafe:GetValuedText](method.GetValuedText)
- [userMods.FromValuedText](../../userMods/function.userMods.FromValuedText)