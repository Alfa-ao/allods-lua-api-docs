GoalId
Идентификатор цели. Пользовательский тип данных (см. также LuaApiTypes). Один из типов группы ResourceId. (В настоящее время идентификатор пассивного умения - идентификатор его ресурса в базе.)

Поля, доступные в GoalId:GetInfo()

title: WString - заголовок цели
description: WString - описание цели
finishPredicates: table со списком предикатов
locations: table - список ключевых локаций, каждый элемент представляет собой таблицу с полями
 locator: QuestLocation - таблица с описаниями точек цели задания
rewards: table of GoalReward - список наград
shortDescription: WString - краткое описание, для экрана загрузки
showPredicates: table, список предикатов для отображения
stages: table, список этапов типа GoalId
targetLevel: number (integer) - целевой уровень для выполнения цели
customFinishMessage: WString - кастомное сообщение выполения(для данного гола). Если пусто, выводить стандартное сообщение.
Доп. ссылки:

QuestLocation