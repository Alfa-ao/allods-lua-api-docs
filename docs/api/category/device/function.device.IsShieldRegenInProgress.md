# device.IsShieldRegenInProgress
Проверяет, находится ли щит в состоянии регенерирования.

## Описание
```lua
device.IsShieldRegenInProgress( shieldDeviceId: ObjectId ): boolean
```
Функция определяет, находится ли щит с указанным идентификатором в состоянии регенерирования.

## Список параметров
- **`shieldDeviceId`** (`ObjectId`) - Идентификатор устройства щита.

## Возвращаемые значения
Возвращает `boolean` - `true`, если щит находится в состоянии регенерирования, и `false` в противном случае.

## Примеры
### Проверка состояния регенерации щита
```lua
if device.IsShieldRegenInProgress( shieldDeviceId ) then
    LogInfo( "regeneration" )
end
```