LootGroupId
Идентификатор ресурса, определяющего вариант выпадения лута на астральных островах. Пользовательский тип данных (см. также LuaApiTypes). Один из типов группы ResourceId.

Об идентификаторах этого типа с помощью функции GetInfo() может быть получена информация:

-- объявление:
function GetInfo( self )

-- параметры:
self: LootGroupId(not nil) - идентификатор ресурса

-- возвращаемое значение:
table - таблица с полями:
  name: WString - название варианта
  image: TextureId или nil - (только в UIState) идентификатор текстуры для иконки, может отсутствовать

-- пример:
local info = lootGroupId:GetInfo()
См. также:

loot.SelectLootGroup( lootGroupId )