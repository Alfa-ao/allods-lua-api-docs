# rules.BillingInfoUpdate

Запрашивает обновление информации о бонусах, имеющихся в данный момент у аккаунта.

## Описание

```lua
rules.BillingInfoUpdate()
```

Большая часть информации о бонусах обновляется автоматически, однако неиспользованный остаток обновляется только по запросу. В ответ на запрос приходит событие `EVENT_BILLINGINFO_BONUS_STATUS_CHANGED`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Запрос обновления информации

```lua
rules.BillingInfoUpdate()
```

## Смотрите также

- [rules.BillingInfoGetBonusInfo](function.rules.BillingInfoGetBonusInfo)
- [EVENT_BILLINGINFO_BONUS_STATUS_CHANGED](events.billing#event-billinginfo-bonus-status-changed)