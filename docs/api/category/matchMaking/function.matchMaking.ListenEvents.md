# matchMaking.ListenEvents
Включает или выключает получение и отслеживание информации о существующих в игре инстанс-ивентах.

## Описание
```lua
matchMaking.ListenEvents( needListen: boolean )
```
Функция включает или выключает получение и отслеживание информации о существующих в игре инстанс-ивентах.

## Список параметров
- **`needListen`** (`boolean`) - `true`, чтобы начать отслеживание; `false`, чтобы закончить.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Включение отслеживания инстанс-ивентов
```lua
if matchMaking.CanUseMatchMaking() then
    matchMaking.ListenEvents( true )
end
```

::: info Описание примера
В примере проверяется возможность использования системы подбора с помощью функции `matchMaking.CanUseMatchMaking`. Если проверка успешна, включается отслеживание событий инстанс-ивентов вызовом `matchMaking.ListenEvents` с параметром `true`.
:::

## Смотрите также
- [matchMaking.CanUseMatchMaking](function.matchMaking.CanUseMatchMaking)