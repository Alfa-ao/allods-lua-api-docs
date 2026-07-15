# avatar.GetEngineerPetCommands
Возвращает список специальных заклинаний для класса инженера.

## Описание
```lua
avatar.GetEngineerPetCommands(): table
```
Функция формирует индексированный с единицы список идентификаторов ресурсов заклинаний, доступных для класса инженера.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` — индексированный с единицы список идентификаторов (`SpellId`) ресурсов заклинаний.

## Примеры
### Получение и вывод названий специальных заклинаний инженера
```lua
local spells = avatar.GetEngineerPetCommands()
for index, spellId in ipairs( spells ) do
    LogInfo( avatar.GetSpellInfo( spellId ).name )
end
```