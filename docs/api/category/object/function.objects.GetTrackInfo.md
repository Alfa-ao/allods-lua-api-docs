# objects.GetTrackInfo
Возвращает описание отслеживаемого объекта в зоне игрока.

## Описание
```lua
objects.GetTrackInfo( trackId: ObjectId ): table | nil
```
Функция извлекает и возвращает описание отслеживаемого объекта (Track), такого как хорунжий, находящегося в зоне игрока.

## Список параметров
- **`trackId`** (`ObjectId`) - Идентификатор отслеживаемого объекта (Track).

## Возвращаемые значения
Возвращает `table` | `nil` - Описание объекта. Таблица (если объект найден) со следующими полями:

- **`id`** (`ObjectId`) - Идентификатор отслеживаемого объекта (Track).

- **`objectId`** (`ObjectId` | `nil`) - Идентификатор отслеживаемого объекта, может отсутствовать.

- **`playerName`** (`WString`) - Имя объекта (например, игрока).

- **`text`** (`WString`) - Описание объекта. Может быть шаблоном строки.

- **`sysName`** (`string`) - Техническая спецификация Track-а.

- **`characterClass`** (`CharacterClassId` | `nil`) - Класс персонажа, если доступен.

- **`level`** (`number`) - Уровень персонажа.

- **`position`** (`GamePosition` | `nil`) - Координаты объекта, если можно получить.

- **`durationMs`** (`number`) - Полная длительность отслеживания в миллисекундах.

- **`remainingMs`** (`number`) - Оставшееся время до окончания отслеживания в миллисекундах.

- **`mutation`** (`MutationInfo` | `nil`) - Информация о мутации, распространяемой данным объектом.

- **`image`** (`TextureId` | `nil`) - Текстура с иконкой объекта.

## Примеры
### Получение и форматирование описания отслеживаемого объекта
```lua
local trackInfo = objects.GetTrackInfo( trackId )
if trackInfo then
    local valuedText = common.CreateValuedText()
    valuedText:SetFormat( trackInfo.text )
    valuedText:SetVal( "name", trackInfo.playerName )
end
```

::: info Описание примера
В примере сначала запрашивается информация об отслеживаемом объекте. Если объект найден, создается объект форматированного текста, в который устанавливается шаблон строки из описания объекта и подставляется имя игрока.
:::

## Смотрите также
- [GamePosition](sdfg)
- [MutationInfo](sdfg)
- [GameState](sdfg)
- [common.CreateValuedText](sfdgsdfg)