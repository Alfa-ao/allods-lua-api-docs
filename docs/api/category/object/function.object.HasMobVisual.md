# object.HasMobVisual
Проверяет, выглядит ли интерактивный объект как моб.

## Описание

```lua
object.HasMobVisual( id: ObjectId ): boolean
```

Функция возвращает логическое значение, определяющее визуальное сходство интерактивного объекта с мобом.

## Список параметров

- **`id`** (`ObjectId`) - Уникальный идентификатор интерактивного объекта.

## Возвращаемые значения

Возвращает `boolean` - `true`, если интерактивный объект выглядит как моб, иначе `false`.

## Примеры

### Проверка визуального типа целевого объекта

```lua
local hasMobVisual = object.HasMobVisual( avatar.GetTarget() )
```

## Смотрите также

- [avatar.GetTarget](../avatar/function.avatar.GetTarget)