# object.IsUnit

Проверяет, является ли интерактивный объект юнитом (игроком, мобом или NPC).

## Описание

```lua
object.IsUnit( id: ObjectId ): boolean
```

Функция возвращает логическое значение, указывающее, является ли интерактивный объект юнитом (игроком, мобом или NPC).

## Список параметров

- **`id`** (`ObjectId`) - Идентификатор объекта.

## Возвращаемые значения

Возвращает `boolean` - `true`, если интерактивный объект является юнитом, и `false` в противном случае.

## Примеры

### Проверка цели на принадлежность к юнитам

```lua
local id = avatar.GetTarget()
if object.IsUnit( id ) then
    local name = object.GetName( id )
end
```

::: info Описание примера
В примере сначала получается идентификатор текущей цели с помощью `avatar.GetTarget()`. Затем проверяется, является ли полученный объект юнитом. Если проверка успешна, извлекается имя юнита через `object.GetName()`.
:::

## Смотрите также

- [avatar.GetTarget](/api/category/avatar/function.avatar.GetTarget.md)
- [object.GetName](/api/category/object/function.object.GetName.md)