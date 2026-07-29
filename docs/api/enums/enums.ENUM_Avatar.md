## ENUM_AvatarFriendIgnoreListsError

Определяет результат неудачной операции со списком друзей или игнорирования.

### Описание

Текстовое перечисление. Префикс для автоматической проверки - `ENUM_AvatarFriendIgnoreListsError`.

### Список значений

- **`ENUM_AvatarFriendIgnoreListsError_ServiceNotReady`** (`string`) - Сервис не готов к работе.

- **`ENUM_AvatarFriendIgnoreListsError_EntryAlreadyExists`** (`string`) - Запись уже существует.

- **`ENUM_AvatarFriendIgnoreListsError_NoSuchEntry`** (`string`) - Запись не найдена.

- **`ENUM_AvatarFriendIgnoreListsError_InternalError`** (`string`) - Внутренняя ошибка системы.

- **`ENUM_AvatarFriendIgnoreListsError_AvatarNotFound`** (`string`) - Аватар не найден.

- **`ENUM_AvatarFriendIgnoreListsError_ListOverflow`** (`string`) - Переполнение списка.

---

## ENUM_AvatarKickCause

Определяет причины исключения аватара из события или неудачного выполнения действия.

### Описание

Текстовое перечисление. Префикс для автоматической проверки - `ENUM_AvatarKickCause`.

### Список значений

- **`ENUM_AvatarKickCause_Void`** (`string`) - Пустая причина.

- **`ENUM_AvatarKickCause_ExtraAvatar`** (`string`) - Дополнительный аватар.

- **`ENUM_AvatarKickCause_InvalidGuild`** (`string`) - Некорректная гильдия.

- **`ENUM_AvatarKickCause_NoGuild`** (`string`) - Отсутствие гильдии.

- **`ENUM_AvatarKickCause_NoTabard`** (`string`) - Отсутствие герба.

- **`ENUM_AvatarKickCause_NoGroup`** (`string`) - Отсутствие группы.

- **`ENUM_AvatarKickCause_NoRaid`** (`string`) - Отсутствие рейда.

- **`ENUM_AvatarKickCause_LevelControl`** (`string`) - Контроль уровня.

- **`ENUM_AvatarKickCause_EventFinished`** (`string`) - Событие завершено.

- **`ENUM_AvatarKickCause_NoShip`** (`string`) - Отсутствие корабля.

- **`ENUM_AvatarKickCause_InvalidMap`** (`string`) - Некорректная карта.

- **`ENUM_AvatarKickCause_RaidVarsConflict`** (`string`) - Конфликт переменных рейда.

---

## ENUM_AvatarOnlineStatus

Определяет онлайн-статус члена гильдии.

### Описание

Текстовое перечисление.

### Список значений

- **`ENUM_AvatarOnlineStatus_Offline`** (`string`) - Не в игре.

- **`ENUM_AvatarOnlineStatus_Online`** (`string`) - Аватар в игре.

- **`ENUM_AvatarOnlineStatus_OnAlt`** (`string`) - В игре другое перерождение этого аватара.

- **`ENUM_AvatarOnlineStatus_Shadow`** (`string`) - Не в игре, но в чате (например, с мобильного устройства).

### Смотрите также

- [guild.GetMemberInfo](/api/category/guild/function.guild.GetMemberInfo.md)