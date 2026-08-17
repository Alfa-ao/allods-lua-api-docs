## EVENT_UNIT_CLASS_CHANGED

### Описание

```
EVENT_UNIT_CLASS_CHANGED
```

Событие присылается при изменении информации о классе юнита.

### Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор юнита.

---

## EVENT_UNIT_DAMAGE_RECEIVED

[<Badge type="warning" text="^18.0.0" />](/index.md#18.0.0-EVENT_*) <Badge type="tip" text="Pre-Release" />

### Описание

```
EVENT_UNIT_DAMAGE_RECEIVED
```
Событие присылается при нанесении повреждения юниту. Тип повреждения соответствует перечислению `ENUM_SubElement_...`. Для срабатывания данного события требуется указание идентификатора объекта `ObjectId`(`number`) в качестве параметра функции common.RegisterEventHandler( eventFunction, sysEventName, params, requireMainThread ).(HELP)

В зависимости от того, чем был нанесен урон, одно из следующих полей будет не nil. Следующие поля заполняются, если был факт срабатывания соответствующего модификатора. В данный момент: `overallAbsorbedDamage` = `absorb` + `barrier` + `toMount`, `overallPreventedDamage` = `multipliersAbsorb` + `runesAbsorb`.

::: warning Замечание
Если повреждений нет, то может быть несколько факторов, повлиявших на это (вовсе не обязательно, что такой фактор только один).
:::

::: warning Замечание
Если повреждений нет и ни один из факторов не сработал, то можно считать, что урон был полностью поглощен (full absorb).
:::

### Список параметров
- **`source`** (`ObjectId` | `nil`) - Идентификатор того, кто наносит повреждения.
- **`sourceName`** (`WString`) - Имя того, кто наносит повреждения.
- **`target`** (`ObjectId`) - Идентификатор того, кто получает повреждения. Этот объект может уже исчезнуть, и надо проверять его на существование (см. object.IsExist()).
- **`amount`** (`number`) - Количество нанесенных повреждений.
- **`ability`** (`WString`) - Имя спелла или умения.
- **`sysSubElement`** (`string`(`ENUM_SubElement_...`)) - Тип повреждения. Значения соответствуют перечислению `ENUM_SubElement_...`.
- **`lethal`** (`boolean` | `nil`) - Этот удар был финальным. Юнит умер.
- **`spellId`** (`SpellId`(`ResourceId`) | `nil`) - Id спелла, если били спеллом.
- **`abilityId`** (`AbilityId`(`ResourceId`) | `nil`) - Id абилки, если били абилкой.
- **`buffId`** (`BuffId`(`ResourceId`) | `nil`) - Id буффа, если били буффом.
- **`mapModifierId`** (`MapModifierId`(`ResourceId`) | `nil`) - Модификатор карты, если повреждения от модификатора карты.
- **`isFall`** (`boolean`) - Повреждение от падения.
- **`isExploit`** (`boolean`) - Повреждения от эксплойта.
- **`isDodge`** (`boolean` | `nil`) - Увернулась ли цель от удара.
- **`isMiss`** (`boolean` | `nil`) - Был ли промах.
- **`isCritical`** (`boolean` | `nil`) - Был ли нанесён Critical Damage (увеличенное повреждение).
- **`isGlancing`** (`boolean` | `nil`) - Был ли нанесён glancing damage (уменьшенное повреждение).
- **`shieldBlock`** (`number`) - Величина заблокированного урона, если был Shield Block, иначе 0.
- **`parry`** (`number`) - Величина парированного урона, если был Parry, иначе 0.
- **`resist`** (`number`) - Величина зарезистенного урона, если был резист, иначе 0.
- **`barrier`** (`number`) - Величина урона, поглощенного барьером, если последний сработал, иначе 0.
- **`absorb`** (`number`) - Неотрицательная величина урона, поглощенного бафами.
- **`toMount`** (`number`) - Неотрицательная величина урона, поглощенного маунтом.
- **`multipliersAbsorb`** (`number`) - Величина, на которую уменьшился урон из-за множителей урона на цели (может быть отрицательной, если урон увеличился).
- **`runesAbsorb`** (`number`) - Неотрицательная величина урона, отраженного защитными рунами.
- **`damageSource`** (`string`) - Тип источника урона. Возможные значения: `DamageSource_SPELL`, `DamageSource_DOT`, `DamageSource_MAINATTACK`, `DamageSource_RANGEDATTACK`, `DamageSource_BARRIER`, `DamageSource_DAMAGEPOOL`, `DamageSource_OTHER`.
- **`overallAbsorbedDamage`** (`number`) - Величина всего поглощенного урона (урон ушёл в какую-то сущность).
- **`overallPreventedDamage`** (`number`) - Величина всего предотвращённого урона (урон вообще не попал в игрока).
- **`sourceTags`** (`table` of `CombatTagId` | `nil`) - Список усиливающих и ослабляющих эффектов на том, кто наносит повреждения.
- **`targetTags`** (`table` of `CombatTagId` | `nil`) - Список усиливающих и ослабляющих эффектов на том, кто получает повреждения.

### Смотрите также

- [CombatTagId](/api/types/CombatTagId.md)

---

## EVENT_UNIT_DEAD_CHANGED
### Описание
```
EVENT_UNIT_DEAD_CHANGED
```
Событие присылается при изменении статуса смерти юнита (юнит умер или ожил).

### Список параметров
- **`unitId`** (`ObjectId`) - Идентификатор юнита.

---

## EVENT_UNIT_EQUIPMENT_CHANGED
### Описание
```
EVENT_UNIT_EQUIPMENT_CHANGED
```
Событие присылается при изменении экипировки юнита (главный игрок или игрок, инспектируемый главным).

### Список параметров
- **`unitId`** (`ObjectId`) - Идентификатор юнита.
- **`slotType`** (`number`(`ITEM_CONT_...`)) - Тип контейнера. Значения соответствуют перечислению `ITEM_CONT_...`.
(HELP)
---

## EVENT_UNIT_FACTION_CHANGED
### Описание
```
EVENT_UNIT_FACTION_CHANGED
```
Событие присылается при изменении фракции юнита.

### Список параметров
- **`unitId`** (`ObjectId`) - Идентификатор юнита.

---

## EVENT_UNIT_FAIRY_CHANGED
### Описание
```
EVENT_UNIT_FAIRY_CHANGED
```
Событие присылается при изменении покровителя.

### Список параметров
- **`unitId`** (`ObjectId`) - Идентификатор объекта.


---

## EVENT_UNIT_FAIRY_RANK_CHANGED
### Описание
```
EVENT_UNIT_FAIRY_RANK_CHANGED
```
Событие присылается при изменении ранга покровителя (номера или статуса временный/постоянный).

### Список параметров
- **`unitId`** (`ObjectId`) - Идентификатор объекта, чей покровитель поменял ранг.

---

## EVENT_UNIT_FATALITY_CHANGED
### Описание
```
EVENT_UNIT_FATALITY_CHANGED
```
Событие приходит, если изменилось состояние проигрывания фаталити на каком-то юните.

### Список параметров
- **`id`** (`ObjectId`) - Идентификатор юнита.

---

## EVENT_UNIT_FOLLOWERS_LIST_CHANGED
### Описание
```
EVENT_UNIT_FOLLOWERS_LIST_CHANGED
```
Событие присылается каждый раз, когда у какого-либо игрока меняется список подчиненных юнитов (петы, ассистенты, турели и т.п.).

### Список параметров
- **`id`** (`ObjectId`) - Идентификатор игрока, у которого изменился список подчиненных юнитов.

### Смотрите также

- [unit.GetFollowers](/api/category/unit/function.unit.GetFollowers.md)

---

## EVENT_UNIT_GUILD_CHANGED
### Описание
```
EVENT_UNIT_GUILD_CHANGED
```
Событие присылается в случае изменения гильдии какого-либо игрока.

### Список параметров
- **`unitId`** (`ObjectId`) - Идентификатор игрока.

---

## EVENT_UNIT_HONOR_VALUE_CHANGED
### Описание
```
EVENT_UNIT_HONOR_VALUE_CHANGED
```
Событие присылается каждый раз, когда у игрока меняется слава.

### Список параметров
- **`unitId`** (`ObjectId`) - Идентификатор игрока.

---

## EVENT_UNIT_LEVEL_CHANGED
### Описание
```
EVENT_UNIT_LEVEL_CHANGED
```
Событие присылается при изменении уровня.

### Список параметров
- **`unitId`** (`ObjectId`) - Идентификатор юнита.
- **`amount`** (`number`) - Изменение уровня.

---

## EVENT_UNIT_MESSAGE
### Описание
```
EVENT_UNIT_MESSAGE
```
Событие присылается, если NPC или моб прислал текстовое сообщение.

### Список параметров
- **`id`** (`ObjectId` | `nil`) - Id юнита, если есть, иначе nil.
- **`name`** (`WString`) - Имя юнита.
- **`message`** (`WString`) - Текстовое сообщение от NPC.
- **`isWhisper`** (`boolean`) - Является ли сообщение личным.

---

## EVENT_UNIT_MOOD_CHANGED
### Описание
```
EVENT_UNIT_MOOD_CHANGED
```
Событие приходит, если у какого-либо игрока изменилось настроение.

### Список параметров
- **`unitId`** (`ObjectId`) - Идентификатор игрока.

---

## EVENT_UNIT_MOUNT_HEALTH_CHANGED
### Описание
```
EVENT_UNIT_MOUNT_HEALTH_CHANGED
```
Событие присылается каждый раз, когда у игрока меняется текущее здоровье ездового животного.

### Список параметров
- **`unitId`** (`ObjectId`) - Идентификатор игрока.
- **`health`** (`number`) - Точная величина здоровья маунта, если такая информация доступна (иначе 0).

---

## EVENT_UNIT_POS_CHANGED
### Описание
```
EVENT_UNIT_POS_CHANGED
```
Событие присылается при изменении координат юнита. В данный момент такое событие приходит только для юнитов, задетекченных специальным умением главного игрока.

### Список параметров
- **`unitId`** (`ObjectId`) - Идентификатор юнита.

---

## EVENT_UNIT_PVP_FLAG_CHANGED
### Описание
```
EVENT_UNIT_PVP_FLAG_CHANGED
```
Событие присылается при изменении PvP-флага какого-либо юнита (игрока или моба). У моба может поменяться только unit.GetPvPFlagInfo(id).isOn.(HELP)

### Список параметров
- **`unitId`** (`ObjectId`) - Идентификатор юнита.

---

## EVENT_UNIT_RAGE_CHANGED
### Описание
```
EVENT_UNIT_RAGE_CHANGED
```
Событие приходит, если изменилось количество Гнева у юнита.

### Список параметров
- **`unitId`** (`ObjectId`) - Идентификатор юнита.

### Смотрите также

- [unit.GetRage](/api/category/unit/function.unit.GetRage.md)

---

## EVENT_UNIT_RELATION_CHANGED
### Описание
```
EVENT_UNIT_RELATION_CHANGED
```
Событие присылается при возможном изменении состояния юнита (враждебное/дружественное/нейтральное). Присылается одновременно с событиями `EVENT_UNIT_FACTION_CHANGED` (при смене фракции юнита), `EVENT_UNIT_PVP_FLAG_CHANGED` (при смене PvP-флага) и `EVENT_GROUP_CHANGED` (при изменении состава группы).

### Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор юнита.

---

## EVENT_UNIT_TAG_CHANGED
### Описание
```
EVENT_UNIT_TAG_CHANGED
```
Событие присылается при изменении потаганности моба. Моб становится потаганным, когда какой-нибудь игрок вступает с ним в бой. После этого, в случае скоропостижной смерти моба, весь лут достается этому игроку вне зависимости от того, кто еще участвовал в жестоком убийстве.

### Список параметров
- **`unitId`** (`ObjectId`) - Идентификатор моба.

### Смотрите также

- [unit.IsTagged](/api/category/unit/function.unit.IsTagged.md)
- [unit.IsTaggedByMainPlayer](/api/category/unit/function.unit.IsTaggedByMainPlayer.md)

---

## EVENT_UNIT_TOOK_MONEY
### Описание
```
EVENT_UNIT_TOOK_MONEY
```
Событие присылается, если игрок в группе (или аватар) взял лут (деньги).

### Список параметров
- **`ownerId`** (`ObjectId`) - Идентификатор игрока, взявшего предмет.
- **`mobId`** (`ObjectId` | `nil`) - Идентификатор моба, с которого были взяты деньги (nil, если моб далеко).
- **`money`** (`number`) - Количество взятых денег.

---

## EVENT_UNIT_VETERAN_RANK_CHANGED
### Описание
```
EVENT_UNIT_VETERAN_RANK_CHANGED
```
Событие приходит, если изменился ветеранский ранг игрока.

### Список параметров
- **`unitId`** (`ObjectId`) - Идентификатор игрока.

---

## EVENT_UNIT_WILL_CHANGED
### Описание
```
EVENT_UNIT_WILL_CHANGED
```
Событие приходит, если изменилось количество Воли у юнита.

### Список параметров
- **`unitId`** (`ObjectId`) - Идентификатор юнита.

### Смотрите также

- [unit.GetWill](/api/category/unit/function.unit.GetWill.md)

---

## EVENT_UNIT_ZONE_PVP_TYPE_CHANGED
### Описание
```
EVENT_UNIT_ZONE_PVP_TYPE_CHANGED
```
Событие присылается при изменении PvP-типа зоны для игрока.

### Список параметров
- **`unitId`** (`ObjectId`) - Идентификатор игрока.