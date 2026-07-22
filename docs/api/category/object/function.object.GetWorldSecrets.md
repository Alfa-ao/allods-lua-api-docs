# object.GetWorldSecrets
Возвращает список идентификаторов тайн мира, которые может завершить указанный объект.

## Описание
```lua
object.GetWorldSecrets( objectId: ObjectId ): table
```
В списке возвращаются только тайны мира, открытые игроком. Объект может иметь привязанную тайну мира, но возвращать пустой список, если ни одна тайна ещё не была открыта или начата для исследования игроком.

## Список параметров
- **`objectId`** (`ObjectId`) - идентификатор интерактивного объекта.

## Возвращаемые значения
Возвращает `table` - индексированный с 1 список идентификаторов тайн мира `ObjectId`.

## Примеры
### Получение и перебор списка тайн мира
```lua
local secrets = object.GetWorldSecrets( objectId )
for i, secretId in pairs( secrets ) do
    local secretInfo = avatar.GetSecretInfo( secretId )
end
```

::: info Описание примера
Запрашивается список идентификаторов тайн мира для указанного объекта. Затем в цикле перебирается полученная таблица, и для каждого идентификатора извлекается полная информация о тайне с помощью функции `avatar.GetSecretInfo`.
:::

## Смотрите также
- [object.HasWorldSecret](function.object.HasWorldSecret)
- [avatar.GetSecretInfo](../avatar/function.avatar.GetSecretInfo)