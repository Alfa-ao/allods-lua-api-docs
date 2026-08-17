# ButtonSafe:GetValuedText

Извлекает текстовое содержимое виджета из текущего варианта кнопки.

## Описание

::: success VERSION: [<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-ButtonSafe:GetValuedText) <Badge type="warning" text="Process" />
Новая API

```lua
ButtonSafe:GetValuedText(): WString
```
:::

Функция возвращает текстовое содержимое виджета (ValuedText), соответствующее текущему варианту кнопки.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `WString` - текстовое содержимое виджета.

## Примеры

### Получение текстового содержимого кнопки
```lua
local textContent = wtButton:GetValuedText()
```