# remortCreation.GetAvatarTemplatesInfo
Возвращает информацию о шаблонах для аватаров.

## Описание
```lua
remortCreation.GetAvatarTemplatesInfo(): table
```
Функция возвращает таблицу с информацией о доступных фракциях, расах, классах и полах для аватаров.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` - таблицу с информацией о шаблонах аватаров, содержащую следующие поля:

- **`growthCount`** (`number`) - количество стадий развития персонажа.

- **`factions`** (`table` of `tables`) - таблица с доступными фракциями, индексированная `[0..]` и содержащая таблицы со следующими полями:

    - **`name`** (`WString`) - локализованное название фракции.

    - **`sysName`** (`string`) - системное название фракции.

    - **`races`** (`table` of `tables`) - таблица с доступными расами, индексированная `[0..]` и содержащая таблицы со следующими полями:

        - **`name`** (`WString`) - локализованное название расы.

        - **`sysName`** (`string`) - системное название расы.

        - **`raceChangeType`** (`number`(`ENUM_RedefineRaceType`)) - режим смены расы, для которого подходит данная раса. (HELP)

        - **`classes`** (`table` of `tables`) - таблица с доступными классами, индексированная `[0..]` и содержащая таблицы со следующими полями:

            - **`name`** (`WString`) - локализованное название класса.

            - **`sysName`** (`string`) - системное название класса.

            - **`uiName`** (`WString`) - локализованное дополнительное название класса.

            - **`classId`** (`CharacterClassId`) - идентификатор класса игрока.

- **`sexes`** (`table` of `tables`) - таблица с доступными полами, индексированная `[0..]` и содержащая таблицы со следующими полями:

    - **`name`** (`WString`) - локализованное название пола персонажа.

## Примеры
### Получение информации о шаблонах аватаров
```lua
local templatesInfo = remortCreation.GetAvatarTemplatesInfo()
common.LogInfo( "fraction: " .. userMods.FromWString( templatesInfo.factions[0].name ) )
common.LogInfo( "race: " .. userMods.FromWString( templatesInfo.factions[0].races[0].name ) )
common.LogInfo( "class: " .. userMods.FromWString( templatesInfo.factions[0].races[0].classes[0].name ) )
common.LogInfo( "sex: " .. userMods.FromWString( templatesInfo.sexes[0].name ) )
```