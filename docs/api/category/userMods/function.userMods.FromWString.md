# userMods.FromWString

Возвращает обычную строку.

## Описание

```lua
userMods.FromWString( localizedText )
```

Возвращает обычную строку по исходной локализуемой.

::: warning Замечание
Функцию можно использовать только в пользовательских дополнениях (userMods).
:::

## Список параметров

- **`localizedText`** (`WString`)  
  Исходный локализуемый текст.

## Возвращаемые значения

Возвращает `string` — локализуемый текст, преобразованный в обычный строковый тип Lua.

## Примеры

### Пример #1 Пример использования `FromWString`

```lua
local sysText = userMods.FromWString( localizedText )
```