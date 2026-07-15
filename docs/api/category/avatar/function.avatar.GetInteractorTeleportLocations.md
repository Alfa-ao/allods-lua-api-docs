# avatar.GetInteractorTeleportLocations
Возвращает список идентификаторов точек телепортации мастера телепорта, с которым взаимодействует главный игрок.
## Описание
```lua
avatar.GetInteractorTeleportLocations(): table
```
Функция извлекает и возвращает таблицу, содержащую уникальные идентификаторы точек телепортации, доступных у текущего мастера телепорта. Формирование списка происходит на основе открытого диалога с NPC.
## Список параметров
Параметры отсутствуют.
## Возвращаемые значения
Возвращает `table` — индексированный с единицы список идентификаторов (`ObjectId`) точек телепортации.
## Примеры
### Получение информации о первой доступной точке телепортации
```lua
local list = avatar.GetInteractorTeleportLocations()
if list[1] then
  local locationInfo = avatar.GetTeleportLocationInfo( list[1] )
  if locationInfo then
    local name = locationInfo.name
  end
end
```
::: info Описание примера
В примере запрашивается список доступных точек телепортации. Если список не пуст, извлекается подробная информация о первой точке с помощью функции `avatar.GetTeleportLocationInfo`. При успешном получении данных извлекается имя локации.
:::
## Смотрите также
- [avatar.GetTeleportLocationInfo](avatar.GetTeleportLocationInfo)