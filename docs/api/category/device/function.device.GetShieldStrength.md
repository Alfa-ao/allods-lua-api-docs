# device.GetShieldStrength
Возвращает текущую и максимальную силу щита.

## Описание
```lua
device.GetShieldStrength( shieldDeviceId: ObjectId ): table|nil
```
Функция извлекает текущую и максимальную силу указанного щита. Если устройство не найдено или не является щитом, функция бросает исключение и возвращает `nil`.

## Список параметров
- **`shieldDeviceId`** (`ObjectId`) - Уникальный идентификатор устройства щита.

## Возвращаемые значения
Возвращает `table` или `nil`.
Если устройство найдено и является щитом, возвращается таблица со следующими полями:
- **`value`** (`number`) - Текущая сила щита.
- **`maxValue`** (`number`) - Максимальная сила щита.

## Примеры
### Получение и вывод силы щита
```lua
local strength = device.GetShieldStrength( shieldDeviceId )
if strength then
    LogInfo( strength.value, " / ", strength.maxValue )
end
```