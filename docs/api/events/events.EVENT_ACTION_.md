---
outline: deep
---
# EVENT_ACTION_*

Список событий `EVENT_ACTION_*`

## EVENT_ACTION_FAILED_EXPLOIT

### Описание

```
EVENT_ACTION_FAILED_EXPLOIT
```

Событие передается при неудачном исполнении эксплойта.

### Список параметров

- **`sysId`** (`string`) - строковый код ошибки вида `ENUM_ActionFailCause_...`.

- **`isInNotPredicate`** (`boolean`) - `true`, если причина ошибки на самом деле противоположна полученному коду ошибки `sysId`.

- **`name`** (`WString`) - имя предмета, необходимого для каста (передается, если `sysId` == `ENUM_ActionFailCause_NoItem`).

- **`name`** (`WString`) - имя баффа в списке баффов, необходимого для каста (передается, если `sysId` == `ENUM_ACTION_FAILED_NO_BUFF`).

- **`dress`** (`number`) - тип одежды/оружия, необходимый для каста (передается, если `sysId` == `ENUM_ActionFailCause_NotEquipped`). Значения: `DRESS_SLOT_...`.

- **`name`** (`WString`) - имя класса, необходимого для каста (передается, если `sysId` == `ENUM_ActionFailCause_WrongCharacterClass`).

::: danger Поле устарело (`OBSOLETE`).
- **`race`** (`number`) - раса, необходимая для каста (передается, если `sysId` == `ENUM_ActionFailCause_WrongCreatureRace`). 
:::

- **`sysRace`** (`string`) - раса существа (передается, если `sysId` == `ENUM_ActionFailCause_WrongCreatureRace`). Значения: `ENUM_CreatureRace_...`.

---

## EVENT_ACTION_FAILED_OTHER

### Описание

```
EVENT_ACTION_FAILED_OTHER
```

Событие присылается при неудачном исполнении действия, не являющегося заклинанием или эксплойтом.

### Список параметров

- **`sysId`** (`string`) - строковый код ошибки `ENUM_ActionFailCause_...`.

- **`isInNotPredicate`** (`boolean`) - `true`, если причина ошибки на самом деле противоположна полученному коду ошибки `sysId`.

- **`name`** (`WString`) - имя предмета, необходимого для каста (передается, если `sysId` == `ENUM_ActionFailCause_NoItem`).

- **`sysName`** (`string`) - служебное название ресурса (передается, если `sysId` == `ENUM_ActionFailCause_NoItem`).

- **`name`** (`WString`) - имя баффа в списке баффов, необходимого для каста (передается, если `sysId` == `ENUM_ACTION_FAILED_NO_BUFF`).

- **`dress`** (`number`) - тип одежды/оружия, необходимый для каста (передается, если `sysId` == `ENUM_ActionFailCause_NotEquipped`). Значения: `DRESS_SLOT_...`.

- **`name`** (`WString`) - имя класса, необходимого для каста (передается, если `sysId` == `ENUM_ActionFailCause_WrongCharacterClass`).

::: danger Поле устарело (`OBSOLETE`).
- **`race`** (`number`) - раса, необходимая для каста (передается, если `sysId` == `ENUM_ActionFailCause_WrongCreatureRace`).
:::

- **`sysRace`** (`string`) - раса существа (передается, если `sysId` == `ENUM_ActionFailCause_WrongCreatureRace`). Значения: `ENUM_CreatureRace_...`.

---

## EVENT_ACTION_FAILED_SPELL

### Описание

```
EVENT_ACTION_FAILED_SPELL
```

Событие приходит при неудачном исполнении заклинания.

### Список параметров

- **`sysId`** (`string`) - строковый код ошибки вида `ENUM_ActionFailCause_...`.

- **`unitId`** (`ObjectId`) - идентификатор юнита, вызвавшего ошибку.

- **`spellId`** (`SpellId`) - идентификатор исполняемого заклинания.

- **`isInNotPredicate`** (`boolean`) - `true`, если причина ошибки на самом деле противоположна полученному коду ошибки `sysId`.

- **`name`** (`WString` | `nil`) - имя предмета, необходимого для каста (передается для `ENUM_ActionFailCause_NoItem`, `ENUM_ActionFailCause_CannotTakeItem`).

- **`number`** (`number` | `nil`) - необходимое количество предметов или ресурсов (передается для `NoItem`, `CannotTakeItem`, `NotEnoughMana`, `NotEnoughEnergy`, `NotEnoughHonor`, `HealthNotHigher`, `HealthNotLower`, `PetHealthNotHigher`).

- **`dress`** (`number` | `nil`) - тип одежды/оружия, необходимый для каста (передается для `NotEquipped`, `DressedItemCannotBeUpgraded`). Значения: `DRESS_SLOT_...`.

- **`itemClass`** (`WString` | `nil`) - имя класса предмета, необходимого для каста (передается для `NotEquipped`, `DressedItemCannotBeUpgraded`).

::: danger Поле устарело (`OBSOLETE`).
- **`race`** (`number` | `nil`) - раса, необходимая для каста (передается для `WrongCreatureRace`).
:::

- **`sysRace`** (`string` | `nil`) - раса существа (передается для `WrongCreatureRace`). Значения: `ENUM_CreatureRace_...`.

- **`psionicContactType`** (`number` | `nil`) - тип контакта (передается для `NoPsionicContact`). Значения: `PSIONIC_CONTACT_...`.

- **`sysPsionicContactType`** (`string` | `nil`) - строковое значение типа контакта (передается для `NoPsionicContact`). Значения: `ENUM_Normal`, `ENUM_Crude`.

- **`name`** (`WString` | `nil`) - имя (передается для `NoBuff`, `WrongCharacterClass`, `CannotLearnSkill`, `HasSkill`, `NoAbility`, `NoSpell`, `WrongAvatarRace`, `WrongAvatarSex`, `WrongMobWorld`).

- **`reputationLevel`** (`number` | `nil`) - уровень репутации, если требуется (передается для `ReputationLevelNotLess`, `ReputationNotLess`, `WrongFaction`). Значения: `REPUTATION_LEVEL_...`.

- **`mobs`** (`table`) - таблица имён подходящих мобов (передается для `WrongMobWorld`).

---

## EVENT_ACTION_PANEL_CHANGED

### Описание

```
EVENT_ACTION_PANEL_CHANGED
```

Событие посылается каждый раз, когда изменяется состояние панели действий (`ActionPanel`).

### Список параметров

Параметры отсутствуют.

---

## EVENT_ACTION_PANEL_ELEMENT_CHANGED

### Описание

```
EVENT_ACTION_PANEL_ELEMENT_CHANGED
```

Событие присылается каждый раз, когда изменяется состояние элемента на панели действий (`ActionPanel`). К созданию или удалению элемента это не относится, при этом изменяется панель целиком. При изменении каких-либо эффектов передается событие `EVENT_ACTION_PANEL_ELEMENT_EFFECT`.

### Список параметров

- **`index`** (`number`) - индекс элемента на панели действий (0..nn).

---

## EVENT_ACTION_PANEL_ELEMENT_EFFECT

### Описание

```
EVENT_ACTION_PANEL_ELEMENT_EFFECT
```

Событие передается при начале эффекта для элемента на панели управления. Типы эффектов: `EFFECT_TYPE_...`. Для некоторых из них в сообщении передаются дополнительные поля. Всё остальное, что не касается эффектов, при изменении присылает `EVENT_ACTION_PANEL_ELEMENT_CHANGED`. Событие глобального времени восстановления (ГКД): `EVENT_GLOBAL_COOLDOWN`.

::: warning Замечание
Для событий `COOLDOWN` учитывается только КД самого спелла и КД группы спеллов (разные ранги, умения за слезы и т.п.). ГКД не учитывается! При начале и окончании ГКД данное событие не приходит.
:::

### Список параметров

- **`effect`** (`number`) - тип начавшегося эффекта (`EFFECT_TYPE_...`).

- **`index`** (`number`) - индекс элемента на панели управления.

- **`duration`** (`number`) - общая продолжительность в миллисекундах (передается, если `effect` == `EFFECT_TYPE_COOLDOWN_STARTED`).

- **`remaining`** (`number`) - оставшееся время в миллисекундах (передается, если `effect` == `EFFECT_TYPE_COOLDOWN_STARTED`).

- **`prepared`** (`boolean`) - текущее значение флага `prepared` (передается, если `effect` == `EFFECT_TYPE_SPELL_PREPARED`).

- **`isActive`** (`boolean`) - `true`, если спелл стал активным (передается, если `effect` == `EFFECT_TYPE_SPELL_ACTIVE_STATE_CHANGED`).

---

## EVENT_PROCESS_TERMINATED

### Описание

```
EVENT_PROCESS_TERMINATED
```

Событие приходит при прерывании текущего действия.

### Список параметров

- **`sysId`** (`string`) - строковый код ошибки вида `ENUM_ActionFailCause_...`.

---

## EVENT_ACTION_PROGRESS_FINISH

### Описание

```
EVENT_ACTION_PROGRESS_FINISH
```

Событие присылается при окончании действия юнитом.

### Список параметров

Параметры отсутствуют.

---

## EVENT_ACTION_PROGRESS_FREEZE

### Описание

```
EVENT_ACTION_PROGRESS_FREEZE
```

Событие передается во время заморозки действия.

### Список параметров

- **`progress`** (`number`) - обновление времени действия в миллисекундах.

---

## EVENT_ACTION_PROGRESS_START

### Описание

```
EVENT_ACTION_PROGRESS_START
```

Событие присылается при запуске действия юнитом.

### Список параметров

- **`duration`** (`number`) - время действия в миллисекундах.

- **`progress`** (`number`) - прошедшее время в миллисекундах (так как событие может прийти с задержкой).

- **`name`** (`WString`) - название действия.

- **`launchWhenReady`** (`boolean`) - если `true`, то действие сработает сразу после окончания подготовки; если `false`, то действие можно приготовить и удерживать его запуск.

- **`spellId`** (`SpellId` | `nil`) - идентификатор спелла, если известен.

- **`isPrecast`** (`boolean` | `nil`) - признак наличия времени прекаста у спелла, если известен.

- **`isChannel`** (`boolean` | `nil`) - признак наличия механики чаннелинга у спелла, если известен.

- **`board`** (`number` | `nil`) - индекс борта соло-корабля, если действие было связано с ним (0/1 - левый верхний/нижний, 2/3 - правый верхний/нижний, 4 - передний).

---

## EVENT_ACTION_PROGRESS_UPDATE

### Описание

```
EVENT_ACTION_PROGRESS_UPDATE
```

Событие присылается во время выполнения действия.

### Список параметров

- **`progress`** (`number`) - обновление времени действия в миллисекундах.

- **`name`** (`WString`) - название действия.

---

## EVENT_ACTION_RESULT_SPECIAL_SPELL

### Описание

```
EVENT_ACTION_RESULT_SPECIAL_SPELL
```

Событие передается при получении особых результатов выполнения заклинания.

### Список параметров

- **`sysId`** (`string`) - строковый код результата вида `ENUM_ACTION_RESULT_SPECIAL_...`. Возможные значения:
    - `ENUM_ACTION_RESULT_SPECIAL_UNKNOWN`
    - `ENUM_ACTION_RESULT_SPECIAL_STARTED`
    - `ENUM_ACTION_RESULT_SPECIAL_LAUNCHED`
    - `ENUM_ACTION_RESULT_SPECIAL_NO_RANGED_WEAPON`
    
- **`unitId`** (`ObjectId`) - идентификатор юнита, ставшего непосредственной причиной данного уведомления.

- **`targetId`** (`ObjectId` | `nil`) - идентификатор объекта, в который выпущено заклинание (передается для `ENUM_ACTION_RESULT_SPECIAL_LAUNCHED`).

- **`spellId`** (`SpellId`) - идентификатор заклинания.

## Смотрите также

- [ENUM_ACTION_](ENUM_ACTION_)
- [ENUM_CreatureRace](ENUM_CreatureRace)
- [ENUM_Normal](ENUM_Normal)
- [ENUM_Crude](ENUM_Crude)
- [REPUTATION_LEVEL_](REPUTATION_LEVEL_)
- [EFFECT_TYPE_](EFFECT_TYPE_)
- [EVENT_GLOBAL_COOLDOWN](EVENT_GLOBAL_COOLDOWN)