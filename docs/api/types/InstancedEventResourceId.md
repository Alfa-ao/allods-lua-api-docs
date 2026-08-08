 InstancedEventResourceId

Идентификатор ресурса сражения (инстанс-ивента). Пользовательский тип данных (см. также LuaApiTypes). Один из типов группы ResourceId.

Об идентификаторах этого типа с помощью функции GetInfo() может быть получена информация:

-- объявление:
function GetInfo( self )

-- параметры:
self: InstancedEventResourceId (not nil) - идентификатор ресурса

-- возвращаемое значение:
table - таблица с полями:
  startTime: TimeTableId - список времен/дат, соответствующих началу сражений

-- пример:
local info = instancedEventResourceId:GetInfo()

См. также:

    TimeTableId