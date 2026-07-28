---
outline: deep
---
## EVENT_ASTROLABE_INFO_CHANGED

### Описание

```
EVENT_ASTROLABE_INFO_CHANGED
```

Событие посылается при изменении информации о доступных секторах для прыжка (быстрое путешествие).

### Список параметров

- **`id`** (`ObjectId`) - Идентификатор корабля.

### Смотрите также

- [astral.GetAstrolabeInfoEx](/api/category/astral/function.astral.GetAstrolabeInfoEx.md)

---

## EVENT_ASTROLABE_SPELL_CHANGED

Оповещение об изменении спелла астролябии на корабле.

### Описание

```
EVENT_ASTROLABE_SPELL_CHANGED
```

Событие срабатывает при изменении идентификатора заклинания, связанного с функциями астролябии на транспортном средстве.

### Список параметров

- **`id`** (`SpellId`) - Идентификатор ресурса спелла.

---

## EVENT_ASTROLABE_SPELL_EFFECT

Оповещение о начале эффекта для спелла астролябии на корабле.

### Описание

```
EVENT_ASTROLABE_SPELL_EFFECT
```

Событие уведомляет о запуске визуального или логического эффекта, связанного с заклинанием астролябии. Параметры события аналогичны параметрам события `EVENT_SPELLBOOK_ELEMENT_EFFECT`.

### Список параметров

Параметры соответствуют структуре события [EVENT_SPELLBOOK_ELEMENT_EFFECT](events.EVENT_SPELLBOOK_.md#event-spellbook-element-effect).