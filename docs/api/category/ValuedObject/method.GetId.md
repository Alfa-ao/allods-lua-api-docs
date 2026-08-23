# ValuedObject:GetId

Возвращает идентификатор объекта `ValuedObject`.

## Описание

```lua
ValuedObject:GetId(): ObjectId | UniqueId
```

Метод возвращает идентификатор объекта `ValuedObject`. Конкретные значения и типы идентификаторов зависят от типа подставляемого объекта.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `ObjectId` | `UniqueId` - В зависимости от типа подставляемого объекта возвращаются разные типы идентификаторов. См. [TypeValuedObject](/api/types/ValuedObject.md).

## Примеры

### Получение идентификатора в зависимости от типа объекта

```lua
if itemValObj:GetType() == VAL_OBJ_TYPE_ITEM then
    local itemId = itemValObj:GetId() -- ObjectId
elseif itemValObj:GetType() == VAL_OBJ_TYPE_PLAYER then
    local playerUniqueId = playerValObj:GetId() -- UniqueId
end
```

::: info Описание примера
В примере проверяется тип объекта `ValuedObject` с помощью метода `GetType`. Если объект является предметом (`VAL_OBJ_TYPE_ITEM`), извлекается его идентификатор как `ObjectId`. Если объект является игроком (`VAL_OBJ_TYPE_PLAYER`), извлекается его уникальный идентификатор как `UniqueId`.
:::

## Смотрите также

- [VAL_OBJ_TYPE_*](/api/constants/constants.VAL_OBJ_TYPE_.md)