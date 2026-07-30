---
outline: deep
---
## EVENT_DEFAULT_SPELL_CHANGED

### Описание

```
EVENT_DEFAULT_SPELL_CHANGED
```

Событие посылается каждый раз, когда изменилось состояние умения или заклинания, не привязанного к книге заклинаний.

### Список параметров

- **`id`** (`SpellId`) - идентификатор ресурса умения.

---

## EVENT_DEFAULT_SPELL_EFFECT

### Описание

```
EVENT_DEFAULT_SPELL_EFFECT
```

Оповещение о начале эффекта для спелла, не привязанного к книге заклинаний. Типы эффектов: `EFFECT_TYPE_...`. Для некоторых из них в сообщении передаются дополнительные поля.

### Список параметров

- **`effect`** (`number` (`EFFECT_TYPE_...`)) - тип начавшегося эффекта.
- **`id`** (`SpellId`) - идентификатор ресурса умения.

Дополнительные поля в зависимости от типа эффекта:

Для `effect == EFFECT_TYPE_COOLDOWN_STARTED`:
- **`duration`** (`number`) - общая продолжительность в миллисекундах.
- **`remaining`** (`number`) - оставшееся время в миллисекундах.

Для `effect == EFFECT_TYPE_SPELL_PREPARED`:
- **`prepared`** (`boolean`) - текущее значение флага `prepared`.

Для `effect == EFFECT_TYPE_SPELL_ACTIVE_STATE_CHANGED`:
- **`isActive`** (`boolean`) - `true`, если спелл стал активным.
- **`objectId`** (`ObjectId` | `nil`) - идентификатор предмета, к которому привязан данный спелл.
