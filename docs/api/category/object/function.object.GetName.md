# object.GetName
Возвращает имя юнита.

## Описание
```lua
object.GetName( objectId: ObjectId ): WString
```
Функция извлекает и возвращает имя интерактивного объекта по его идентификатору. Если имя не определено, возвращается пустая строка.

## Список параметров
- **`objectId`** (`ObjectId`) - Идентификатор интерактивного объекта.

## Возвращаемые значения
Возвращает `WString` - имя юнита. Если имя не определено, возвращается пустая строка.

## Примеры
### Получение имен различных объектов
```lua
local objectName = object.GetName( objectId )
local targetName = object.GetName( avatar.GetTarget() )
local transportName = object.GetName( unit.GetTransport( avatar.GetId() ) )
```
::: info Описание примера
В примере демонстрируется получение имен различных объектов: произвольного объекта по идентификатору, текущей цели игрока и транспорта, на котором находится главный персонаж.
:::

## Смотрите также
- [avatar.GetTarget](../avatar/function.avatar.GetTarget)
- [unit.GetTransport](../unit/function.unit.GetTransport)