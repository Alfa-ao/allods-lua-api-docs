LfgDestinationId

Идентификатор активности для LFG(сбора группы). Пользовательский тип данных (см. также LuaApiTypes). Один из типов группы ResourceId.

Поля, доступные в LfgDestinationId:GetInfo()

name: wstring or nil - название активности
description: wstring or nil - описание активности
requiredItem: ItemId or nil - ресурс необходимый для отправки
requiredCurrency: CurrencyId or nil - альтвалюта необходимая для отправки
leaderDepartOnly: boolean - если true, то инициировать отправку в активность может только лидер группы
category: LfgDestinationCategoryId or nil - категория цели
minAvatarLvl: Number(int) - минимальный уровень персонажа
maxMembers: Number(int) - максимальное количество участников
maxEventDuration: Number(int) - максимальная длительность активности
soloMode: Boolean - если true, локация доступна только для одного игрока
instancedEvent: InstancedEventResourceId or nil - эвент связанный с данной локацией
difficulty: wstring or nil - сложность активности текстом
difficultyMode: Number(ENUM_LFGEventDifficulty) - сложность активности индексом
sysDifficultyMode: String(ENUM_LFGEventDifficulty) - сложность активности строкой

См. также

    ENUM_LFGEventDifficulty