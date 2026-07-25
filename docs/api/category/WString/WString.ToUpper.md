# WStringSafe:ToUpper

Конвертирует строку в верхний регистр.

## Описание

```lua
WStringSafe:ToUpper(): WString
```

Конвертирует строку в верхний регистр.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `WString` - новую строку, конвертированную в верхний регистр.

## Примеры

### Пример использования `ToUpper`

```lua
local title = userMods.ToWString( "teXXt" )
local uppercasedTitle = title:ToUpper() -- TEXXT
```