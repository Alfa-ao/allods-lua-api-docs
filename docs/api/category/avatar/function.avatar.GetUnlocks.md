# avatar.GetUnlocks
Возвращает список идентификаторов всех доступных возможностей (анлоков) главного персонажа.

## Описание

```lua
avatar.GetUnlocks(): table
```

Функция возвращает таблицу, содержащую идентификаторы всех доступных возможностей (анлоков) главного персонажа. Если у персонажа отсутствуют какие-либо возможности, возвращается пустая таблица.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - таблицу идентификаторов (`ObjectId`) возможностей. Индексация элементов в таблице начинается с нуля. При отсутствии возможностей возвращается пустая таблица.

## Примеры

### Перебор и вывод названий всех доступных возможностей
```lua
local unlocks = avatar.GetUnlocks()
for _, unlockId in ipairs( unlocks ) do
    local info = avatar.GetUnlockInfo( unlockId )
    if info then
        LogInfo( info.name )
    end
end
```

::: info Описание примера
Извлекается таблица идентификаторов всех доступных возможностей. В цикле перебираются элементы таблицы с учетом индексации с нуля. Для каждого идентификатора запрашивается подробная информация через `avatar.GetUnlockInfo`. Если информация успешно получена, в лог выводится название возможности.
:::

## Смотрите также

- [avatar.GetInfiniteUnlocks](/api/category/avatar/function.avatar.GetInfiniteUnlocks)
- [avatar.GetTemporaryUnlocks](/api/category/avatar/function.avatar.GetTemporaryUnlocks)
- [avatar.GetUnlockInfo](/api/category/avatar/function.avatar.GetUnlockInfo)
- [avatar.HasUnlock](/api/category/avatar/function.avatar.HasUnlock)