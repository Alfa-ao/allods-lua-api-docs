# avatar.GetFactionInfo
Возвращает дополнительные данные о заданной фракции.

## Описание
```lua
avatar.GetFactionInfo( factionId: FactionId ): table | nil
```
Функция извлекает и возвращает таблицу с дополнительной информацией о фракции, такой как принадлежность к главному игроку, дружественный статус и агрессивность. Если фракция с указанным идентификатором не найдена или данные недоступны, функция возвращает `nil`.

## Список параметров
- **`factionId`** (`FactionId`)
Идентификатор фракции, информацию о которой необходимо получить. Может быть получен, например, из поля `winnerFactionId` функции `matchMaking.GetEventProgressInfo` или с помощью функции `unit.GetFactionId`.

## Возвращаемые значения
Возвращает `table` или `nil`.
Если данные успешно получены, возвращается таблица со следующими полями:
- **`isSame`** (`boolean`)
`true`, если указанная фракция является фракцией главного игрока (MainPlayer).
- **`isFriend`** (`boolean`)
`true`, если указанная фракция является дружественной.
- **`isPassive`** (`boolean`)
`true`, если указанная фракция не является агрессивной.

## Примеры
### Получение информации о фракции главного игрока
```lua
local factionId = unit.GetFactionId( avatar.GetId() )
local factionInfo = factionId and avatar.GetFactionInfo( factionId )
if factionInfo then
    LogInfo( "Same faction: ", factionInfo.isSame )
end
```

## Смотрите также

avatar.GetId
unit.GetFactionId
matchMaking.GetEventProgressInfo