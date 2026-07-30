## EVENT_UNEQUIP_FAILED
### Описание
```
EVENT_UNEQUIP_FAILED
```
Событие присылается при провале попытки снять предмет.

### Список параметров
- **`slot`** (`number`) - Индекс слота в инвентаре [0..].
- **`sysCode`** (`string`(`ENUM_DressResult_...`)) - Код ошибки. Значения соответствуют перечислению `ENUM_DressResult_...`.
(HELP)