# object.IsDetected

Определяет, детектируется ли интерактивный объект отслеживающими его детекторами.

## Описание

```lua
object.IsDetected( objectId: ObjectId ): boolean
```

Функция проверяет, находится ли указанный интерактивный объект в зоне обнаружения отслеживающих его детекторов.

## Список параметров

- **`objectId`** (`ObjectId`) - Уникальный идентификатор интерактивного объекта.

## Возвращаемые значения

Возвращает `boolean` - `true`, если объект детектируется, и `false` в противном случае.

## Примеры

### Проверка детектирования и получение списка детекторов

```lua
if object.IsDetected( objectId ) then
    local detectors = object.GetDetectors( objectId )
    for i, sysName in pairs( detectors ) do
        LogInfo( sysName )
    end
end
```

::: info Описание примера
В примере сначала проверяется, детектируется ли объект с помощью `object.IsDetected`. Если проверка успешна, извлекается список детекторов через `object.GetDetectors`, после чего в цикле перебираются и выводятся в лог их системные имена.
:::

## Смотрите также

- [object.GetDetectors](function.object.GetDetectors)