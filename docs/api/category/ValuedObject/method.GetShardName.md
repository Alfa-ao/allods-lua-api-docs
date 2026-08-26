# ValuedObject:GetShardName

Возвращает имя шарда.

## Описание

```lua
ValuedObject:GetShardName(): WString
```

Функция возвращает имя шарда или `nil`, если метод вызван для объекта, не являющегося игроком.

::: warning Замечание

Метод доступен только у `ValuedObjectPlayer`. ~~У остальных `ValuedObject` возвращается `nil`.~~

**Иначе выбрасывает исключение:**

```
UI::LuaValuedObjectGetShardName: ValuedObject is not ValuedObjectPlayer
```

:::

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `WString` - имя шарда.

## Примеры

### Получение имени шарда для игрока

```lua
if itemValObj:GetType() == VAL_OBJ_TYPE_PLAYER then
    local shardName = itemValObj:GetShardName()
end
```

## Смотрите также

- [VAL_OBJ_TYPE_PLAYER](/api/constants/constants.VAL_OBJ_TYPE_.md)