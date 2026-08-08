# unit.GetPetName

Возвращает имя моба-пета игрока.

## Описание

```lua
unit.GetPetName( unitId: ObjectId ): WString | nil
```

Функция извлекает имя моба-пета игрока. Если указанный персонаж не является петом игрока, возвращается `nil`. Функция работает исключительно для мобов.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор моба.

## Возвращаемые значения

Возвращает `WString` | `nil` - Имя пета, либо `nil`, если моб не является петом.

## Примеры

### Получение имени пета моба

```lua
if not object.IsPlayer( unitId ) then
    local pet = unit.GetPetName( unitId )
    if pet then
        LogInfo( "pet: ", userMods.FromWString( pet ) )
    end
end
```

::: info Описание примера
В примере сначала проверяется, не является ли указанный юнит игроком. Если юнит не является игроком, извлекается имя его пета. При успешном получении имени, оно выводится в информационный лог с предварительным преобразованием из `WString`.
:::

## Смотрите также

- [object.IsPlayer](/api/category/object/function.object.IsPlayer.md)
- [userMods.FromWString](/api/category/userMods/function.userMods.FromWString.md)