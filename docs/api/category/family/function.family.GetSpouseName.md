# family.GetSpouseName

Возвращает имя супруга, если у главного игрока имеется семья.

## Описание

```lua
family.GetSpouseName( unitId: ObjectId ): WString|nil
```

Функция возвращает имя супруга, если у главного игрока имеется семья.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор игрока.

## Возвращаемые значения

Возвращает `WString` или `nil` - имя супруга, если у главного игрока имеется семья.

## Примеры

### Получение имени супруга

```lua
if family.IsExist( unitId ) then
    local spouse = family.GetSpouseName( unitId )
end
```

::: info Описание примера
В примере проверяется наличие семьи у игрока с помощью функции `family.IsExist`. Если семья существует, извлекается и сохраняется в переменную имя супруга посредством вызова `family.GetSpouseName`.
:::

## Смотрите также

- [family.IsExist](function.family.IsExist)