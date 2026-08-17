## EVENT_GUILD_ACCEPTED

### Описание

```
EVENT_GUILD_ACCEPTED
```

Событие присылается в случае, если какой-либо игрок вступил в гильдию главного игрока.

### Список параметров

- **`invitee`** (`WString`) - имя вступившего игрока.

- **`inviter`** (`WString`) - имя приглашавшего игрока.

- **`guild`** (`WString`) - название гильдии.

---

## EVENT_GUILD_ALLOD_ATTACK_FAILED

### Описание

```
EVENT_GUILD_ALLOD_ATTACK_FAILED
```

Событие присылается в случае, если атака на чужой гильдейский аллод провалилась.

### Список параметров

- **`allodId`** (`ObjectId` | `nil`) - идентификатор аллода, если информация найдена.

- **`allod`** (`WString`) - название аллода.

- **`attacker`** (`WString`) - имя атакующей гильдии.

- **`deffender`** (`WString`) - имя защищающейся гильдии.

---

## EVENT_GUILD_ALLOD_ATTACK_SUCCESSFUL

### Описание

```
EVENT_GUILD_ALLOD_ATTACK_SUCCESSFUL
```

Событие присылается в случае, если атака на чужой гильдейский аллод удалась.

### Список параметров

- **`allodId`** (`ObjectId` | `nil`) - идентификатор аллода, если информация найдена.

- **`allod`** (`WString`) - название аллода.

- **`attacker`** (`WString`) - имя атакующей гильдии.

- **`deffender`** (`WString`) - имя защищающейся гильдии.

---

## EVENT_GUILD_ALLOD_OWNER_CHANGED

### Описание

```
EVENT_GUILD_ALLOD_OWNER_CHANGED
```

Событие присылается в случае, если изменился владелец гильдейского аллода.

### Список параметров

- **`allodId`** (`ObjectId` | `nil`) - идентификатор аллода, если информация найдена.

- **`allod`** (`WString`) - название аллода.

- **`newOwner`** (`WString`) - имя гильдии - нового владельца аллода.

- **`oldOwner`** (`WString`) - имя гильдии - старого владельца аллода.

---

## EVENT_GUILD_ALLOD_TELEPORT_COOLDOWN_FINISHED

### Описание

```
EVENT_GUILD_ALLOD_TELEPORT_COOLDOWN_FINISHED
```

Событие приходит при окончании кулдауна телепортации на гильдейский аллод.

### Список параметров

- **`allodId`** (`ObjectId`) - идентификатор аллода.

---

## EVENT_GUILD_ALLOD_TELEPORT_COOLDOWN_STARTED

### Описание

```
EVENT_GUILD_ALLOD_TELEPORT_COOLDOWN_STARTED
```

Событие приходит при начале кулдауна телепортации на гильдейский аллод.

### Список параметров

- **`allodId`** (`ObjectId`) - идентификатор аллода.

- **`duration`** (`number`) - общая продолжительность в миллисекундах.

- **`remaining`** (`number`) - оставшееся время в миллисекундах.

---

## EVENT_GUILD_ALREADY_IN_GUILD

### Описание

```
EVENT_GUILD_ALREADY_IN_GUILD
```

Событие присылается в случае неудачной попытки приглашения в гильдию, если игрок уже находится в гильдии.

### Список параметров

- **`declinerName`** (`WString`) - имя приглашаемого игрока.

---

## EVENT_GUILD_APPEARED

### Описание

```
EVENT_GUILD_APPEARED
```

Событие присылается, если главный игрок попал в гильдию (в новую или в существующую при входе в игру). Если требуется реагировать только на вступление в новую гильдию, то вместо этого события лучше пользоваться `EVENT_GUILD_CREATED` и `EVENT_GUILD_ACCEPTED`.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_AUTHORITY_CHANGED

### Описание

```
EVENT_GUILD_AUTHORITY_CHANGED
```

Событие присылается, если изменилось влияние гильдии главного игрока.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_AVATAR_HISTORY

### Описание

```
EVENT_GUILD_AVATAR_HISTORY
```

Событие приходит после вызова функции `guild.GetAvatarHistory()` и содержит гильдейскую банковскую историю аватара.

### Список параметров

- **`history`** (`table`) - индексированная с нуля таблица с описаниями конкретных операций, каждая из которых представлена таблицей с полями:

    - **`moneyChange`** (`number`) - величина транзакции в меди.

    - **`comment`** (`WString`) - комментарий при проведении операции.

    - **`time`** (`LuaFullDateTime`) - время транзакции.

    - **`changeReason`** (`number`(`ENUM_MoneyChangeReason_*`)) - причина транзакции. Значения соответствуют перечислению `ENUM_MoneyChangeReason_*`.

    - **`sysChangeReason`** (`string`(`ENUM_MoneyChangeReason_*`)) - причина транзакции. Значения соответствуют перечислению `ENUM_MoneyChangeReason_*`.

### Смотрите также

- [guild.GetAvatarHistory](/api/category/guild/function.guild.GetAvatarHistory.md)
- [LuaFullDateTime](/api/types/LuaFullDateTime.md)
- [EnumMoneyChangeReason](/api/enums/enums.ENUM_MoneyChangeReason.md)
- [EnumTabardType](/api/enums/enums.ENUM_TabardType.md)

---

## EVENT_GUILD_BANK_MINIMUM_TRANSACTION_CHANGED

### Описание

```
EVENT_GUILD_BANK_MINIMUM_TRANSACTION_CHANGED
```

Событие присылается, если изменилось минимальное ограничение на транзакцию в гильдейском банке.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_BANK_OPERATION_RESULT

### Описание

```
EVENT_GUILD_BANK_OPERATION_RESULT
```

Событие присылается, если завершилась операция в гильдейском банке.

### Список параметров

- **`success`** (`boolean`) - `true`, если операция завершилась успешно.

- **`sysOperationType`** (`string`(`ENUM_GuildBankOperation_*`)) - тип операции, которая завершилась. Значения соответствуют перечислению `ENUM_GuildBankOperation_*`.

### Смотрите также

- [ENUM_GuildBankOperation](/api/enums/enums.ENUM_GuildBankOperation.md)

---

## EVENT_GUILD_BOSS_ABILITIES_CHANGED

### Описание

```
EVENT_GUILD_BOSS_ABILITIES_CHANGED
```

Событие присылается при изменении списка выбранных способностей босса гильдии.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [guildBossLib.GetSelectedAbilities](/api/category/guildBossLib/function.guildBossLib.GetSelectedAbilities.md)
- [guildBossLib.SelectAbilities](/api/category/guildBossLib/function.guildBossLib.SelectAbilities.md)

---

## EVENT_GUILD_BOSS_CHANGED

### Описание

```
EVENT_GUILD_BOSS_CHANGED
```

Событие присылается в случае, если изменился босс гильдии.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_BOSS_EXPERIENCE_CHANGED

### Описание

```
EVENT_GUILD_BOSS_EXPERIENCE_CHANGED
```

Событие присылается в случае, если изменился опыт босса гильдии.

### Список параметров

- **`experience`** (`number`) - опыт босса гильдии.

---

## EVENT_GUILD_BOSS_GEAR_SCORE_CHANGED

### Описание

```
EVENT_GUILD_BOSS_GEAR_SCORE_CHANGED
```

Событие присылается в случае, если изменилась сила босса гильдии.

### Список параметров

- **`gearScore`** (`number`) - сила босса гильдии.

---

## EVENT_GUILD_BOSS_QUESTS_CHANGED

### Описание

```
EVENT_GUILD_BOSS_QUESTS_CHANGED
```

Событие присылается при изменении списка заданий для прогресса босса гильдии.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [guildBossLib.GetQuests](/api/category/guildBossLib/function.guildBossLib.GetQuests.md)

---

## EVENT_GUILD_BOSS_QUESTS_STATUS_CHANGED

### Описание

```
EVENT_GUILD_BOSS_QUESTS_STATUS_CHANGED
```

Событие присылается при изменении статуса заданий для прогресса босса гильдии.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [guildBossLib.GetQuests](/api/category/guildBossLib/function.guildBossLib.GetQuests.md)

---

## EVENT_GUILD_BOSS_SPELLS_CHANGED

### Описание

```
EVENT_GUILD_BOSS_SPELLS_CHANGED
```

Событие присылается при изменении списка выбранных заклинаний босса гильдии.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [guildBossLib.GetSelectedSpells](/api/category/guildBossLib/function.guildBossLib.GetSelectedSpells.md)
- [guildBossLib.SelectAbilities](/api/category/guildBossLib/function.guildBossLib.SelectAbilities.md)

---

## EVENT_GUILD_BOSS_STATE_CHANGED

### Описание

```
EVENT_GUILD_BOSS_STATE_CHANGED
```

Событие присылается при изменении состояния босса гильдии.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_BUFF_ADDED

### Описание

```
EVENT_GUILD_BUFF_ADDED
```

Событие присылается каждый раз, когда у гильдии появляется новый баф. Если обновляется старый, то событие не приходит.

### Список параметров

- **`buffId`** (`ObjectId`) - идентификатор бафа.

---

## EVENT_GUILD_BUFFS_CHANGED

### Описание

```
EVENT_GUILD_BUFFS_CHANGED
```

Событие присылается каждый раз, когда у гильдии игрока меняется набор бафов.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [guild.GetBuffs](/api/category/guild/function.guild.GetBuffs.md)

---

## EVENT_GUILD_CANT_ACCEPT

### Описание

```
EVENT_GUILD_CANT_ACCEPT
```

Событие присылается в случае невозможности вступить в гильдию после вызова функции `guild.Accept()`.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_CREATED

### Описание

```
EVENT_GUILD_CREATED
```

Событие присылается в случае, если была создана гильдия, в создании которой участвовал главный игрок.

### Список параметров

- **`guildName`** (`WString`) - название гильдии.

- **`leaderName`** (`WString`) - имя лидера гильдии, создавшего гильдию.

---

## EVENT_GUILD_CURRENCIES_CHANGED

### Описание

```
EVENT_GUILD_CURRENCIES_CHANGED
```

Событие присылается, если изменилось количество гильдейских валют в гильдии главного игрока.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_DECLINE

### Описание

```
EVENT_GUILD_DECLINE
```

Событие присылается в случае неудачной попытки приглашения в гильдию.

### Список параметров

- **`declinerName`** (`WString`) - имя приглашаемого игрока.

---

## EVENT_GUILD_DECLINE_BUSY

### Описание

```
EVENT_GUILD_DECLINE_BUSY
```

Событие присылается в случае неудачной попытки приглашения в гильдию, если игрок занят.

### Список параметров

- **`declinerName`** (`WString`) - имя приглашаемого игрока.

---

## EVENT_GUILD_DECLINE_IGNORED

### Описание

```
EVENT_GUILD_DECLINE_IGNORED
```

Событие приходит при невозможности приглашения в гильдию по причине игнора.

### Список параметров

- **`declinerName`** (`WString`) - имя приглашаемого игрока.

---

## EVENT_GUILD_DESCRIPTION_CHANGED

### Описание

```
EVENT_GUILD_DESCRIPTION_CHANGED
```

Событие присылается, если изменилось описание гильдии главного игрока.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_DISAPPEARED

### Описание

```
EVENT_GUILD_DISAPPEARED
```

Событие присылается, если игрок вышел из гильдии.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_ENABLE_PROGRESS_REQUEST

### Описание

```
EVENT_GUILD_ENABLE_PROGRESS_REQUEST
```

Событие приходит в виде запроса на подтверждение открытия прогресса гильдии. Необходимо ответить функцией `guild.EnableProgressReply()`.

### Список параметров

- **`timeoutMs`** (`number`) - таймаут в миллисекундах. По истечении таймаута запрос будет отклонён.

---

## EVENT_GUILD_FAILED

### Описание

```
EVENT_GUILD_FAILED
```

Событие присылается в случае невозможности выполнить указанную операцию с гильдией.

### Список параметров

- **`sysCause`** (`string`(`ENUM_GUILD_RESULT_*`)) - строковое описание причины. Значения соответствуют перечислению `ENUM_GUILD_RESULT_*`.

---

## EVENT_GUILD_HALL_EXPERIENCE_CHANGED

### Описание

```
EVENT_GUILD_HALL_EXPERIENCE_CHANGED
```

Событие присылается при изменении прогресса оплота гильдии.

### Список параметров

- **`value`** (`number`) - новое значение прогресса.

### Смотрите также

- [guildHallLib.GetExperience](/api/category/guildHallLib/function.guildHallLib.GetExperience.md)

---

## EVENT_GUILD_HALL_EXPERIENCE_DAILY_CHANGED

### Описание

```
EVENT_GUILD_HALL_EXPERIENCE_DAILY_CHANGED
```

Событие присылается при изменении дневного прогресса оплота гильдии.

### Список параметров

- **`value`** (`number`) - новое значение дневного прогресса.

### Смотрите также

- [guildHallLib.GetExperience](/api/category/guildHallLib/function.guildHallLib.GetExperienceDaily.md)

---

## EVENT_GUILD_HALL_QUESTS_CHANGED

### Описание

```
EVENT_GUILD_HALL_QUESTS_CHANGED
```

Событие присылается при изменении списка заданий для прогресса оплота гильдии.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [guildHallLib.GetQuests](/api/category/guildHallLib/function.guildHallLib.GetQuests.md)

---

## EVENT_GUILD_HALL_QUESTS_STATUS_CHANGED

### Описание

```
EVENT_GUILD_HALL_QUESTS_STATUS_CHANGED
```

Событие присылается при изменении статуса заданий для прогресса оплота гильдии.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [guildHallLib.GetQuests](/api/category/guildHallLib/function.guildHallLib.GetQuests.md)

---

## EVENT_GUILD_HALL_STATE_CHANGED

### Описание

```
EVENT_GUILD_HALL_STATE_CHANGED
```

Событие присылается при изменении состояния оплота гильдии.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [guildHallLib.GetQuests](/api/category/guildHallLib/function.guildHallLib.GetStatesInfo.md)
- [guildHallLib.GetCurrentStateInfo](/api/category/guildHallLib/function.guildHallLib.GetCurrentStateInfo.md)

---

## EVENT_GUILD_INVITE

### Описание

```
EVENT_GUILD_INVITE
```

Событие присылается в случае получения приглашения в гильдию.

### Список параметров

- **`inviterName`** (`WString`) - имя приглашающего игрока.

- **`guildName`** (`WString`) - имя гильдии.

---

## EVENT_GUILD_ITEMS_OPERATION_RESULT

### Описание

```
EVENT_GUILD_ITEMS_OPERATION_RESULT
```

Событие присылается при попытке получить историю операций с предметами гильдии.

### Список параметров

- **`success`** (`boolean`) - `true`, если операция завершилась успешно.

---

## EVENT_GUILD_LEADER_CHANGED

### Описание

```
EVENT_GUILD_LEADER_CHANGED
```

Событие присылается в случае изменения лидера гильдии главного игрока.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_LEVEL_CHANGED

### Описание

```
EVENT_GUILD_LEVEL_CHANGED
```

Событие присылается, если изменился уровень гильдии главного игрока.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_LIST_CHANGED

### Описание

```
EVENT_GUILD_LIST_CHANGED
```

Событие присылается в случае изменения списка членов гильдии главного игрока. Также приходят соответствующие `EVENT_GUILD_MEMBER_ADDED` и `EVENT_GUILD_MEMBER_REMOVED`.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_MEMBER_ADDED

### Описание

```
EVENT_GUILD_MEMBER_ADDED
```

Событие присылается, если в гильдию главного игрока добавлен игрок. Также приходит `EVENT_GUILD_LIST_CHANGED`.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор члена гильдии, не совпадает с идентификатором игрока.

- **`playerId`** (`ObjectId` | `nil`) - идентификатор игрока, если таковой доступен, или `nil`, если игрок находится вне видимости аватара.

- **`name`** (`WString`) - имя члена гильдии.

---

## EVENT_GUILD_MEMBER_AUTHORITY_CHANGED

### Описание

```
EVENT_GUILD_MEMBER_AUTHORITY_CHANGED
```

Событие присылается, если изменилось влияние у члена гильдии главного игрока. Также присылается `EVENT_GUILD_MEMBER_CHANGED`.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор члена гильдии, не совпадает с идентификатором игрока.

- **`name`** (`WString`) - имя члена гильдии.

- **`delta`** (`number`) - значение, на которое изменилось влияние.

---

## EVENT_GUILD_MEMBER_BALANCE_CHANGED

### Описание

```
EVENT_GUILD_MEMBER_BALANCE_CHANGED
```

Событие присылается, если у члена гильдии изменился баланс в гильдейском банке.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор члена гильдии, не совпадает с идентификатором игрока.

---

## EVENT_GUILD_MEMBER_CHANGED

### Описание

```
EVENT_GUILD_MEMBER_CHANGED
```

Событие присылается, если изменились параметры члена гильдии главного игрока.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор члена гильдии, не совпадает с идентификатором игрока.

- **`playerId`** (`ObjectId` | `nil`) - идентификатор игрока, если таковой доступен, или `nil`, если игрок находится вне видимости аватара.

- **`name`** (`WString`) - имя члена гильдии.

---

## EVENT_GUILD_MEMBER_DAY_AUTHORITY_CHANGED

### Описание

```
EVENT_GUILD_MEMBER_DAY_AUTHORITY_CHANGED
```

Событие присылается, если изменилось влияние, набранное за день, у члена гильдии главного игрока. Также присылается `EVENT_GUILD_MEMBER_CHANGED`.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор члена гильдии, не совпадает с идентификатором игрока.

- **`name`** (`WString`) - имя члена гильдии.

- **`delta`** (`number`) - значение, на которое изменилось влияние.

---

## EVENT_GUILD_MEMBER_KICKED

### Описание

```
EVENT_GUILD_MEMBER_KICKED
```

Событие присылается в случае, если какой-либо игрок вышел или был выведен из гильдии главного игрока. Также см. `EVENT_GUILD_MEMBER_REMOVED`.

### Список параметров

- **`kicked`** (`WString`) - имя вышедшего из гильдии игрока.

- **`kicker`** (`WString`) - имя выкинувшего игрока, или самого `kicked`, или офицера/главы гильдии.

---

## EVENT_GUILD_MEMBER_LOYALTY_CHANGED

### Описание

```
EVENT_GUILD_MEMBER_LOYALTY_CHANGED
```

Событие присылается, если изменилась преданность члена гильдии главного игрока. Также присылается `EVENT_GUILD_MEMBER_CHANGED`.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор члена гильдии, не совпадает с идентификатором игрока.

- **`name`** (`WString`) - имя члена гильдии.

- **`delta`** (`number`) - значение, на которое изменилась преданность.

---

## EVENT_GUILD_MEMBER_MONTH_AUTHORITY_CHANGED

### Описание

```
EVENT_GUILD_MEMBER_MONTH_AUTHORITY_CHANGED
```

Событие присылается, если изменилось влияние, набранное за месяц, у члена гильдии главного игрока. Также присылается `EVENT_GUILD_MEMBER_CHANGED`.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор члена гильдии, не совпадает с идентификатором игрока.

- **`name`** (`WString`) - имя члена гильдии.

- **`delta`** (`number`) - значение, на которое изменилось влияние.

---

## EVENT_GUILD_MEMBER_ONLINE_STATUS_CHANGED

### Описание

```
EVENT_GUILD_MEMBER_ONLINE_STATUS_CHANGED
```

Событие присылается, когда меняется онлайн-статус члена гильдии. См. поле `onlineStatus` функции `guild.GetMemberInfo( memberId )`.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор члена гильдии, не совпадает с идентификатором игрока.

- **`playerId`** (`ObjectId` | `nil`) - идентификатор игрока, если таковой доступен, или `nil`, если игрок находится вне видимости аватара.

- **`name`** (`WString`) - имя члена гильдии.

### Смотрите также

- [guild.GetMemberInfo](/api/category/guild/function.guild.GetMemberInfo.md)

---

## EVENT_GUILD_MEMBER_RANK_CHANGED

### Описание

```
EVENT_GUILD_MEMBER_RANK_CHANGED
```

Событие присылается, если изменился ранг члена гильдии.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор члена гильдии, не совпадает с идентификатором игрока.

- **`playerId`** (`ObjectId` | `nil`) - идентификатор игрока, если таковой доступен, или `nil`, если игрок находится вне видимости аватара.

- **`name`** (`WString`) - имя члена гильдии.

---

## EVENT_GUILD_MEMBER_REMOVED

### Описание

```
EVENT_GUILD_MEMBER_REMOVED
```

Событие присылается, если из списка гильдии главного игрока удален игрок. Это может быть вызвано как реальным выводом, так и обновлением информации с сервера. Также приходит `EVENT_GUILD_LIST_CHANGED`. Для получения сообщений о реальном выводе игрока из гильдии см. `EVENT_GUILD_MEMBER_KICKED`.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор члена гильдии, не совпадает с идентификатором игрока.

- **`playerId`** (`ObjectId` | `nil`) - идентификатор игрока, если таковой доступен, или `nil`, если игрок находится вне видимости аватара.

- **`name`** (`WString`) - имя члена гильдии.

---

## EVENT_GUILD_MEMBER_SYMBOLICS

### Описание

```
EVENT_GUILD_MEMBER_SYMBOLICS
```

Событие присылается, когда выдаются или отнимаются права у игрока на использование гильдейской символики.

### Список параметров

- **`mount`** (`ObjectId` | `nil`) - идентификатор ресурса, выдающего маунт.

- **`smile`** (`ObjectId` | `nil`) - идентификатор ресурса, выдающего эмотикон.

- **`lifestyle`** (`ObjectId` | `nil`) - идентификатор ресурса, выдающего визуал.

- **`ability`** (`ObjectId` | `nil`) - идентификатор ресурса, выдающего косметическую способность.

- **`granted`** (`boolean`) - `true`, если права выданы, `false`, если отобраны.

- **`member`** (`WString`) - имя игрока.

- **`guild`** (`WString`) - название гильдии.

---

## EVENT_GUILD_MEMBER_TABARD_CHANGED

### Описание

```
EVENT_GUILD_MEMBER_TABARD_CHANGED
```

Событие присылается, если изменилось право на ношение накидки у члена гильдии главного игрока. Также присылается `EVENT_GUILD_MEMBER_CHANGED`.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор члена гильдии, не совпадает с идентификатором игрока.

- **`playerId`** (`ObjectId` | `nil`) - идентификатор игрока, если таковой доступен, или `nil`, если игрок находится вне видимости аватара.

- **`name`** (`WString`) - имя члена гильдии.

---

## EVENT_GUILD_MEMBER_WEEK_AUTHORITY_CHANGED

### Описание

```
EVENT_GUILD_MEMBER_WEEK_AUTHORITY_CHANGED
```

Событие присылается, если изменилось влияние, набранное за неделю, у члена гильдии главного игрока. Также присылается `EVENT_GUILD_MEMBER_CHANGED`.

### Список параметров

- **`id`** (`ObjectId`) - идентификатор члена гильдии, не совпадает с идентификатором игрока.

- **`name`** (`WString`) - имя члена гильдии.

- **`delta`** (`number`) - значение, на которое изменилось влияние.

---

## EVENT_GUILD_MESSAGE_CHANGED

### Описание

```
EVENT_GUILD_MESSAGE_CHANGED
```

Событие присылается, если изменилась новость гильдии.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_MONTH_AUTHORITY_CHANGED

### Описание

```
EVENT_GUILD_MONTH_AUTHORITY_CHANGED
```

Событие присылается, если изменилось набранное за месяц влияние гильдии главного игрока.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_NAME_CHANGED

### Описание

```
EVENT_GUILD_NAME_CHANGED
```

Событие приходит при изменении имени гильдии, в которой состоит аватар игрока.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [guild.Rename](/api/category/guild/function.guild.Rename.md)

---

## EVENT_GUILD_NAME_NOT_AVAILABLE

### Описание

```
EVENT_GUILD_NAME_NOT_AVAILABLE
```

Событие присылается в случае попытки создать гильдию с недоступным именем.

### Список параметров

- **`name`** (`WString`) - имя, с которым не удалось создать гильдию.

- **`sysNameErrorKind`** (`string`(`ENUM_InvalidNameKind_*`)) - причина, по которой имя недопустимо. Значения соответствуют перечислению `ENUM_InvalidNameKind_*`.

- **`notAllowedSubstring`** (`WString`) - значение недопустимой подстроки, если ошибка произошла из-за нее.

---

## EVENT_GUILD_NEED_RENAME_CHANGED

### Описание

```
EVENT_GUILD_NEED_RENAME_CHANGED
```

Событие приходит при изменении флага "гильдию требуется переименовать" у гильдии, в которой состоит аватар игрока.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [guild.IsNeedRename](/api/category/guild/function.guild.IsNeedRename.md)
- [guild.CanRename](/api/category/guild/function.guild.CanRename.md)

---

## EVENT_GUILD_SEASON_AUTHORITY_BONUS_POOL_CHANGED

### Описание

```
EVENT_GUILD_SEASON_AUTHORITY_BONUS_POOL_CHANGED
```

Событие присылается, если изменился пул бонусного авторитета гильдии главного игрока.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_SEASON_AUTHORITY_CHANGED

### Описание

```
EVENT_GUILD_SEASON_AUTHORITY_CHANGED
```

Событие присылается, если изменилось сезонное влияние гильдии главного игрока.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_SEASON_LEVEL_CHANGED

### Описание

```
EVENT_GUILD_SEASON_LEVEL_CHANGED
```

Событие присылается, если изменился сезонный уровень гильдии главного игрока.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_SEASON_SECURE_AUTHORITY_CHANGED

### Описание

```
EVENT_GUILD_SEASON_SECURE_AUTHORITY_CHANGED
```

Событие присылается, если изменилось "несгораемое" сезонное влияние гильдии главного игрока.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_SYMBOLICS_CHANGED

### Описание

```
EVENT_GUILD_SYMBOLICS_CHANGED
```

Событие присылается, когда произошли изменения в уникальной символике гильдии.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_TABARDS_CHANGED

### Описание

```
EVENT_GUILD_TABARDS_CHANGED
```

Событие присылается, если изменился список знаков отличия для наград гильдии главного игрока.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_TALENTS_CHANGED

### Описание

```
EVENT_GUILD_TALENTS_CHANGED
```

Событие присылается, когда изменились таланты гильдии.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_TEXTURE_CHANGED

### Описание

```
EVENT_GUILD_TEXTURE_CHANGED
```

Событие присылается в случае смены гильдейской текстуры.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_UNLOCKED_LEVEL_CHANGED

### Описание

```
EVENT_GUILD_UNLOCKED_LEVEL_CHANGED
```

Событие присылается, если изменился уровень гильдии главного игрока.

### Список параметров

Параметры отсутствуют.

---

## EVENT_GUILD_ITEMS_HISTORY_CHANGED

### Описание

```
EVENT_GUILD_ITEMS_HISTORY_CHANGED
```

Событие приходит при обновлении данных об истории операций с предметами гильдии, является итогом вызова `guild.GetItemsHistory`.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [guild.GetItemsHistory](/api/category/guild/function.guild.GetItemsHistory.md)

---

## EVENT_GUILD_BANK_HISTORY_CHANGED

### Описание

```
EVENT_GUILD_BANK_HISTORY_CHANGED
```

Событие приходит при обновлении данных об истории операций казны гильдии, является итогом вызова `guild.GetHistory`.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [guild.GetHistory](/api/category/guild/function.guild.GetHistory.md)

---

## EVENT_GUILD_BANK_MONEY_CHANGED

### Описание

```
EVENT_GUILD_BANK_MONEY_CHANGED
```

Событие приходит при изменении баланса казны гильдии.

### Список параметров

Параметры отсутствуют.