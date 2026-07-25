# WStringSafe:ToLower

Конвертирует строку в нижний регистр.

## Описание

```lua
WStringSafe:ToLower(): WString
```

Конвертирует строку в нижний регистр.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `WString` - конвертированную строку в нижнем регистре.

## Примеры

### Пример использования `ToLower`

```lua
local title = userMods.ToWString( "teXXt" )
local lowercasedTitle = title:ToLower() -- texxt
```