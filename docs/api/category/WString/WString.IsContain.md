# WString:IsContain

Определяет, содержит ли строка подстроку.

## Описание

```lua
WString:IsContain( part, ignoreRegistry )
```

Функция выполняет регистрозависимую `ignoreRegistry` проверку, которая указывает, содержится ли подстрока `part` в строке `self`.

::: warning Замечание
В случае ошибки типа возвращается `nil`.
:::

## Список параметров

- **`part`** (`WString`)  
  Строка, проверяемая на вхождение.

- **`ignoreRegistry`** (`boolean` | `nil`)  
  Игнорировать регистр. По умолчанию `false`.

## Возвращаемые значения

Возвращает `boolean` — является ли `part` подстрокой `self`.  
В случае ошибки типа возвращается `nil`.

## Примеры

### Пример использования `IsContain`

```lua
local result = userMods.ToWString( "Text" ):IsContain( "xt" ) -- result = true
```