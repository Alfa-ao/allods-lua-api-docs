# device.HasRelatedQuestObjectives

Проверяет наличие целей заданий игрока, связанных с указанным устройством.

## Описание

```lua
device.HasRelatedQuestObjectives( deviceId: ObjectId, object: nil | QuestId | ObjectId ): boolean
```

Функция проверяет наличие целей заданий игрока, которые связаны с указанным устройством.

## Список параметров

- **`deviceId`** (`ObjectId`) - Идентификатор устройства.

- **`object`** (`nil` | `QuestId` | `ObjectId`) - Объект для проверки связи. Принимает одно из трех значений: `nil` для проверки наличия связанных целей заданий в целом, `QuestId` для проверки связи с конкретным заданием, `ObjectId` (QuestObjective) для проверки связи с конкретной целью задания.

## Возвращаемые значения

Возвращает `boolean` - `true`, если такие цели заданий имеются у игрока, и `false` в противном случае.

## Примеры

### Проверка наличия связанных целей заданий

```lua
local hasQuestObjectives = device.HasRelatedQuestObjectives( deviceId )
```