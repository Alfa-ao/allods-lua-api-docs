# matchMaking.ReturnToBattle

Возвращает аватара в инстанс-ивент, если он его покинул, но остался в рейде или группе.

## Описание

```lua
matchMaking.ReturnToBattle()
```

Функция возвращает аватара в инстанс-ивент, если он его покинул, но остался в рейде или группе. Предварительно требуется проверить возможность возврата с помощью функции `matchMaking.CanReturnToBattle()`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Возврат в инстанс-ивент

```lua
if matchMaking.CanReturnToBattle() then
    matchMaking.ReturnToBattle()
end
```

::: info Описание примера
В примере проверяется возможность возврата в инстанс-ивент. Если функция `matchMaking.CanReturnToBattle()` возвращает истину, выполняется вызов `matchMaking.ReturnToBattle()` для фактического возврата.
:::

## Смотрите также

- [matchMaking.CanReturnToBattle](function.matchMaking.CanReturnToBattle)