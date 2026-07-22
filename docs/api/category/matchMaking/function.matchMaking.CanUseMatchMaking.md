# matchMaking.CanUseMatchMaking
Определяет, может ли аватар вообще участвовать в инстанс-ивентах.

## Описание
```lua
matchMaking.CanUseMatchMaking(): boolean, string
```
Функция возвращает результат проверки возможности участия аватара в инстанс-ивентах.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `boolean`, `string`:
- **`boolean`** - `true`, если аватар может участвовать в инстанс-ивентах и получать информацию о них; `false`, если нет.

- **`string`** (`string`(`ENUM_ActionFailCause_*`)) - строка с причиной, если первое значение `false`.

## Примеры
### Проверка возможности участия и подписка на события
```lua
if matchMaking.CanUseMatchMaking() then
    matchMaking.ListenEvents( true )
end
```

::: info Описание примера
Проверяется возможность участия аватара в инстанс-ивентах. Если результат положительный, инициируется прослушивание событий через функцию `matchMaking.ListenEvents`.
:::

## Смотрите также
- [ENUM_ActionFailCause_*](../constants#enum-actionfailcause)