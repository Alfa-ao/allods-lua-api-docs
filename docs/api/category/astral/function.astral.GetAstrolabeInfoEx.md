# astral.GetAstrolabeInfoEx
Возвращает информацию о доступных и потенциально доступных секторах для быстрого путешествия.

## Описание
```lua
astral.GetAstrolabeInfoEx(): table
```
Функция извлекает и возвращает сведения о секторах астрала, в которые возможен прыжок. В выдаче присутствуют как непосредственно доступные, так и потенциально доступные для перемещения сектора, сгруппированные по уровням.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` — таблицу, индексированную начиная с `1`. Значениями выступают таблицы, описывающие уровни доступных секторов со следующими полями:
- **`techLevel`** (`number`) — уровень доступных секторов для прыжка.
- **`sectors`** (`table`) — таблица, индексированная начиная с `1`, содержащая идентификаторы (`ObjectId`) секторов.

## Примеры
### Получение информации и переход в доступный сектор
```lua
-- прыжок в первый же доступный сектор
local levels = astral.GetAstrolabeInfoEx()
for _, level in ipairs( levels ) do
    for _, sectorId in ipairs( level.sectors ) do
        local sectorInfo = astral.GetSectorInfo( sectorId )
        LogInfo( "Jump to: ", level.techLevel, ", name: ", sectorInfo.name )
    end
end
```
::: info Описание примера
В примере запрашивается информация о доступных секторах с помощью `astral.GetAstrolabeInfoEx`. Затем происходит перебор всех уровней и секторов внутри них. Для каждого сектора извлекается дополнительная информация через `astral.GetSectorInfo`, после чего в лог выводится уровень и имя сектора.
:::

## Смотрите также
- [EVENT_ASTROLABE_INFO_CHANGED](events.astral#event-astrolabe-info-changed)
- [astral.AstrolabeJump](function.astral.AstrolabeJump)
- [astral.GetSectorInfo](function.astral.GetSectorInfo)