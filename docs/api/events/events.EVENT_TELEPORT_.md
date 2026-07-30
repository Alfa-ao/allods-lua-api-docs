## EVENT_TELEPORT_OFFER_REQUEST
### Описание
```
EVENT_TELEPORT_OFFER_REQUEST
```
Событие приходит, когда одногруппник собирается телепортироваться. Ответить нужно avatar.TeleportOfferReply( accept ). На ответ отводится определённое время.(HELP)

### Список параметров
- **`requesterId`** (`ObjectId`) - Идентификатор одногруппника, приславшего запрос.
- **`timeoutMs`** (`number`) - Время в миллисекундах, за которое надо дать ответ.