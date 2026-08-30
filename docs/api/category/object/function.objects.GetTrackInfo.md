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
    local valuedText = common.CreateValuedText {
        format = trackInfo.text,
        name = trackInfo.playerName
    }
end
```

### Получение информации о мутации

```lua
local trackInfo = objects.GetTrackInfo( trackId )
if trackInfo and trackInfo.mutation then
    local buffInfo = object.GetBuffInfo( trackInfo.mutation.buff )
end
```

## Смотрите также

- [GamePosition](/api/types/GamePosition.md)
- [MutationInfo](/api/types/MutationInfo.md)
- [common.CreateValuedText](/api/category/common/function.common.CreateValuedText.md)