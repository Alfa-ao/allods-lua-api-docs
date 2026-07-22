# lfgLib.VoteYes

Голосует положительно по текущему вопросу.

## Описание

```lua
lfgLib.VoteYes( roles: table | nil )
```

Функция отправляет положительный голос по текущему вопросу. Событие `EVENT_LFG_VOTE` передается при инициации голосования.

## Список параметров

- **`roles`** (`table` | `nil`) - Список выбранных ролей для вступления в группу. Используется в голосованиях типа `ENUM_LFGVoteType_Join`, `ENUM_LFGVoteType_Invite`.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Голосование в обработчике события

```lua
function OnLfgVote( event )
    lfgLib.VoteYes()
end
```

## Смотрите также

- [lfgLib.VoteNo](sfdg)
- [EVENT_LFG_VOTE](sfdgdf)
- [ENUM_LFGVoteType_*](fdghdfgh)