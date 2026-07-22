# matchMaking.IsEventProgressExist

Определяет наличие информации о прогрессе текущего инстанс-ивента.

## Описание

```lua
matchMaking.IsEventProgressExist(): boolean
```

Функция возвращает статус наличия информации о прогрессе текущего инстанс-ивента. Возвращает `true`, если инстанс-ивент уже завершился либо получение информации о прогрессе включено запросом `matchMaking.ListenEventProgress()` и данные уже получены. Возвращает `false`, если информация отсутствует.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `boolean` - `true`, если инстанс-ивент уже завершился (либо получение информации о прогрессе текущего инстанс-ивента включено запросом `matchMaking.ListenEventProgress()`) и информация уже получена; `false`, если информация отсутствует.

## Примеры

### Проверка наличия информации о прогрессе

```lua
if matchMaking.IsEventProgressExist() then
    LogInfo( "Info: ", matchMaking.GetEventProgressInfo() )
end
```

::: info Описание примера
В примере проверяется наличие информации о прогрессе инстанс-ивента. При положительном результате в лог выводится информация, полученная посредством вызова функции `matchMaking.GetEventProgressInfo()`.
:::

## Смотрите также

- [matchMaking.ListenEventProgress](function.matchMaking.ListenEventProgress)
- [matchMaking.GetEventProgressInfo](function.matchMaking.GetEventProgressInfo)