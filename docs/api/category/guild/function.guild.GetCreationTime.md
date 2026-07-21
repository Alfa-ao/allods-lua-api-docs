# guild.GetCreationTime

Получает время создания гильдии.

## Описание

```lua
guild.GetCreationTime(): table|nil
```

Функция возвращает время создания гильдии.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает таблицу (`table`) с полями `LuaFullDateTime`, если информация доступна, или `nil` в противном случае.

## Примеры

### Получение времени создания гильдии

```lua
local time = guild.GetCreationTime()
if time then
    local year = time.y
end
```

## Смотрите также

- [LuaFullDateTime](LuaFullDateTime)