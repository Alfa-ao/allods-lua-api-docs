# matchMaking.GetCurrentBattleInfo

Извлекает общую информацию об инстанс-ивенте, в котором участвует аватар.

## Описание

```lua
matchMaking.GetCurrentBattleInfo(): table | nil
```

Функция возвращает общую информацию об инстанс-ивенте, в котором участвует аватар. Данные, изменяемые в ходе сражения, отсутствуют, для их получения используется функция `matchMaking.GetEventProgressInfo()`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` | `nil` - если аватар не участвует в сражении, то `nil`; иначе таблица с полями:

- **`id`** (`ObjectId` | `nil`) - идентификатор инстанс-ивента; если ивенте нет в списке доступных сражений то `nil`

- **`name`** (`WString`) - имя инстанс-ивента

- **`description`** (`WString`) - описание инстанс-ивента

- **`isCommonShard`** (`boolean`) - `true` если сражение межсерверное, иначе `false`

- **`isPvE`** (`boolean`) - `true` если данный инстанс-ивент относится к сражениям против окружения, иначе `false`

- **`mechanicsType`** (`number`(`ENUM_MatchMakingMechanicsType_*`)) - тип игровой механики

- **`duration`** (`number`) - длительность ивента в миллисекундах

- **`ignoreFactions`** (`boolean`) - ивент со смешанными фракциями(при формировании группы принадлежность к фракции игнорируется)

- **`allowQuickExit`** (`boolean`) - позволять быстро покидать активность(кнопка в углу экрана)

- **`winCounter`** (`number`) - суммарное количество очков за все достижения (см. поле `achievements`), необходимое для победы (также см. ниже описание поля `finalWeight` таблицы `achievements`); если `0`, то победа за достижения не присуждается

- **`achievements`** (`table`) - таблица со списком описаний достижений в битве (индексируется целыми числами, начиная от `0`), каждый элемент - таблица с полями:
    - **`sysName`** (`string` | `nil`) - если есть, то нелокализуемое системное имя достижения

    - **`name`** (`WString`) - имя

    - **`description`** (`WString`) - описание

    - **`weight`** (`number`) - вес очков за данное достижение в общей сумме очков за достижения (также см. выше поле `winCounter`) (не используется в механике)

    - **`finalWeight`** (`number`) - используется для указания счетообразующего достижения (вес полученных очков за достижение, чаще всего `1`, если ачивка счетообразующая)

    - **`value`** (`number`) - величина, по достижении которой сражение считается выигранным даже если общая сумма очков за все достижения не достигла `winCounter` (не играет роли, если `winCounter` равен `0`)

    - **`showInTable`** (`boolean`) - если `true`, то показывать достижение в таблице с результатами

## Примеры

### Получение информации о текущем сражении

```lua
local info = matchMaking.GetCurrentBattleInfo()
if info then
    LogInfo( "Group instanced event, name: ", info.name )
end
```

## Смотрите также

- [ENUM_MatchMakingMechanicsType_*](ENUM_MatchMakingMechanicsType_*)
- [EVENT_MATCH_MAKING_CURRENT_BATTLE_CHANGED](events.match_making#event-match-making-current-battle-changed)
- [matchMaking.GetEventProgressInfo](function.matchMaking.GetEventProgressInfo)