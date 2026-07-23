# object.RemoveFromProjected

Удаляет объект из списка для проецирования в 2D координаты.

## Описание

```lua
object.RemoveFromProjected( objectId: ObjectId )
```

Функция удаляет указанный объект из списка для проецирования в 2D координаты.

## Список параметров

- **`objectId`** (`ObjectId`) - Идентификатор объекта.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Удаление цели из списка проецирования

```lua
object.RemoveFromProjected( avatar.GetTarget() )
```

## Смотрите также

- [avatar.GetTarget](../avatar/function.avatar.GetTarget)