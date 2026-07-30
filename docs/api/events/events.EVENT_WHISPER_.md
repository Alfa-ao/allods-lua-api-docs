## EVENT_WHISPER_FAILED

### Описание
```
EVENT_WHISPER_FAILED
```
Событие присылается при невозможности доставить сообщение целевому игроку.

### Список параметров
- **`name`** (`WString`) - имя адресата.

- **`sysReason`** (`string`(`ENUM_EnumRequestAddressByNameFailCause_...`)) - причина неудачной отправки сообщения.
(HELP)