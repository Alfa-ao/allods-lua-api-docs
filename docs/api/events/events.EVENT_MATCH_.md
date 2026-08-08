## EVENT_MATCH_MAKING_AUTO_DEPART_TIME_CHANGED

### Описание

```
EVENT_MATCH_MAKING_AUTO_DEPART_TIME_CHANGED
```

Событие посылается каждый раз, когда меняется время автоматической отправки группы в активность.

### Список параметров

- **`eventId`** (`ObjectId`) - идентификатор активности в которую собирается группа.

---

## EVENT_MATCH_MAKING_CURRENT_BATTLE_CHANGED

### Описание

```
EVENT_MATCH_MAKING_CURRENT_BATTLE_CHANGED
```

Событие посылается когда меняется информация о сражении, в котором аватар принимает участие.

### Список параметров

Параметры отсутствуют.

## Смотрите также

- [matchMaking.GetCurrentBattleInfo](/api/category/matchMaking/function.matchMaking.GetCurrentBattleInfo.md)

---

## EVENT_MATCH_MAKING_EVENT_ADDED

### Описание

```
EVENT_MATCH_MAKING_EVENT_ADDED
```

Событие посылается каждый раз, когда в списке инстанс-ивентов появляется новый элемент. Должно быть включено получение и отслеживание информации об инстанс-ивентах.

### Список параметров

- **`eventId`** (`ObjectId`) - id добавленного инстанс-ивента.

## Смотрите также

- [matchMaking.ListenEvents](/api/category/matchMaking/function.matchMaking.ListenEvents.md)

---

## EVENT_MATCH_MAKING_EVENT_AVAILABILITY_CHANGED

### Описание

```
EVENT_MATCH_MAKING_EVENT_AVAILABILITY_CHANGED
```

Событие посылается когда у аватара появляется или теряется способность участвовать в каком-либо инстанс-ивенте.

### Список параметров

- **`eventId`** (`ObjectId`) - id инстанс-ивента, чья доступность изменилась.

## Смотрите также

- [matchMaking.GetEventInfo](/api/category/matchMaking/function.matchMaking.GetEventInfo.md)

- [EVENT_MATCH_MAKING_EVENTS_AVAILABILITY_CHANGED](/api/events/events.EVENT_MATCH_.md#event-match-making-events-availability-changed)

---

## EVENT_MATCH_MAKING_EVENT_DOUBLE_BONUS_CHANGED

### Описание

```
EVENT_MATCH_MAKING_EVENT_DOUBLE_BONUS_CHANGED
```

Событие посылается когда у инстанс-ивента появляется или пропадает откат бонуса.

### Список параметров

- **`eventId`** (`ObjectId`) - id инстанс-ивента, чей бонус изменился.

## Смотрите также

- [matchMaking.GetEventInfo](/api/category/matchMaking/function.matchMaking.GetEventInfo.md)

---

## EVENT_MATCH_MAKING_EVENT_PROGRESS_ADDED

### Описание

```
EVENT_MATCH_MAKING_EVENT_PROGRESS_ADDED
```

Событие посылается каждый раз, когда получена новая информация о прогрессе текущего инстанс-ивента (либо по завершении инстанс-ивента, либо после включения получения информации о прогрессе текущего инстанс-ивента).

### Список параметров

Параметры отсутствуют.

---

## EVENT_MATCH_MAKING_EVENT_PROGRESS_COMPLETED_CHANGED

### Описание

```
EVENT_MATCH_MAKING_EVENT_PROGRESS_COMPLETED_CHANGED
```

Событие посылается при изменении статуса завершённости текущего инстанс-ивента (предполагается, что принудительная телепортация из инстанса случится несколько позже и за это время игрок может просмотреть статистику по ивенту). Посылается только если включено слежение за прогрессом ивента, поэтому при каждом включении слежения за прогрессом (после получения сообщения `EVENT_MATCH_MAKING_EVENT_PROGRESS_ADDED`) текущее состояние нужно проверять дополнительно.

### Список параметров

Параметры отсутствуют.

## Смотрите также

- [EVENT_MATCH_MAKING_EVENT_PROGRESS_ADDED](/api/events/events.EVENT_MATCH_.md#event-match-making-event-progress-added)
- [matchMaking.GetEventProgressInfo](/api/category/matchMaking/function.matchMaking.GetEventProgressInfo.md)

---

## EVENT_MATCH_MAKING_EVENT_PROGRESS_DURATION_CHANGED

### Описание

```
EVENT_MATCH_MAKING_EVENT_PROGRESS_DURATION_CHANGED
```

Событие посылается при изменении длительности текущего инстанс-ивента. Посылается только если включено слежение за прогрессом ивента, поэтому при каждом включении слежения за прогрессом (после получения сообщения EVENT_MATCH_MAKING_EVENT_PROGRESS_ADDED) текущее состояние нужно проверять дополнительно.

### Список параметров

Параметры отсутствуют.

## Смотрите также

- [EVENT_MATCH_MAKING_EVENT_PROGRESS_ADDED](/api/events/events.EVENT_MATCH_.md#event-match-making-event-progress-added)
- [matchMaking.GetEventProgressInfo](/api/category/matchMaking/function.matchMaking.GetEventProgressInfo.md)

---

## EVENT_MATCH_MAKING_EVENT_PROGRESS_MEMBER_CHANGED

### Описание

```
EVENT_MATCH_MAKING_EVENT_PROGRESS_MEMBER_CHANGED
```

Событие посылается каждый раз, когда изменяется информация о достижениях одного из участников текущего инстанс-ивента.

### Список параметров

Параметры отсутствуют.

## Смотрите также

- [matchMaking.GetEventProgressInfo](/api/category/matchMaking/function.matchMaking.GetEventProgressInfo.md)

---

## EVENT_MATCH_MAKING_EVENT_PROGRESS_MEMBERS_CHANGED

### Описание

```
EVENT_MATCH_MAKING_EVENT_PROGRESS_MEMBERS_CHANGED
```

Событие посылается каждый раз, когда изменяется список с достижениями участников текущего инстанс-ивента (добавляются или удаляются участники).

### Список параметров

Параметры отсутствуют.

---

## EVENT_MATCH_MAKING_EVENT_PROGRESS_REMOVED

### Описание

```
EVENT_MATCH_MAKING_EVENT_PROGRESS_REMOVED
```

Событие посылается каждый раз, когда удаляется информация о прогрессе текущего инстанс-ивента, скорее всего в результате соответствующего вызова.

### Список параметров

Параметры отсутствуют.

---

## EVENT_MATCH_MAKING_EVENT_PROGRESS_ROUNDS_CHANGED

### Описание

```
EVENT_MATCH_MAKING_EVENT_PROGRESS_ROUNDS_CHANGED
```

Событие посылается каждый раз, когда изменяется номер текущего раунда, длительности раундов или времена начала раундов.

### Список параметров

Параметры отсутствуют.

## Смотрите также

- [matchMaking.GetEventProgressInfo](/api/category/matchMaking/function.matchMaking.GetEventProgressInfo.md)

---

## EVENT_MATCH_MAKING_EVENT_QUEUE_ADDED

### Описание

```
EVENT_MATCH_MAKING_EVENT_QUEUE_ADDED
```

Событие посылается каждый раз, когда аватар присоединяется к очереди на какой-либо инстанс-ивент.

### Список параметров

- **`eventId`** (`ObjectId`) - id инстанс-ивента.

## Смотрите также

- [EVENT_MATCH_MAKING_EVENT_QUEUE_REMOVED](/api/events/events.EVENT_MATCH_.md#event-match-making-event-queue-removed)

---

## EVENT_MATCH_MAKING_EVENT_QUEUE_REMOVED

### Описание

```
EVENT_MATCH_MAKING_EVENT_QUEUE_REMOVED
```

Событие посылается каждый раз, когда аватар выходит из очереди на какой-либо инстанс-ивент.

### Список параметров

- **`eventId`** (`ObjectId`) - id инстанс-ивента.

## Смотрите также

- [EVENT_MATCH_MAKING_EVENT_QUEUE_ADDED](/api/events/events.EVENT_MATCH_.md#event-match-making-event-queue-added)

---

## EVENT_MATCH_MAKING_EVENT_QUEUES_REMOVED

### Описание

```
EVENT_MATCH_MAKING_EVENT_QUEUES_REMOVED
```

Событие посылается, когда аватар удаляется сразу из всех очередей на инстанс-ивенты, в которых он находился (например в случае приглашения на инстанс-ивент).

### Список параметров

Параметры отсутствуют.

## Смотрите также

- [EVENT_MATCH_MAKING_EVENT_QUEUE_ADDED](/api/events/events.EVENT_MATCH_.md#event-match-making-event-queue-added)
- [EVENT_MATCH_MAKING_EVENT_QUEUE_REMOVED](/api/events/events.EVENT_MATCH_.md#event-match-making-event-queue-removed)

---

## EVENT_MATCH_MAKING_EVENT_REMOVED

### Описание

```
EVENT_MATCH_MAKING_EVENT_REMOVED
```

Событие посылается каждый раз, когда из списка инстанс-ивентов удаляется какой-либо элемент. Должно быть включено получение и отслеживание информации об инстанс-ивентах.

### Список параметров

- **`eventId`** (`ObjectId`) - id удалённого инстанс-ивента.

## Смотрите также

- [matchMaking.ListenEvents](/api/category/matchMaking/function.matchMaking.ListenEvents.md)

---

## EVENT_MATCH_MAKING_EVENTS_AVAILABILITY_CHANGED

### Описание

```
EVENT_MATCH_MAKING_EVENTS_AVAILABILITY_CHANGED
```

Событие посылается когда у аватара появляется или теряется способность участвовать в инстанс-ивентах.

### Список параметров

- **`isAvailable`** (`boolean`) - true если способность появилась, иначе false.

## Смотрите также

- [matchMaking.CanUseMatchMaking](/api/category/matchMaking/function.matchMaking.CanUseMatchMaking.md)
- [EVENT_MATCH_MAKING_EVENT_AVAILABILITY_CHANGED](/api/events/events.EVENT_MATCH_.md#event-match-making-event-availability-changed)

---

## EVENT_MATCH_MAKING_EVENTS_CHANGED

### Описание

```
EVENT_MATCH_MAKING_EVENTS_CHANGED
```

Событие посылается всякий раз, когда каким-либо образом меняется информация о списке существующих в игре инстанс-ивентов (список стал доступен, список стал недоступен, добавлены или удалены элементы списка).

### Список параметров

Параметры отсутствуют.

---

## EVENT_MATCH_MAKING_EVENT_TELEPORT_REJECTED

### Описание

```
EVENT_MATCH_MAKING_EVENT_TELEPORT_REJECTED
```

Событие посылается, когда приглашение телепортироваться на инстанс-ивент теряет силу либо из-за отказа игрока или кого-то из членов группы, в составе которой игрок стоит в очереди на инстанс-ивент, либо из-за того, что игрок или его согрупник не отреагировал на приглашение за отведённое ему время.

### Список параметров

- **`eventId`** (`ObjectId`) - Id инстанс-ивента, приглашение на который потеряло силу.

- **`isTimeout`** (`boolean`) - если true, то приглашение потеряло силу из-за истечения времени, если false, то из-за отказа игрока или кого-то из членов группы.

## Смотрите также

- [EVENT_MATCH_MAKING_EVENT_TELEPORT_REQUEST](/api/events/events.EVENT_MATCH_.md#event-match-making-event-teleport-request)

---

## EVENT_MATCH_MAKING_EVENT_TELEPORT_REQUEST

### Описание

```
EVENT_MATCH_MAKING_EVENT_TELEPORT_REQUEST
```

Событие посылается, когда подходит очередь игрока на участие в инстанс-ивенте. Если до истечения таймаута ответ не послан, приглашение считается отвергнутым. Ответ (принять или отказаться) посылается через matchMaking.InstancedEventTeleportReply().

### Список параметров

- **`eventId`** (`ObjectId`) - Id инстанс-ивента, на который пришло приглашение.

- **`timeoutMs`** (`number`) - время ожидания ответа (в ms), если ответа в течение этого времени нет, то приглашение считается отвергнутым.

- **`isDelayedInvite`** (`boolean`) - `true`, если аватар не может быть телепортирован сразу после согласия (например получил приглашение во время боя); в этом случае если согласие дано, аватар будет телепортирован в инстанс-ивент только по истечении `timeoutMs`; поведение при игнорировании приглашения от значения `isDelayedInvite` не зависит.

---

## EVENT_MATCH_MAKING_EVENT_VISITS_CHANGED

### Описание

```
EVENT_MATCH_MAKING_EVENT_VISITS_CHANGED
```

Событие посылается каждый раз, когда для какого-либо инстанс-ивента меняется информация о количестве посещений за сегодняшний день основным игроком.

### Список параметров

- **`eventId`** (`ObjectId`) - id добавленного инстанс-ивента.

## Смотрите также

- [EVENT_LFG_DESTINATION_CHANGED](/api/events/events.EVENT_LFG_.md#event-lfg-destination-changed)

---

## EVENT_MATCH_MAKING_JOIN_TIME_CHANGED

### Описание

```
EVENT_MATCH_MAKING_JOIN_TIME_CHANGED
```

Событие посылается каждый раз, когда каким-либо образом (добавляется, удаляется, меняется) изменяется оценка времени ожидания присоединения к какому-либо инстанс-ивенту. Должно быть включено получение и отслеживание информации об инстанс-ивентах.

### Список параметров

- **`eventId`** (`ObjectId`) - id инстанс-ивента, для которого изменилась оценка времени ожидания присоединения.

## Смотрите также

- [matchMaking.ListenEvents](/api/category/matchMaking/function.matchMaking.ListenEvents.md)

---

## EVENT_MATCH_MAKING_MEMBERS_ROLES_CHANGED

### Описание

```
EVENT_MATCH_MAKING_MEMBERS_ROLES_CHANGED
```

Событие посылается каждый раз, когда меняется роль хотя бы одного персонажа в группе.

### Список параметров

- **`eventId`** (`ObjectId` | `nil`) - идентификатор активности в которую собирается группа, nil - если поменялись роли в текущей активности в которой находится игрок.

---

## EVENT_MATCH_MAKING_PROGRESS_ACHIEVEMENTS_CHANGED

### Описание

```
EVENT_MATCH_MAKING_PROGRESS_ACHIEVEMENTS_CHANGED
```

Событие посылается каждый раз, когда изменяется информация о достижениях команд-участников текущего инстанс-ивента.

### Список параметров

Параметры отсутствуют.

## Смотрите также

- [matchMaking.GetEventProgressInfo](/api/category/matchMaking/function.matchMaking.GetEventProgressInfo.md)

---

## EVENT_MATCH_MAKING_PROGRESS_MEMBERS_ACHIEVEMENTS_CHANGED

### Описание

```
EVENT_MATCH_MAKING_PROGRESS_MEMBERS_ACHIEVEMENTS_CHANGED
```

Событие посылается, когда изменяется список ресурсов, начисленных какому-либо из участников инстанс-ивента в качестве достижений (в списке появился новый ресурс или изменилось количество какого-либо уже присутствующего в списке ресурса). Посылается не чаще 1 раза в секунду.

### Список параметров

Параметры отсутствуют.