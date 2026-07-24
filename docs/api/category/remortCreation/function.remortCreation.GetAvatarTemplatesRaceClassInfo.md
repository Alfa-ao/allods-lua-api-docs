# remortCreation.GetAvatarTemplatesRaceClassInfo

Возвращает информацию о расе и классе по их индексам.

## Описание

```lua
remortCreation.GetAvatarTemplatesRaceClassInfo( faction: number, race: number, class: number ): table
```

Функция извлекает и возвращает таблицу с информацией о расе и классе, используя их числовые индексы.

::: tip Совет
Функция реализована на стороне пользовательского интерфейса (UI).
:::

## Список параметров

- **`faction`** (`number`) - Индекс фракции [0..].

- **`race`** (`number`) - Индекс расы [0..].

- **`class`** (`number`) - Индекс класса [0..].

## Возвращаемые значения

Возвращает `table` - таблица с информацией о расе и классе, содержащая следующие поля:

- **`name`** (`WString`) - Локализованное название расы-класса.

- **`description`** (`WString`) - Локализованное описание расы-класса.

- **`sysName`** (`string`) - Идентификатор расы-класса.

- **`classId`** (`CharacterClassId`) - Идентификатор класса игрока.

## Примеры

### Получение и вывод информации о расе-классе

```lua
local raceClass = remortCreation.GetAvatarTemplatesRaceClassInfo( template.faction, template.race, template.class )
LogInfo( 
    "raceClass: name: ", debugCommon.FromWString( raceClass.name ),
    ", desc: ", debugCommon.FromWString( raceClass.description ),
    ", sysName: ", raceClass.sysName 
)
```