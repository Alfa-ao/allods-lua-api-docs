## EVENT_HEAL_ABSORB_POOL_APPEARED

### Описание

```
EVENT_HEAL_ABSORB_POOL_APPEARED
```

Событие присылается при появлении у юнита пула анти-хила.

### Список параметров

- **`unitId`** (`ObjectId`) - юнит, у которого появился пул анти-хила.

---

## EVENT_HEAL_ABSORB_POOL_CHANGED

### Описание

```
EVENT_HEAL_ABSORB_POOL_CHANGED
```

Событие присылается при изменении пула анти-хила у юнита.

### Список параметров

- **`unitId`** (`ObjectId`) - юнит, у которого изменился пул анти-хила.

- **`healAbsorb`** (`number`) - текущее значение пула анти-хила.

---

## EVENT_HEAL_ABSORB_POOL_DISAPPEARED

### Описание

```
EVENT_HEAL_ABSORB_POOL_DISAPPEARED
```

Событие присылается при исчезновении пула анти-хила у юнита.

### Список параметров

- **`unitId`** (`ObjectId`) - юнит, у которого исчез пул анти-хила.