# unit.GetPetName

Возвращает имя моба-пета игрока.

## Описание

::: danger VERSION: [<Badge type="warning" text="17.0.01.43" />](/index.md#17.0.0-unit.GetPetName)

Функция удалена.

```lua
unit.GetPetName( unitId: ObjectId ): WString | nil
```
:::

Возвращает имя моба-пета игрока. Если персонаж не является петом (который может иметь имя) игрока, возвращается `nil`. Работает только для мобов.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор моба.

## Возвращаемые значения

Возвращает `WString` | `nil` - Имя пета или `nil`, если моб не является петом.

## Примеры

### Получение имени пета

```lua
if not unit.IsPlayer( unitId ) then
    local pet = unit.GetPetName( unitId )
    if pet then
        LogInfo( "pet: ", userMods.FromWString( pet ) )
    end
end
```