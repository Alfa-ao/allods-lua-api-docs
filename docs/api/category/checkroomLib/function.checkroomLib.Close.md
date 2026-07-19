# checkroomLib.Close
Закрывает гардероб.

## Описание
```lua
checkroomLib.Close()
```
Функция убирает содержимое гардероба с клиента. По завершении операции клиенту передается событие `EVENT_CHECKROOM_CHANGED`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Закрытие гардероба с предварительной проверкой

```lua
if checkroomLib.IsOpened() then
    checkroomLib.Close()
end
```

## Смотрите также

- [checkroomLib.IsOpened](checkroomLib.IsOpened)