# ValuedObject:GetShardName

Возвращает имя шарда.

## Описание

```lua
ValuedObject:GetShardName(): WString | nil
```

Функция возвращает имя шарда или `nil`, если метод вызван для объекта, не являющегося игроком.

::: warning Замечание

Метод доступен только у `ValuedObjectPlayer`. У остальных `ValuedObject` возвращается `nil`.

:::

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `WString` | `nil` - имя шарда или `nil`.

## Примеры

### Получение имени шарда для игрока

```lua
if itemValObj:GetType() == VAL_OBJ_TYPE_PLAYER then
    local shardName = itemValObj:GetShardName()
end
```

## Смотрите также

- [VAL_OBJ_TYPE_PLAYER](/api/constants/constants.VAL_OBJ_TYPE_.md)