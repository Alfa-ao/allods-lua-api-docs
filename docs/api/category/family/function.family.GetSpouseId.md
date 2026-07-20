# family.GetSpouseId

Возвращает идентификатор супруга игрока при наличии семьи.

## Описание

```lua
family.GetSpouseId( unitId: ObjectId ): ObjectId | nil
```

Функция возвращает идентификатор супруга указанного игрока, если у игрока имеется семья и информация о супруге доступна. В противном случае возвращается `nil`.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор игрока.

## Возвращаемые значения

Возвращает `ObjectId | nil` - идентификатор супруга игрока, если у него имеется семья и информация о супруге доступна, иначе `nil`.

## Примеры

### Получение имени супруга

```lua
if family.IsExist( unitId ) then
    local spouseId = family.GetSpouseId( unitId )
    if spouseId then
        local spouseName = object.GetName( spouseId )
    end
end
```

::: info Описание примера
В примере предварительно проверяется наличие семьи у игрока с помощью `family.IsExist`. При положительном результате запрашивается идентификатор супруга через `family.GetSpouseId`. Если идентификатор получен (не `nil`), извлекается имя супруга посредством `object.GetName`.
:::

## Смотрите также

- [family.IsExist](function.family.IsExist)
- [object.GetName](function.object.GetName)