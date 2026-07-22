# object.IsDevice
Определяет, является ли интерактивный объект устройством.

## Описание
```lua
object.IsDevice( id: ObjectId ): boolean
```
Функция возвращает `true`, если интерактивный объект является устройством.

## Список параметров
- **`id`** (`ObjectId`) - Уникальный идентификатор объекта.

## Возвращаемые значения
Возвращает `boolean` - `true`, если интерактивный объект является устройством.

## Примеры
### Проверка объекта на принадлежность к устройствам
```lua
local id = avatar.GetTarget()
if object.IsDevice( id ) then
    local name = device.GetName( id )
end
```

::: info Описание примера
В примере извлекается идентификатор текущей цели персонажа. Если объект является устройством, происходит получение его имени.
:::

## Смотрите также
- [avatar.GetTarget](../avatar/function.avatar.GetTarget)
- [device.GetName](../device/function.device.GetName)