# WString:ToUpper

Конвертирует строку в верхний регистр.

## Описание

```lua
WString:ToUpper()
```

Конвертирует строку в верхний регистр.

## Список параметров

- **`self`** (`WString`)  
Объект `WString`, который необходимо преобразовать.

## Возвращаемые значения

Возвращает `WString` — новую строку, конвертированную в верхний регистр.

## Примеры

### Пример использования `ToUpper`

```lua
local title = userMods.ToWString( "teXXt" )
local uppercasedTitle = title:ToUpper() -- TEXXT
```