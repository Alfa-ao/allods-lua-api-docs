InstancedEventCategoryId
Идентификатор ресурса категории сражения (инстанс-ивента). Пользовательский тип данных (см. также LuaApiTypes). Один из типов группы ResourceId.

Об идентификаторах этого типа с помощью функции GetInfo() может быть получена информация:

-- объявление:
function GetInfo( self )

-- параметры:
self: InstancedEventCategoryId (not nil) - идентификатор ресурса

-- возвращаемое значение:
table - таблица с полями:
  name: WString - название категории
  sysName: String - служебное название категории
  allowDummyPass: Boolean - доступность Бескорыстной Помощи для эвентов из данной категории, true - доступна

-- пример:
local info = InstancedEventCategoryId:GetInfo()