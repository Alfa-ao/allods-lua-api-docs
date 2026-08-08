## EVENT_LOOT_BAG_APPEARED

### Описание

```
EVENT_LOOT_BAG_APPEARED
```

Событие посылается каждый раз, когда появляется какой-нибудь контейнер с лутом.

### Список параметров

- **`lootBagId`** (`ObjectId`) - уникальный идентификатор контейнера.

---

## EVENT_LOOT_BAG_CHANGED

### Описание

```
EVENT_LOOT_BAG_CHANGED
```

Событие посылается на изменение контейнера с лутом. Если одновременно изменились несколько элементов, то событие присылается только раз.

### Список параметров

Параметры отсутствуют.

---

## EVENT_LOOT_BAG_DISAPPEARED

### Описание

```
EVENT_LOOT_BAG_DISAPPEARED
```

Событие посылается на исчезновение контейнера с лутом.

### Список параметров

- **`lootBagId`** (`ObjectId`) - уникальный идентификатор контейнера.

---

## EVENT_LOOT_BAG_ITEM_DISAPPEARED

### Описание

```
EVENT_LOOT_BAG_ITEM_DISAPPEARED
```

Событие посылается на исчезновение объекта в контейнере с лутом.

### Список параметров

- **`index`** (`number`) - индекс (0..) объекта в контейнере.

---

## EVENT_LOOT_BAG_MONEY_DISAPPEARED

### Описание

```
EVENT_LOOT_BAG_MONEY_DISAPPEARED
```

Событие посылается на исчезновение денег в контейнере с лутом.

### Список параметров

Параметры отсутствуют.

---

## EVENT_LOOT_BAG_OPEN_STATE_CHANGED

### Описание

```
EVENT_LOOT_BAG_OPEN_STATE_CHANGED
```

Событие посылается на открытие или закрытие сумки с лутом.

### Список параметров

- **`customFilter`** (`number`) - фильтр, переданный из скрипта при использовании предмета.

---

## EVENT_LOOT_BAG_SELECTED

### Описание

```
EVENT_LOOT_BAG_SELECTED
```

Событие посылается при селекте контейнера с лутом. В настоящий момент только на клик в неселекченный труп, то есть в момент селекта моба с лутом.

### Список параметров

- **`lootBagId`** (`ObjectId`) - уникальный идентификатор контейнера с лутом.

---

## EVENT_LOOT_CHEST_CAPTURED

### Описание

```
EVENT_LOOT_CHEST_CAPTURED
```

Событие посылается каждый раз, когда игрок приносит чужой сундук в свою сокровищницу.

### Список параметров

- **`playerId`** (`ObjectId`) - Id игрока захватившего сундук.

- **`isEnemyChest`** (`boolean`) - является ли сундук вражеским.

---

## EVENT_LOOT_CHEST_DROPPED

### Описание

```
EVENT_LOOT_CHEST_DROPPED
```

Событие посылается каждый раз, когда игрок бросает сундук на корабле.

### Список параметров

- **`playerId`** (`ObjectId`) - Id игрока бросившего сундук.

- **`isEnemyChest`** (`boolean`) - является ли сундук вражеским.

---

## EVENT_LOOT_CHEST_RETURNED

### Описание

```
EVENT_LOOT_CHEST_RETURNED
```

Событие посылается каждый раз, когда игрок возвращает сундук в сокровищницу.

### Список параметров

- **`playerId`** (`ObjectId`) - Id игрока возвратившего сундук.

- **`isEnemyChest`** (`boolean`) - является ли сундук вражеским.

---

## EVENT_LOOT_CHEST_TAKEN

### Описание

```
EVENT_LOOT_CHEST_TAKEN
```

Событие посылается каждый раз, когда игрок поднимает сундук на корабле.

### Список параметров

- **`playerId`** (`ObjectId`) - Id игрока поднявшего сундук.

- **`isEnemyChest`** (`boolean`) - является ли сундук вражеским.

---

## EVENT_LOOT_DISTRIBUTION_STARTED

### Описание

```
EVENT_LOOT_DISTRIBUTION_STARTED
```

Событие присылается при начале ролла при Master ролле. Приходит всем, кроме мастера (мастеру приходит `EVENT_LOOT_TO_DISTRIBUTE`).

### Список параметров

- **`itemObject`** (`ValuedObject`) - объект, содержащий информацию о предмете.

## Смотрите также

- [EVENT_LOOT_TO_DISTRIBUTE](/api/events/events.EVENT_LOOT_.md#event-loot-to-distribute)

---

## EVENT_LOOT_FOR_GREED_NEED

### Описание

```
EVENT_LOOT_FOR_GREED_NEED
```

Событие приходит при начале дележа при Greed/Need ролле.

### Список параметров

- **`rollId`** (`ObjectId`) - уникальный идентификатор ролла.

- **`itemId`** (`ObjectId`) - уникальный идентификатор айтема.

- **`count`** (`number`) - количество данного айтема в стеке.

---

## EVENT_LOOT_MARK

### Описание

```
EVENT_LOOT_MARK
```

Событие присылается при появлении или исчезновении лута в юните-трупе. Используется для вывешивания лут-марок над трупиками.

### Список параметров

- **`unitId`** (`ObjectId`) - идентификатор юнита-трупа, в котором появился или исчез лут.

- **`enabled`** (`boolean`) - true, если лут есть.

---

## EVENT_LOOT_TO_DISTRIBUTE

### Описание

```
EVENT_LOOT_TO_DISTRIBUTE
```

Событие присылается при начале ролла при Master ролле (приходит только мастеру).

### Список параметров

- **`rollId`** (`ObjectId`) - уникальный идентификатор ролла.

- **`itemId`** (`ObjectId`) - уникальный идентификатор итема.

- **`looters`** (`table`) - список кросс-серверных уникальных идентификаторов игроков, принимающих участие в ролле (индексируется [0...]).

## Смотрите также

- [raid.GetMemberInfo](/api/category/raid/function.raid.GetMemberInfo.md)
- [group.GetMemberInfo](/api/category/group/function.group.GetMemberInfo.md)