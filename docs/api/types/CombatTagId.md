CombatTagId

Идентификатор эффекта наложенного на игрока в бою. Используется для отображения логе боя усиливающих и ослабляющих эффектов, которые были на игроке в момент нанесения урона. Пользовательский тип данных (см. также LuaApiTypes). Один из типов группы ResourceId.

Поля, доступные в CombatTagId:GetInfo()

name: wstring or nil - название эффекта
shortName: wstring or nil - укороченное название эффекта
description: wstring or nil - описание эффекта
isHelpful: boolean - если true, то эффект усиливающий, иначе остабляющий
image: TextureId or nil - иконка эффекта
