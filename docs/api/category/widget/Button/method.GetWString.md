# ButtonSafe:GetWString
Получает отображаемую строку из текста текущего варианта кнопки.

## Описание
```lua
ButtonSafe:GetWString(): WString
```
Извлекает текстовое содержимое виджета, при этом все невидимые элементы (теги, стили и тому подобное) отбрасываются. Для получения исходной форматной строки требуется использовать связку функций `ButtonSafe:GetValuedText` и `userMods.FromValuedText`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `WString` — текстовое содержимое виджета без невидимых элементов форматирования.

## Примеры
### Получение текстового содержимого кнопки
```lua
local textContent = wtButton:GetWString()
```

## Смотрите также
- [ButtonSafe:GetValuedText](ButtonSafe.GetValuedText)
- [userMods.FromValuedText](userMods.FromValuedText)