# mission.GetWorldTimeMs

Возвращает серверное время в формате unixTimeMs.

## Описание

```lua
mission.GetWorldTimeMs(): number
```

Функция возвращает серверное время в формате unixTimeMs. Значение обновляется один раз в кадр.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `number` - Серверное время в формате unixTimeMs.

## Примеры

### Получение и вывод серверного времени

```lua
local worldTimeMs = mission.GetWorldTimeMs()
LogInfo( "Текущее серверное время: " .. worldTimeMs )
```