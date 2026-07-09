# WString:ToLower

Конвертирует строку в нижний регистр.

## Описание

```lua
WString:ToLower()
```

Конвертирует строку в нижний регистр.

## Список параметров

- **`self`** (`WString`)  
  Объект `WString`. Не может быть `nil`.

## Возвращаемые значения

Возвращает `WString` — конвертированную строку в нижнем регистре.

## Примеры

### Пример #1 Пример использования `ToLower`

```lua
local title = userMods.ToWString( "teXXt" )
local lowercasedTitle = title:ToLower() -- texxt
```