# ValuedObject:GetText

Возвращает текст ValuedObject-а.

## Описание

```lua
ValuedObject:GetText(): WString
```

Функция возвращает текст, представляющий обёртываемый объект в UI.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `WString` - текст, представляющий обёртываемый объект в UI.

## Примеры

### Получение текста ValuedObject

```lua
local text = itemValObj:GetText()
```