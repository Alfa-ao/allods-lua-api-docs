# avatar.UseHearthStoneToLocation
Телепортирует игрока в указанную точку.

## Описание
```lua
avatar.UseHearthStoneToLocation( locationId: ObjectId | TeleportMasterId )
```
Функция выполняет телепортацию главного персонажа в заданную локацию. Идентификатор точки телепортации берется из списка доступных аватару точек телепортации (см. `avatar.GetTeleportLocations()`) или из привязки HearthStone (поле `locationId` таблицы, возвращаемой функцией `avatar.GetHearthStoneLocator()`).

## Список параметров
- **`locationId`** (`ObjectId` | `TeleportMasterId`)
Идентификатор точки телепортации.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Телепортация в указанную точку
```lua
avatar.UseHearthStoneToLocation( locationId )
```

## Смотрите также
- [avatar.GetTeleportLocations](avatar.GetTeleportLocations)
- [avatar.GetHearthStoneLocator](avatar.GetHearthStoneLocator)