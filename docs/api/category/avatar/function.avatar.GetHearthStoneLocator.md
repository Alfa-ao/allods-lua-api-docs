# avatar.GetHearthStoneLocator
Возвращает информацию о месте назначения камня возвращения (карта, зона, локатор).

## Описание
```lua
avatar.GetHearthStoneLocator(): table
```
Функция возвращает таблицу с подробной информацией о месте, в которое ведет камень возвращения (HearthStone). Возвращаемые данные включают имена карты и зоны, строковый локатор, а также уникальный идентификатор точки телепортации.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает таблицу (`table`):
- **`map`** (`WString`) — имя карты, на которой находится точка возвращения.
- **`zone`** (`WString`) — имя зоны, в которой находится точка возвращения.
- **`locator`** (`WString`) — строковый идентификатор (локатор) точки возвращения.
- **`locationId`** (`ObjectId`) — уникальный идентификатор точки телепортации, предназначенный для использования в функции `avatar.UseHearthStoneToLocation`.

## Примеры
### Получение информации о месте назначения камня возвращения
```lua
local locatorInfo = avatar.GetHearthStoneLocator()
if locatorInfo then
    LogInfo( "Камень возвращения ведет на карту: ", locatorInfo.map )
    LogInfo( "Зона: ", locatorInfo.zone )
    LogInfo( "Локатор: ", locatorInfo.locator )
    LogInfo( "ID точки телепортации: ", locatorInfo.locationId )
end
```

## Смотрите также
- [avatar.UseHearthStoneToLocation](function.avatar.UseHearthStoneToLocation)