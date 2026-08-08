# unit.GetPlayerValuedObject
Возвращает новый экземпляр ValuedObject по имени игрока.

## Описание

```lua
unit.GetPlayerValuedObject( name: WString, shardName: WString, uniqueId: WString ): ValuedObject
```

Функция формирует и возвращает новый экземпляр `ValuedObject`. Тип объекта устанавливается в `VAL_OBJ_TYPE_PLAYER`. Текстовое представление содержит имя игрока, изображение отсутствует, а в качестве идентификатора (`Id`) выступает имя игрока (`WString`).

::: warning Замечание
Поскольку `ValuedObject` является userdata, Lua работает с ними по ссылке, а не по значению.
:::

## Список параметров

- **`name`** (`WString`) - Имя персонажа.

- **`shardName`** (`WString`) - Имя шарда персонажа. Параметр является необязательным. Значение упаковывается в `ValuedObject` и может быть извлечено с помощью `GetShardName`.

- **`uniqueId`** (`WString`) - Уникальный идентификатор персонажа. Параметр является необязательным. Значение аналогично извлекается с помощью метода `GetId`.

## Возвращаемые значения

Возвращает `ValuedObject` - новый экземпляр `ValuedObject`.

## Примеры

### Получение объекта игрока
```lua
local valuedObject = unit.GetPlayerValuedObject( playerName, playerShardName )
```

## Смотрите также

- [GetShardName](/api/category/ValuedObject/method.GetShardName.md)