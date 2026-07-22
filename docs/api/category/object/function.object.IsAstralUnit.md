# object.IsAstralUnit
Проверяет, является ли интерактивный объект астральным юнитом.

## Описание
```lua
object.IsAstralUnit( id: ObjectId ): boolean
```
Функция возвращает `true`, если интерактивный объект является астральным юнитом, и `false` в противном случае.

## Список параметров
- **`id`** (`ObjectId`) - Уникальный идентификатор интерактивного объекта.

## Возвращаемые значения
Возвращает `boolean` - `true`, если объект является астральным юнитом, иначе `false`.

## Примеры
### Проверка цели на принадлежность к астральным юнитам
```lua
local id = avatar.GetTarget()
if object.IsAstralUnit( id ) then
    local name = object.GetName( id )
end
```

::: info Описание примера
В примере получается идентификатор текущей цели с помощью `avatar.GetTarget()`. Затем проверяется, является ли данный объект астральным юнитом. Если проверка успешна, извлекается имя объекта через `object.GetName()` для дальнейшего использования.
:::

## Смотрите также
- [avatar.GetTarget](../avatar/function.avatar.GetTarget)
- [object.GetName](../object/function.object.GetName)