## EVENT_MISSION_FREE_PORTRAIT_SLOT

### Описание

```
EVENT_MISSION_FREE_PORTRAIT_SLOT
```

Уведомление о том, что был освобожден слот с портретом. Необходимо очистить (заменить на валидные) текстуры фонового слоя для всех виджетов, которые использовали данный слот.

### Список параметров

- **`slot`** (`number`) - слот с портретом.

### Смотрите также

- [mission.FreePortrait](/api/category/mission/function.mission.FreePortrait.md)
- [mission.SetPortraitBackgroundTexture](/api/category/mission/function.mission.SetPortraitBackgroundTexture.md)

---

## EVENT_MISSION_INITIALIZED

### Описание

```
EVENT_MISSION_INITIALIZED
```

Событие, информирующее об инициализации загрузки миссии (все аддоны готовы к использованию). После этого события приходят ещё и `EVENT_ADDON_LOAD_STATE_CHANGED`.

### Список параметров

Параметры отсутствуют.

---

## EVENT_MISSION_RULE_ADDED

### Описание

```
EVENT_MISSION_RULE_ADDED
```

Уведомление о появлении игрового события.

### Список параметров

- **`ruleId`** (`RuleId`) - идентификатор ресурса события.

### Смотрите также

- [rules.GetEventByRuleId](/api/category/rules/function.rules.GetEventByRuleId.md)

---

## EVENT_MISSION_RULE_CHANGED

### Описание

```
EVENT_MISSION_RULE_CHANGED
```

Уведомление об изменении игрового события.

### Список параметров

- **`ruleId`** (`RuleId`) - идентификатор ресурса события.

### Смотрите также

- [rules.GetEventByRuleId](/api/category/rules/function.rules.GetEventByRuleId.md)

---

## EVENT_MISSION_RULE_COUNTER_CHANGED

### Описание

```
EVENT_MISSION_RULE_COUNTER_CHANGED
```

Уведомление об изменении счётчика игрового события.

### Список параметров

- **`ruleId`** (`ObjectId`) - идентификатор игрового события.

---

## EVENT_MISSION_RULE_REMOVED

### Описание

```
EVENT_MISSION_RULE_REMOVED
```

Уведомление об исчезновении игрового события.

### Список параметров

- **`ruleId`** (`RuleId`) - идентификатор ресурса события.

### Смотрите также

- [rules.GetEventByRuleId](/api/category/rules/function.rules.GetEventByRuleId.md)

---

## EVENT_MISSION_RULES_CHANGED

### Описание

```
EVENT_MISSION_RULES_CHANGED
```

Уведомление об изменении информации об игровых событиях.

### Список параметров

Параметры отсутствуют.