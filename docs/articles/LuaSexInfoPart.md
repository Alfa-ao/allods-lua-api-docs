LuaSexInfoPart
Таблица с описанием пола игрока

На данный момент имеются:

enum SEX_...:

  SEX_UNKNOWN
  SEX_MALE
  SEX_FEMALE
  sex: number ( enum SEX_... ) - пол игрока
  name: WString - локализованное имя пола (например: "Мужчина" / "Женщина").
  raceSexName: WString - локализованное расозависимое имя пола (например: "Каниец" / "Канийка").
-- пример:
local sex = unit.GetSex( unitId )
if sex then
  common.LogInfo( sex.raceSexName .. " - это " .. sex.name)
end