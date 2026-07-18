# cartographer.CanNavigateToPoint
Проверяет возможность построения пути для указанной интерфейсной карты.

## Описание
```lua
cartographer.CanNavigateToPoint( zonesMapId: ObjectId ): boolean
```
Функция анализирует заданную интерфейсную карту и определяет, существует ли доступный маршрут до целевой точки. Результат проверки используется для валидации возможности запуска навигации перед непосредственным вызовом функций перемещения.

## Список параметров
- **`zonesMapId`** (`ObjectId`)
Уникальный идентификатор интерфейсной карты, для которой выполняется проверка доступности пути.

## Возвращаемые значения
Возвращает `boolean` — `true`, если путь к точке на указанной карте может быть найден, и `false` в противном случае.

## Примеры
### Проверка возможности и запуск навигации
```lua
if cartographer.CanNavigateToPoint( questLocation.zonesMapId ) then
    cartographer.NavigateToPoint( questLocation.zonesMapId, questLocation.position )
end
```
::: info Описание примера
В примере сначала выполняется проверка возможности построения маршрута для карты, указанной в `questLocation.zonesMapId`. Если функция возвращает `true`, инициируется процесс навигации к точке `questLocation.position` на этой же карте с помощью функции `cartographer.NavigateToPoint`.
:::

## Смотрите также
- [cartographer.NavigateToPoint](cartographer.NavigateToPoint)