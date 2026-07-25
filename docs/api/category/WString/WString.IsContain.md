# WStringSafe:IsContain

Определяет, содержит ли строка подстроку.

## Описание

```lua
WStringSafe:IsContain( part: WString, ignoreRegistry: boolean|nil ): boolean|nil
```

Функция выполняет регистрозависимую `ignoreRegistry` проверку, которая указывает, содержится ли подстрока `part` в строке `WStringSafe`.

::: warning Замечание
В случае ошибки типа возвращается `nil`.
:::

## Список параметров

- **`part`** (`WString`) - Строка, проверяемая на вхождение.

- **`ignoreRegistry`** (`boolean` | `nil`) - Игнорировать регистр. По умолчанию `false`.

## Возвращаемые значения

Возвращает `boolean` | `nil` - `true` если является `part` подстрокой `WStringSafe`, либо `false`.

## Примеры

### Пример использования `IsContain`

```lua
local result = userMods.ToWString( "Text" ):IsContain( "xt" ) -- result = true
```