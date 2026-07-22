# object.HasBuffManager

Проверяет возможность наличия баффов у интерактивного объекта.

## Описание

```lua
object.HasBuffManager( id: any ): boolean
```

Проверка возможности наличия баффов у интерактивного объекта. Если аргумент не является идентификатором интерактивного объекта, возвращается `false` без возникновения ошибки.

::: warning Замечание
Наличие или отсутствие бафф-менеджера у объекта определяется исключительно его типом. Ситуация, когда объект валиден и, согласно типу, должен иметь бафф-менеджер, но не имеет такового, является клиентской ошибкой.
:::

## Список параметров

- **`id`** (`any`) - Произвольное значение.

## Возвращаемые значения

Возвращает `boolean` - `true`, если объект может иметь баффы.

## Примеры

### Проверка наличия бафф-менеджера

```lua
local hasBuffManager = object.HasBuffManager( avatar.GetId() )
local spellHasBuffManager = object.HasBuffManager( avatar.GetSpellbook()[1] )
```

## Смотрите также

- [avatar.GetId](../avatar/function.avatar.GetId)
- [avatar.GetSpellbook](../avatar/function.avatar.GetSpellbook)