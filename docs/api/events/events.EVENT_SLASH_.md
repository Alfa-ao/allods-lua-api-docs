## EVENT_SLASH_COMMAND_FAILED

### Описание

```
EVENT_SLASH_COMMAND_FAILED
```

Событие приходит при невозможности выполнить слеш-команду (в чате).

### Список параметров

- **`name`** (`WString`) - Имя адресата.

- **`sysReason`** (`sysString`) - Причина неудачной отправки сообщения.

::: info Перечисления
(HELP)
Значения `sysReason`:

- `ENUM_SLASH_COMMAND_INVITE_FAILED_WRONG_FORMAT` - неверный формат команды `/invite`.

- `ENUM_SLASH_COMMAND_KICK_FAILED_WRONG_FORMAT` - неверный формат команды `/kick`.

- `ENUM_SLASH_COMMAND_CUSTOM_EMOTE_FAILED_WRONG_FORMAT` - неверный формат команды `/emote`.

- `ENUM_SLASH_COMMAND_TRADE_FAILED_WRONG_FORMAT` - неверный формат команды `/trade`.

- `ENUM_SLASH_COMMAND_GUILD_INVITE_FAILED_WRONG_FORMAT` - неверный формат команды `/ginvite`.

- `ENUM_SLASH_COMMAND_GUILD_KICK_FAILED_WRONG_FORMAT` - неверный формат команды `/gkick`.

:::

---

## EVENT_SLASH_COMMAND_PREFIX_CHANGED

### Описание

```
EVENT_SLASH_COMMAND_PREFIX_CHANGED
```

Событие присылается при любом изменении префикса слеш-команды, в том числе при установке пустого префикса после префикса `say` (команда по умолчанию), хотя действия для последних двух случаев идентичны.

### Список параметров

Параметры отсутствуют.