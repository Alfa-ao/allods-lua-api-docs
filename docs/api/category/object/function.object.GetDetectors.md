# object.GetDetectors
Возвращает список детекторов, отслеживающих объект.

## Описание
```lua
object.GetDetectors( objectId: ObjectId ): table
```
Функция извлекает и возвращает хеш-мап активных детекторов, которые отслеживают указанный интерактивный объект. Ключами таблицы выступают идентификаторы детекторов, а значениями - `true`.

::: info Перечисление
Список существующих детекторов:

- **`CLIENT_DETECTOR_QUEST_NPC`** (`number` `0`)

- **`CLIENT_DETECTOR_TRAINER_NPC`** (`number` `1`)

- **`CLIENT_DETECTOR_VENDOR_NPC`** (`number` `2`)

- **`CLIENT_DETECTOR_SERVICE_NPC`** (`number` `3`)

- **`CLIENT_DETECTOR_PLAYER`** (`number` `4`)

- **`CLIENT_DETECTOR_SPOUSE`** (`number` `5`)

- **`CLIENT_DETECTOR_BATTLEGROUND_CHECKPOINT`** (`number` `6`)

- **`CLIENT_DETECTOR_PROFESSION_NPC`** (`number` `7`)

- **`CLIENT_DETECTOR_CUSTOM`** (`number` `8`)
:::

## Список параметров

- **`objectId`** (`ObjectId`) - Идентификатор интерактивного объекта. Не может быть `nil`.

## Возвращаемые значения
Возвращает `table` - хеш-мап активных детекторов, где ключом является идентификатор детектора (`number`), а значением - `true`.

## Примеры
### Проверка наличия детектора
```lua
local detectors = object.GetDetectors( objectId )
if detectors[ CLIENT_DETECTOR_QUEST_NPC ] then
    LogInfo( "Detected by CLIENT_DETECTOR_QUEST_NPC" )
end
```

## Смотрите также
- [avatar.EnableClientDetector](../avatar/function.avatar.EnableClientDetector)