# WStringSafe:ToAbbr

Конвертирует строку в аббревиатуру.

## Описание

```lua
WStringSafe:ToAbbr(): WString
```

Конвертирует строку в аббревиатуру (сумма первых букв каждого слова).

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `WString` - конвертированную строку, состоящую из первых букв каждого слова исходной строки.

## Примеры

### Пример использования `ToAbbr`

```lua
local title = userMods.ToWString( "Long title with multiple words" )
local abbr = title:ToAbbr() -- "Ltwmw"
```