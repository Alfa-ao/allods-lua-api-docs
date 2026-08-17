---
outline: deep
---
# EVENT_BILLINGINFO_BONUS_CHANGED

Уведомление о том, что изменилась, добавлена или удалена информация о бонусе (та её часть, которая не требует `rules.BillingInfoUpdate()`).

## Описание

```
EVENT_BILLINGINFO_BONUS_CHANGED
```

## Список параметров

- **`bonusId`** (`BillingBonusId`) - идентификатор бонуса, информация о котором изменилась.

### Смотрите также

- [rules.BillingInfoGetBonusInfo](/api/category/rules/function.rules.BillingInfoGetBonusInfo.md)

---

# EVENT_BILLINGINFO_BONUS_STATUS_CHANGED

Уведомление о том, что пришёл ответ на запрос об обновлении информации о бонусах.

## Описание

```
EVENT_BILLINGINFO_BONUS_STATUS_CHANGED
```

## Список параметров

- **`status`** (`string`) - статус выполнения запроса (`"ENUM_MsgGetBonusListResultResult_..."`). Указывает, удачно ли выполнен запрос или причину неудачи.

### Смотрите также

- [rules.BillingInfoUpdate](/api/category/rules/function.rules.BillingInfoUpdate.md)
- [rules.BillingInfoGetBonusInfo](/api/category/rules/function.rules.BillingInfoGetBonusInfo.md)