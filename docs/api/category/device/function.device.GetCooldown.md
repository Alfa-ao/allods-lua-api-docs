# device.GetCooldown

Возвращает информацию о кулдауне экшена используемого устройства.

## Описание

```lua
device.GetCooldown( usableDeviceId: ObjectId, actionIndex: number ): table | nil
```

Функция возвращает таблицу с информацией о кулдауне указанного экшена используемого устройства (например, рули, пушки на корабле). Если устройство не найдено, не является UsableDevice или действие с указанным индексом отсутствует, генерируется исключение и возвращается `nil`.

## Список параметров

- **`usableDeviceId`** (`ObjectId`) - Идентификатор устройства.

- **`actionIndex`** (`number`) - Номер экшена устройства.

## Возвращаемые значения

Возвращает `table` или `nil`.

Если устройство найдено, возвращается таблица со следующими полями:

- **`remainingMs`** (`number`) - Оставшееся время кулдауна в миллисекундах.

- **`durationMs`** (`number`) - Полная длительность кулдауна в миллисекундах.

## Примеры

### Получение информации о кулдауне экшена

```lua
local cooldown = device.GetCooldown( usableDeviceId, 0 )
if cooldown then
    local remaining = cooldown.remainingMs
    local duration = cooldown.durationMs
end
```