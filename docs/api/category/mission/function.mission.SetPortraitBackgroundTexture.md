# mission.SetPortraitBackgroundTexture

Генерирует портрет юнита и помещает его текстуру в фоновый слой указанного контрола.

## Описание

```lua
mission.SetPortraitBackgroundTexture( slotIndex: number, isSmall: boolean, wtPortrait: WidgetSafe, unitId: ObjectId )
```

Функция формирует текстуру портрета юнита и устанавливает её в фоновый слой заданного контрола.

## Список параметров

- **`slotIndex`** (`number`) - индекс слота, 0..3 для нормальных портретов, 0..15 для маленьких

- **`isSmall`** (`boolean`) - определяет, следует ли задавать портрет в маленьком разрешении

- **`wtPortrait`** (`WidgetSafe`) - контрол, для фонового слоя которого задается текстура портрета

- **`unitId`** (`ObjectId`) - идентификатор юнита, для которого задается портрет

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Генерация и установка портрета

```lua
mission.SetPortraitBackgroundTexture( 0, false, wtPortrait, avatar.GetId() )
```

## Смотрите также

- [mission.FreePortrait](../mission/function.mission.FreePortrait)
- [EVENT_MISSION_FREE_PORTRAIT_SLOT](../events#event-mission-free-portrait-slot)
- [Portraits](../classes#portraits)