# remort.GetResetRemortRequirements

Возвращает информацию о требованиях расы при пересоздании реморта.

## Описание

```lua
remort.GetResetRemortRequirements( oldRaceSysName: string ): table|nil
```

Функция возвращает таблицу с информацией о требованиях расы при пересоздании реморта. Если произошла ошибка, возвращается `nil`. В случае успеха возвращается таблица, где ключом является `string`, а значением выступает `RequirementsTable`, представляющая собой список условий для сброса имеющегося реморта.

## Список параметров

- **`oldRaceSysName`** (`string`) - Системное имя расы.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица с информацией о требованиях или `nil` в случае ошибки. Если нет ошибки, возвращается таблица, где ключом выступает `string`, а значением является `RequirementsTable` (список условий для сброса имеющегося реморта).

## Примеры

### Получение требований для сброса реморта

```lua
local oldRaceSysName = "elf"
local requirements = remort.GetResetRemortRequirements( oldRaceSysName )

if requirements then
    LogInfo( "Требования для сброса реморта получены." )
else
    LogInfo( "Ошибка получения требований." )
end
```

## Смотрите также

- [RequirementsTable](/api/types/RequirementsTable.md)