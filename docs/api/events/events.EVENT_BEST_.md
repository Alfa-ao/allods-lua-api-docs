## EVENT_BEST_FRIEND_RETURN_STATE_CHANGED

### Описание

```
EVENT_BEST_FRIEND_RETURN_STATE_CHANGED
```

Оповещение об изменении возможности телепортации обратно от побратима к начальной позиции.

### Список параметров

Параметры отсутствуют.

---

## EVENT_BEST_FRIEND_TELEPORT_SPELL_CHANGED

### Описание

```
EVENT_BEST_FRIEND_TELEPORT_SPELL_CHANGED
```

Событие приходит, если изменилось состояние спелла для телепортации к побратиму.

### Список параметров

- **`id`** (`SpellId`) - идентификатор ресурса спелла.

---

## EVENT_BEST_FRIEND_TELEPORT_SPELL_EFFECT

[<Badge type="warning" text="^18.0.0" />](/index.md#18.0.0-EVENT__EFFECT) <Badge type="tip" text="Pre-Release" />

### Описание

```
EVENT_BEST_FRIEND_TELEPORT_SPELL_EFFECT
```

Оповещение о начале эффекта для спелла телепортации к побратиму.
Типы эффектов: `EFFECT_TYPE_...`. Для некоторых из них в сообщении передаются дополнительные поля.

Событие ГКД: `EVENT_GLOBAL_COOLDOWN`.

::: warning Внимание
Для событий `COOLDOWN` учитывается только КД самого спелла и КД группы спеллов (разные ранги, умения за слезы и т.п.). ГКД не учитывается! При начале и окончании ГКД данное событие не приходит.
:::

### Список параметров
- **`effect`** (`number` (`EFFECT_TYPE_...`)) - тип начавшегося эффекта.
- **`id`** (`SpellId`) - идентификатор ресурса умения.

#### Дополнительные поля для `effect == EFFECT_TYPE_COOLDOWN_STARTED`
- **`duration`** (`number`) - общая продолжительность в миллисекундах.
- **`remaining`** (`number`) - оставшееся время в миллисекундах.

#### Дополнительные поля для `effect == EFFECT_TYPE_SPELL_PREPARED`
- **`prepared`** (`boolean`) - текущее значение флага `prepared`.

#### Дополнительные поля для `effect == EFFECT_TYPE_SPELL_ACTIVE_STATE_CHANGED`
- **`isActive`** (`boolean`) - `true`, если спелл стал активным.
- **`objectId`** (`ObjectId` | `nil`) - идентификатор предмета, к которому привязан данный спелл.

---

## EVENT_BEST_FRIEND_TELEPORT_STATE_CHANGED

### Описание

```
EVENT_BEST_FRIEND_TELEPORT_STATE_CHANGED
```

Оповещение об изменении возможности телепортации к побратиму.

### Список параметров

Параметры отсутствуют.