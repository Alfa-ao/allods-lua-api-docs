# matchMaking.GetEventProgressInfo
Получает информацию о достижениях участников текущего или только что завершившегося инстанс-ивента.

## Описание
```lua
matchMaking.GetEventProgressInfo(): table|nil
```
Функция возвращает информацию о достижениях участников текущего или только что завершившегося инстанс-ивента. Информация доступна автоматически сразу после завершения инстанс-ивента либо может быть получена запросом `matchMaking.ListenEventProgress()`. В обоих случаях передается событие `EVENT_MATCH_MAKING_EVENT_PROGRESS_ADDED`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` | `nil` - таблица с описанием прогресса, если информация получена.

- **`completed`** (`boolean`) - завершился ли ивент.

- **`durationMs`** (`number`) - фактическая длительность завершившегося инстанс-ивента в миллисекундах, если ивент ещё не завершён, то `0`.

- **`elapsedMs`** (`number`) - время с начала инстанс-ивента в миллисекундах.

- **`round`** (`number`) - номер текущего раунда, начинается с нуля.

- **`durationsByRound`** (`table`) - ключи - номера раундов, значения - длительность раундов.

- **`startTimesByRound`** (`table`) - ключи - номера раундов, значения - время старта раундов.

- **`winnerBattlegroundMarkId`** (`BattlegroundMarkId` | `nil`) - идентификатор победившей команды в случае группового инстанс-ивента, `nil` в случае одиночного или ещё не завершённого.

- **`winnerFactionId`** (`FactionId` | `nil`) - идентификатор победившей фракции в случае группового инстанс-ивента, `nil` в случае одиночного или ещё не завершённого.

- **`members`** (`table` | `nil`) - индексированная с нуля таблица с описаниями достижений отдельных участников инстанс-ивента, `nil` если механика данного инстанс-ивента подразумевает сокрытие участников.

  - **`name`** (`WString`) - ник игрока.

  - **`shardName`** (`WString`) - название шарда игрока.

  - **`id`** (`ObjectId` | `nil`) - идентификатор аватара, если доступен.

  - **`factionId`** (`FactionId`) - фракция игрока.

  - **`present`** (`boolean`) - флаг наличия игрока на инстанс-ивенте, игрок может покинуть ивент до его окончания, в этом случае значение флага будет `false`.

  - **`achievements`** (`table`) - индексированная с нуля таблица с достижениями данного участника, набор полей может меняться в процессе сражения.

    - **`sysName`** (`string` | `nil`) - нелокализуемое системное имя достижения, если есть.

    - **`name`** (`WString`) - имя.

    - **`description`** (`WString`) - описание.

    - **`value`** (`number`) - количество.

  - **`raceClass`** (`table` (`LuaRaceClassInfoPart`)) - таблица с описанием расы и класса персонажа.

  - **`battlegroundMarkId`** (`BattlegroundMarkId` | `nil`) - идентификатор команды, к которой принадлежит участник.

## Примеры

### Получение информации о победившей команде и достижениях участников

```lua
local info = matchMaking.GetEventProgressInfo()
if info.winnerBattlegroundMarkId then
    LogInfo( "Winner team: ", info.winnerBattlegroundMarkId:GetInfo() )
end

for i, memberInfo in pairs( info.members ) do
    LogInfo( "-- member: ", memberInfo.name )
    for j, achievInfo in pairs( memberInfo.achievements ) do
        LogInfo( "-- achievement: ", achievInfo.name, achievInfo.value )
    end
end
```

::: info Описание примера
В примере запрашивается информация о прогрессе инстанс-ивента. Если определена победившая команда, её идентификатор выводится в лог. Далее выполняется обход таблицы участников, и для каждого участника выводится его ник, а также обход таблицы его достижений с выводом имени и значения каждого достижения.
:::

## Смотрите также
- [matchMaking.ListenEventProgress](function.matchMaking.ListenEventProgress)
- [EVENT_MATCH_MAKING_EVENT_PROGRESS_ADDED](events.match_making#event-match-making-event-progress-added)
- [LuaRaceClassInfoPart](types#luaraceclassinfopart)
- [battleground.GetAvatarMark](function.battleground.GetAvatarMark)
- [EVENT_MATCH_MAKING_EVENT_PROGRESS_MEMBERS_CHANGED](events.match_making#event-match-making-event-progress-members-changed)
- [EVENT_MATCH_MAKING_EVENT_PROGRESS_MEMBER_CHANGED](events.match_making#event-match-making-event-progress-member-changed)
- [EVENT_MATCH_MAKING_EVENT_PROGRESS_ROUNDS_CHANGED](events.match_making#event-match-making-event-progress-rounds-changed)