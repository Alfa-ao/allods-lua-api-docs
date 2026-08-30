# unit.GetSex

Возвращает информацию о поле игрока.

## Описание

```lua
unit.GetSex( unitId: ObjectId ): table|nil
```

Функция извлекает и возвращает информацию о поле игрока. Если игрок не найден или передан идентификатор NPC или моба, возвращается `nil`.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор игрока.

## Возвращаемые значения

Возвращает `table` | `nil` - таблицу с информацией о поле игрока или `nil`, если игрок не найден.

- **`sex`** (`number`(`SEX_*`)) - Пол игрока.

- **`name`** (`WString`) - Локализованное имя пола.

- **`raceSexName`** (`WString`) - Локализованное расозависимое имя пола.

::: info Перечисление
- SEX_UNKNOWN
- SEX_MALE
- SEX_FEMALE
:::

## Примеры

### Получение пола игрока

```lua
local sex = unit.GetSex( unitId )
if sex then
    common.LogInfo( sex.raceSexName .. " - это " .. sex.name )
end
```

## Смотрите также

- [SEX_*](/api/constants/constants.SEX.md)