# userMods.GetAvatarConfigSection

Возвращает таблицу с секцией аватара.

## Описание

```lua
userMods.GetAvatarConfigSection( sysName )
```

Возвращает таблицу с секцией для текущего персонажа игрока из локального пользовательского конфига или `nil`, если секция не найдена. Секции предназначены исключительно для сохранения настроек пользовательских дополнений.

## Список параметров

- **`sysName`** (`string`)  
  Название секции.

## Возвращаемые значения

Возвращает `table` с данными секции или `nil`, если секция не найдена.

## Примеры

### Получение или инициализация секции конфига

```lua
local section = userMods.GetAvatarConfigSection( "tutorial" )

if not section then
    section = {}
    section["show"] = showTutorial
    section["value01"] = showTutorial01
    section["value02"] = showTutorial02
    
    userMods.SetAvatarConfigSection( "tutorial", section )
else
    -- применим значения, полученные из секции
    showTutorial = section["show"]
    showTutorial01 = section["value01"]
    showTutorial02 = section["value02"]
end
```