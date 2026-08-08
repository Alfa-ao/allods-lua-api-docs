---
outline: deep
---
## EVENT_HANGAR_ACTIVE_HULL_CHANGED

### Описание

```lua
EVENT_HANGAR_ACTIVE_HULL_CHANGED
```

Событие присылается при смене корпуса активного корабля.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [hangar.GetActiveShipHull](/api/category/hangar/function.hangar.GetActiveShipHull.md)

---

## EVENT_HANGAR_ACTIVE_SHIP_CHANGED

### Описание

```lua
EVENT_HANGAR_ACTIVE_SHIP_CHANGED
```

Событие присылается при смене активного корабля.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [hangar.GetActiveShip](/api/category/hangar/function.hangar.GetActiveShip.md)

---

## EVENT_HANGAR_ACTIVE_SHIP_HULLS_CHANGED

### Описание

```lua
EVENT_HANGAR_ACTIVE_SHIP_HULLS_CHANGED
```

Событие присылается при изменении списка доступных для выбора корпусов у активного корабля.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [hangar.GetAvailableHulls](/api/category/hangar/function.hangar.GetAvailableHulls.md)

---

## EVENT_HANGAR_ACTIVE_SHIP_SKINS_CHANGED

### Описание

```lua
EVENT_HANGAR_ACTIVE_SHIP_SKINS_CHANGED
```

Событие присылается при изменении списка доступных для выбора скинов корпуса активного корабля.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [hangar.GetAvailableSkins](/api/category/hangar/function.hangar.GetAvailableSkins.md)

---

## EVENT_HANGAR_ACTIVE_SKIN_CHANGED

### Описание

```lua
EVENT_HANGAR_ACTIVE_SKIN_CHANGED
```

Событие присылается при смене скина корпуса активного корабля.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [hangar.GetActiveShipSkin](/api/category/hangar/function.hangar.GetActiveShipSkin.md)

---

## EVENT_HANGAR_DEVICES_RECEIVED

### Описание

```lua
EVENT_HANGAR_DEVICES_RECEIVED
```

Событие присылается при получении списка имеющихся устройств после запроса НПС в ангаре.

### Список параметров

Параметры отсутствуют.

---

## EVENT_HANGAR_REPAIR_QUESTION

### Описание

```lua
EVENT_HANGAR_REPAIR_QUESTION
```

Событие приходит с информацией о требуемом ремонте корабля. Для начала или отмены ремонта требуется ответ `hangar.RepairReply(positive)`. Ремонт происходит тиками одинаковой длительности. Чтобы пропустить определенное количество тиков, игрок должен заплатить определенное количество ресурсов.

### Список параметров

- **`moneyToAdd`** (`number`) - Сколько надо добавить денег.

- **`tickCountToFullRepair`** (`number`) - Количество тиков до полной починки.

- **`maxTickCount`** (`number`) - Количество тиков до всей возможной починки на имеющихся ресурсах.

- **`shipRepairPerTick`** (`number`) - Процент корабля, который будет отремонтирован [0..100] за один тик.

- **`tickTimeMs`** (`number`) - Время тика в миллисекундах.

- **`itemId`** (`ObjectId`) - Идентификатор итема, который нужен и сколько его потратится.

- **`itemsPerTick`** (`number`) - Количество предметов, тратящихся за один тик. Может быть дробным. При трате округляется в большую сторону.

- **`totalRepairTime`** (`table`) - Сколько времени займет ремонт на всех имеющихся ресурсах:
    - **`d`** (`number`) - Количество дней.
    - **`h`** (`number`) - Количество часов.
    - **`m`** (`number`) - Количество минут.
    - **`s`** (`number`) - Количество секунд.

- **`fullRepairTime`** (`table`) - Сколько времени займет вообще весь ремонт:
    - **`d`** (`number`) - Количество дней.
    - **`h`** (`number`) - Количество часов.
    - **`m`** (`number`) - Количество минут.
    - **`s`** (`number`) - Количество секунд.

---

## EVENT_HANGAR_SHIPS_CHANGED

### Описание

```lua
EVENT_HANGAR_SHIPS_CHANGED
```

Событие присылается при изменении списка доступных для выбора кораблей.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [hangar.GetShips](/api/category/hangar/function.hangar.GetShips.md)

---

## EVENT_HANGAR_SLOT_DEVICES_RECEIVED

### Описание

```lua
EVENT_HANGAR_SLOT_DEVICES_RECEIVED
```

Событие присылается при получении списка имеющихся устройств для замены после запроса слота в ангаре.

### Список параметров

Параметры отсутствуют.

---

## EVENT_HANGAR_SPELL_CHANGED

### Описание

```lua
EVENT_HANGAR_SPELL_CHANGED
```

Событие присылается при изменении одного из спеллов, используемых для работы с кораблём в ангаре, например в случае, когда изменилась возможность использовать этот спелл.

### Список параметров

- **`id`** (`SpellId`) - Идентификатор ресурса спелла.

### Смотрите также

- [hangar.GetUnsummonShipSpellId](/api/category/hangar/function.hangar.GetUnsummonShipSpellId.md)
- [hangar.GetSummonShipSpellId](/api/category/hangar/function.hangar.GetSummonShipSpellId.md)
- [hangar.GetSwitchShipMasterHullSpellId](/api/category/hangar/function.hangar.GetSwitchShipMasterHullSpellId.md)
- [hangar.GetSwitchShipSkinSpellId](/api/category/hangar/function.hangar.GetSwitchShipSkinSpellId.md)
- [EVENT_HANGAR_SPELL_EFFECT](/api/events/events.EVENT_HANGAR_.md#event-hangar-spell-effect)

---

## EVENT_HANGAR_SPELL_EFFECT

### Описание

```lua
EVENT_HANGAR_SPELL_EFFECT
```

Событие присылается при начале эффекта для одного из спеллов, используемых для работы с кораблём в ангаре. Аналогично `EVENT_SPELLBOOK_ELEMENT_EFFECT`.

### Список параметров

Параметры аналогичны параметрам события `EVENT_SPELLBOOK_ELEMENT_EFFECT`.

### Смотрите также

- [hangar.GetUnsummonShipSpellId](/api/category/hangar/function.hangar.GetUnsummonShipSpellId.md)
- [hangar.GetSummonShipSpellId](/api/category/hangar/function.hangar.GetSummonShipSpellId.md)
- [hangar.GetSwitchShipMasterHullSpellId](/api/category/hangar/function.hangar.GetSwitchShipMasterHullSpellId.md)
- [hangar.GetSwitchShipSkinSpellId](/api/category/hangar/function.hangar.GetSwitchShipSkinSpellId.md)
- [EVENT_SPELLBOOK_ELEMENT_EFFECT](/api/events/events.EVENT_SPELLBOOK_.md#event-spellbook-element-effect)
- [EVENT_HANGAR_SPELL_CHANGED](/api/events/events.EVENT_HANGAR_.md#event-hangar-spell-changed)