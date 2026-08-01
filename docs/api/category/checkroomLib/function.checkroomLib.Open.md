# checkroomLib.Open
Открывает гардероб.

## Описание

```lua
checkroomLib.Open()
```

Функция открывает гардероб. Содержимое гардероба передается на клиент, после чего передается событие `EVENT_CHECKROOM_CHANGED`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Открытие гардероба с проверкой состояния
```lua
if not checkroomLib.IsOpened() then
    checkroomLib.Open()
end
```

## Смотрите также

- [EVENT_CHECKROOM_CHANGED](/api/events/events.EVENT_CHECKROOM_.md#event-checkroom-changed)
- [checkroomLib.IsOpened](/api/category/checkroomLib/function.checkroomLib.IsOpened.md)