# mission.FreePortrait

Освобождает ресурсы портрета заданного размера в указанном слоте.

## Описание

```lua
mission.FreePortrait( slotIndex: number, isSmall: boolean )
```

Функция также очищает фоновые слои для всех контролов, которые использовали указанный портрет.

## Список параметров

- **`slotIndex`** (`number`) - Индекс слота. Принимает значения от `0` до `3` для нормальных портретов и от `0` до `15` для маленьких.

- **`isSmall`** (`boolean`) - Флаг, указывающий на использование портрета в маленьком разрешении.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Освобождение слота для нормального портрета

```lua
mission.FreePortrait( 0, false )
```

## Смотрите также

- [mission.SetPortraitBackgroundTexture](function.mission.SetPortraitBackgroundTexture)
- [EVENT_MISSION_FREE_PORTRAIT_SLOT](events.mission#event-mission-free-portrait-slot)