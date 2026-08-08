QuestLocation

QuestLocation описывает одну точку на карте. Таблица с полями.

Так же смотрите GamePosition, cartographer.GetZonesMapInfo( zonesMapId ).

  zonesMapId: ObjectId - идентификатор интерфейсной карты зоны точки
  position: GamePosition - координаты точки
  isIndoor: boolean - true, если точка цели/сдачи квеста находится в помещении
  radius: number or nil - радиус зоны точки. nil, если радиус не указан или нулевой
Пример:

local info = avatar.GetQuestInfo( questId )
if info then
  сommon.LogInfo( "Quest level: "..info.level );
  сommon.LogInfo( "Quest name: "..info.name );
  сommon.LogInfo( "Quest goal: "..info.goal );
end