## EVENT_SKILL_ADDED

### Описание

```
EVENT_SKILL_ADDED
```

Событие присылается, когда главный игрок изучает скилл.

### Список параметров

- **`skillId`** (`SkillId`) - Id ресурса скилла.

---

## EVENT_SKILL_IMPROVEMENT_CHANGED

### Описание

```
EVENT_SKILL_IMPROVEMENT_CHANGED
```

Событие присылается при изменении опыта, накопленного на уровне скилла.

### Список параметров

- **`skillId`** (`SkillId`) - Идентификатор ресурса скилла.

---

## EVENT_SKILL_REMOVED

### Описание

```
EVENT_SKILL_REMOVED
```

Событие присылается, когда главный игрок забывает скилл.

### Список параметров

- **`skillId`** (`SkillId`) - Id ресурса скилла (можно получить `avatar.GetSkillInfo(skillId)`).(HELP)

---

## EVENT_SKILL_SCORE_CHANGED

### Описание

```
EVENT_SKILL_SCORE_CHANGED
```

Событие присылается при изменении уровня скилла главного игрока.

### Список параметров

- **`skillId`** (`SkillId`) - Идентификатор ресурса скилла.