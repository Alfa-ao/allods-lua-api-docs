# common.GetDelayedCalls
Получает информацию о запланированных вызовах для текущего аддона.

## Описание
```lua
common.GetDelayedCalls(): table
```
Функция возвращает список запланированных вызовов для текущего аддона. Планирование отложенного вызова осуществляется с помощью функции `common.DelayedCall`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` (индексация с 1), содержащую таблицы запланированных вызовов. Каждый элемент представляет собой таблицу со следующими полями:
- **`executeTimestamp`** (`number` | `int64`)
Отметка времени, когда произойдет вызов (не ранее указанного времени, возможна задержка до 2 кадров).
- **`function`** (`function`)
Запланированная к вызову функция.
- **`functionRef`** (`number` | `int`)
Ссылка на функцию, по которой можно отменить вызов.
- **`arguments`** (`table`)
Список аргументов запланированного вызова (от 0 до 10 штук, индексация с 1).

## Примеры
### Логирование отложенных вызовов
```lua
function LogDeferredFunctions()
  LogInfo( "----------------------------------------------------------------------------" )
  LogInfo( "---------------------[advEvent deferred function calls]---------------------" )
  local list = common.GetDelayedCalls()
  local ts = common.GetAbsTimeMs()
  if next( list ) then
    for _, record in ipairs( list ) do
      LogInfo( string.format( "Handler %s (ref %d) will launch on [%d] (remaining %d ms)",
        record["function"], record.functionRef, record.executeTimestamp, record.executeTimestamp - ts ) )
    end
    LogInfo( "----------------------------------------------------------------------------" )
    LogInfo( string.format( "Current time: %d", ts ) )
  else
    LogInfo( "Empty list" )
  end
  LogInfo( "----------------------------------------------------------------------------" )
end
```
::: info Описание примера
В примере запрашивается список отложенных вызовов и текущее абсолютное время. Если список не пуст, происходит перебор записей и форматированный вывод информации о каждой запланированной функции, включая время её запуска и оставшееся время до вызова. В противном случае выводится сообщение об отсутствии записей.
:::

## Смотрите также
- [common.DelayedCall](common.DelayedCall)
- [common.CancelDelayedCall](common.CancelDelayedCall)