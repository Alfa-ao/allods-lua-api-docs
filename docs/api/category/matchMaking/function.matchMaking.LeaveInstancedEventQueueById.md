# matchMaking.LeaveInstancedEventQueueById
Выводит аватар из очереди на инстанс-ивент.

## Описание
```lua
matchMaking.LeaveInstancedEventQueueById( eventResourceId: InstancedEventResourceId )
```
Функция выводит аватар из очереди на инстанс-ивент. Если аватар не находится в очереди на заданный инстанс-ивент, вызов функции считается ошибкой.

## Список параметров
- **`eventResourceId`** (`InstancedEventResourceId`) - Идентификатор ресурса соответствующего инстанс-ивента.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Выход из очереди на инстанс-ивент
```lua
matchMaking.LeaveInstancedEventQueueById( eventResourceId )
```

## Смотрите также
- [InstancedEventResourceId](#)