# unit.IsTrainer

Определяет, является ли юнит учителем.

## Описание

```lua
unit.IsTrainer( id: ObjectId ): boolean
```

Функция возвращает признак того, что юнит является учителем. В некоторых случаях результат может не соответствовать действительности при динамически изменяющейся способности учить. Для уточнения необходимо вызывать `avatar.IsInteractorTrainer()`.

## Список параметров

- **`id`** (`ObjectId`) - Идентификатор юнита. Если передан идентификатор игрока, вернёт `false`.

## Возвращаемые значения

Возвращает `boolean` - `true`, если юнит является учителем, иначе `false`.

## Примеры

### Проверка юнита на учителя

```lua
local isTrainer = unit.IsTrainer( avatar.GetTarget() )
```

## Смотрите также

- [avatar.IsInteractorTrainer](/api/category/avatar/function.avatar.IsInteractorTrainer.md)