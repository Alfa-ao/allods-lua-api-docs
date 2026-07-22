# object.GetDistance

Возвращает расстояние между аватаром и каким-либо объектом.

## Описание

```lua
object.GetDistance( objectId: ObjectId, is2D: boolean | nil, isInternal: boolean | nil ): float | nil
```

Вычисление расстояния между аватаром и объектом. Объект обязан быть валидным. В случае невозможности вычисления возвращается `nil`.

## Список параметров

- **`objectId`** (`ObjectId`) - идентификатор объекта.

- **`is2D`** (`boolean` | `nil`) - считать расстояние в 2D, игнорировать разницу по высоте. По умолчанию `false`.

- **`isInternal`** (`boolean` | `nil`) - игнорировать фильтр детектируемости объекта. По умолчанию `false`. Для пользовательских дополнений всегда `false`.

## Возвращаемые значения

Возвращает `float` | `nil` - дистанция между аватаром и объектом (в метрах) или `nil`, если получить таковую не удалось.

## Примеры

### Вычисление расстояния до объекта

```lua
local distance = object.GetDistance( objectId )
if distance and distance < NEAR_DISTANCE then
    LogInfo( "Object is near" )
else
    LogInfo( "Object is far" )
end
```

## Смотрите также

- [GamePosition](GamePosition)