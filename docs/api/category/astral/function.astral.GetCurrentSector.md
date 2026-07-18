# astral.GetCurrentSector

Возвращает идентификатор текущего астрального сектора, в котором находится игрок.

## Описание

```lua
astral.GetCurrentSector(): ObjectId | nil
```

Функция возвращает идентификатор текущего астрального сектора, в котором находится игрок.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

`ObjectId` | `nil` — идентификатор сектора, если игрок находится в астральном секторе.

## Примеры

### Получение и проверка идентификатора сектора

```lua
local sectorId = astral.GetCurrentSector()
if sectorId then
    local sectorInfo = astral.GetSectorInfo()
    if sectorInfo then
        LogInfo(sectorInfo.name)
    end
end
```

::: info Описание примера
В примере запрашивается идентификатор текущего астрального сектора. При его наличии извлекается дополнительная информация о секторе с помощью `astral.GetSectorInfo()`, после чего выводится имя сектора в информационный лог.
:::

## Смотрите также

- [astral.GetSectorInfo](astral.GetSectorInfo)