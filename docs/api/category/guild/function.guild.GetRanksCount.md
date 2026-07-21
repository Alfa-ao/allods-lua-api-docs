# guild.GetRanksCount

Возвращает количество рангов в гильдии.

## Описание

```lua
guild.GetRanksCount(): number
```

Функция возвращает количество рангов в гильдии.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `number` - количество рангов.

## Примеры

### Получение информации о последнем ранге

```lua
local rankCount = guild.GetRanksCount()
local rankInfo = guild.GetRankInfo( rankCount - 1 )
if rankInfo then
    LogInfo( "name: ", rankInfo.name )
end
```

::: info Описание примера
В примере сначала запрашивается общее количество рангов в гильдии. Затем извлекается информация о последнем ранге. Если информация успешно получена, в лог выводится имя данного ранга.
:::

## Смотрите также

- [guild.GetRankInfo](function.guild.GetRankInfo)