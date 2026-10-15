## EVENT_DAMAGE_RECEIVED_SIMPLE

<Badge type="warning" text="^18.0.0" /> <Badge type="tip" text="Pre-Release" />

### Описание

```
EVENT_DAMAGE_RECEIVED_SIMPLE
```

Событие присылается не чаще чем раз в 100мс, содержит агрегированный входящий урон по objectId. Присылается только если таковой урон был. Не требует обязательной фильтрации. Заведено для отлетающих цифр на портретах.

### Список параметров

- **`objectId`** (`ObjectId`) - Урон кто получает. (HELP) уточнить

- **`amount`** (`number`) - Входящий урон int64 != 0.