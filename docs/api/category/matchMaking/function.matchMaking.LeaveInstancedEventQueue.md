# matchMaking.LeaveInstancedEventQueue

Выходит из очереди на инстанс-ивент.

## Описание

```lua
matchMaking.LeaveInstancedEventQueue( eventId: ObjectId )
```

Функция инициирует выход главного персонажа из очереди на указанный инстанс-ивент. Если аватар не состоит в очереди на заданный инстанс-ивент, вызов функции считается ошибкой. Для предварительной проверки состояния очереди используется функция `matchMaking.GetEventInfo` (поле `isAvatarJoined`).

::: warning Замечание
Если аватар не стоит в очереди на заданный инстанс-ивент, вызов функции приводит к ошибке.
:::

## Список параметров

- **`eventId`** (`ObjectId`) - Идентификатор соответствующего инстанс-ивента.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Выход из очереди на инстанс-ивент

```lua
local info = matchMaking.GetEventInfo( eventId )
if info and not info.isAvatarJoined then
    matchMaking.LeaveInstancedEventQueue( eventId )
end
```

::: info Описание примера
В примере запрашивается информация об инстанс-ивенте через `matchMaking.GetEventInfo`. Если данные получены и поле `isAvatarJoined` указывает на то, что аватар не состоит в очереди, выполняется вызов `matchMaking.LeaveInstancedEventQueue` для выхода из очереди.
:::

## Смотрите также

- [matchMaking.GetEventInfo](function.matchMaking.GetEventInfo)