# WStringSafe:IsEmpty

Проверяет, является ли строка пустой.

## Описание

```lua
WStringSafe:IsEmpty(): boolean
```

Проверяет, является ли строка (объект `WString`) пустой.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `boolean` - `true`, если строка пустая, и `false` в противном случае.

## Примеры

### Пример использования `IsEmpty`

```lua
local name = userMods.ToWString( "" )

if not name:IsEmpty() then
    -- Строка не пуста
end
```